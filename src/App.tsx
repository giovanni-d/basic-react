import incentroLogo from "/incentro.svg";

export function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <img src={incentroLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Basic React</h1>
    </div>
  );
}
