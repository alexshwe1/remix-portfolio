import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useOutletContext,
} from "@remix-run/react";
import NavBar from "./components/NavBar";
import stylesheet from "~/tailwind.css";
import Footer from "./components/Footer";
import { useRef } from "react";
import { MotionValue, useScroll, motion } from "framer-motion";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];


export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <NavBar />
          <Outlet/>
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}