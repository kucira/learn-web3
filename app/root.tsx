import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { ChakraProvider } from "@chakra-ui/react";

import Fonts from "~/shared/libs/Fonts";
import theme from "~/shared/libs/Theme";
import Header from "./shared/ui/Header";
import ModalProvider from "./shared/libs/ModalProvider";
import ModalWallet from "./shared/ui/ModalWallet";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

// export function links() {
//   return [{ rel: "stylesheet", href: styles }];
// }

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <ModalProvider>
            <ModalWallet />
            <Fonts />
            <Header />
            <Outlet />
          </ModalProvider>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
