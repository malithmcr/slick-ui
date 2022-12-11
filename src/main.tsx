import { render } from "preact";
import { App } from "./app";
import "./tailwind.css";

render(<App />, document.getElementById("app") as HTMLElement);
