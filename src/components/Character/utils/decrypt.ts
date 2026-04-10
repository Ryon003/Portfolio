async function generateAESKey(password: string): Promise<CryptoKey> {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

const decryptPromiseCache = new Map<string, Promise<ArrayBuffer>>();

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  const cacheKey = `${url}:${password}`;
  const cached = decryptPromiseCache.get(cacheKey);
  if (cached) return cached;

  const decryptTask = (async () => {
    const response = await fetch(url);
    const encryptedData = await response.arrayBuffer();
    const iv = new Uint8Array(encryptedData.slice(0, 16));
    const data = encryptedData.slice(16);
    const key = await generateAESKey(password);
    return crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
  })();

  decryptPromiseCache.set(cacheKey, decryptTask);
  decryptTask.catch(() => {
    decryptPromiseCache.delete(cacheKey);
  });
  return decryptTask;
};
