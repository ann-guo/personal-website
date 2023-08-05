import stylesheet from "~/tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from "./components/Nav";
import Toggle from "./components/Toggle";
import Card from "./components/Card";
import { useEffect } from "react";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];



export default function App() {
  return (   
    
    <html lang="en" >   
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />  
      </head>

    
    <div className="bg-graph-paper min-h-screen dark:bg-graph-paper-dark dark:bg-gray-900">
        <body>
          
          <NavBar />
          
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          
        </body>
    </div>
    
      
    </html>
  );
}
