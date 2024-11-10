// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createSignal, Suspense } from "solid-js";

import "virtual:uno.css";
import Scrollbar from "./components/Scrollbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Transition from "./components/Transition";
import { MetaProvider } from "@solidjs/meta";

export default function Root() {
  const [isDuringTransition, setIsDuringTransition] = createSignal(true);

  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Scrollbar>
            <Header isDuringTransition={isDuringTransition()} />
            <Transition onTransition={setIsDuringTransition}>
              <Suspense>{props.children}</Suspense>
              <Footer />
            </Transition>
          </Scrollbar>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
