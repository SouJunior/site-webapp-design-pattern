import { Header } from '@components/header';
import { CtaButton } from "./components/cta-button";

function App() {
  return (
    <>
    <Header/>
    <main style={{ padding: "2rem", marginTop: "60px" }}>
      <h1>Design System Demo</h1>
      <CtaButton label="Faça Parte" onClick={() => alert("Botão clicado!")} />
    </main>
    </>
  );
}

export default App;
