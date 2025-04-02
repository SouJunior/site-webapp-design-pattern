import { CtaButton } from "./components/cta-button";

function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Design System Demo</h1>
      <CtaButton label="Faça Parte" onClick={() => alert("Botão clicado!")} />
    </main>
  );
}

export default App;
