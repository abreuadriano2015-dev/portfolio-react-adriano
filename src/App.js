import foto from "./assets/foto.jpg";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import "./App.css"; // Importante para o CSS carregar!

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img 
          src={foto} 
          alt="Foto de Adriano" 
          className="profile-pic" 
        />
        <Header />
      </header>
      
      <main>
        <Projetos />
      </main>
    </div>
  );
}

export default App;