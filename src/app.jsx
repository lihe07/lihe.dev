// @refresh reload
import { Router } from "@solidjs/router";
import { Suspense } from "solid-js";

import { FileRoutes } from "@solidjs/start";
import "uno.css";
import Scrollbar from "./components/Scrollbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Transition from "./components/Transition";
import { MetaProvider, Title } from "@solidjs/meta";

export default function Root() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Transition>
            <Scrollbar>
              <Header />
              <Suspense>
                {props.children}
              </Suspense>
              <Footer />
            </Scrollbar>
          </Transition>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
