import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

// Note how this is a default export, with no name
export default function () {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>BROKEN</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">See working page</Link>
            </li>
          </ul>
        </nav>
        <p>Try making changes to this page with the dev server running</p>
      </div>
    </div>
  );
}
