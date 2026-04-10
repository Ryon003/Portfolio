import { lazy, Suspense, useEffect } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  useEffect(() => {
    const preload = () => {
      import("./components/Character");
      import("./components/MainContainer");
      fetch("/models/character.enc").catch(() => null);
    };

    const idleWindow = window as Window & {
      requestIdleCallback?: (cb: IdleRequestCallback) => number;
    };
    if (idleWindow.requestIdleCallback) {
      idleWindow.requestIdleCallback(() => preload());
      return;
    }

    const timer = window.setTimeout(preload, 300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
