// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import 'virtual:uno.css'
import Scrollbar from "./components/Scrollbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Transition from "./components/Transition";
import { MetaProvider } from "@solidjs/meta";

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
