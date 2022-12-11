import preactLogo from "./assets/preact.svg";
import "./style/index.css";

export function App() {
  return (
    <>
      <div className=" bg-black p-10">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1 className=" text-red-500">Slick UI</h1>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
