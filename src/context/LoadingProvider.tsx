import { createContext, useContext, useMemo, useState, type PropsWithChildren } from "react";
import Loading from "../components/Loading";

type LoadingContextType = {
  loading: number;
  isLoading: boolean;
  setLoading: (value: number) => void;
  setIsLoading: (value: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const value = useMemo(
    () => ({ loading, isLoading, setLoading, setIsLoading }),
    [loading, isLoading]
  );

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={Math.min(100, Math.max(0, loading))} />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
};
