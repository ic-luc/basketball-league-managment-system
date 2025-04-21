import "./App.css";
import logo from "./kobvlogo.svg";
function App() {
  return (
    <div className="App">
      <header>
        <a href="/"><img src={logo} alt="KOBV Logo" id="logo"/></a>
        <nav>
          <ul>
            <li><a href="/meisterschaft">Meisterschaft</a></li>
            <li><a href="/downloads">Downloads</a></li>
            <li><a href="/verband">Verband</a></li>
            <li><a href="/termine">Termine</a></li>
            <li><a href="/playoffs">Playoffs</a></li>
            <li><a href="/downloads">Schiedsrichter</a></li>

          </ul>
        </nav>
      </header>
      <main>
        <h1>Kärntner und Osttiroler Basketballverband</h1>
        <div className="games">
          <h2>Anstehende Spiele</h2>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 KOBV (Created by Filip Lucic)</p>
        <a href="/impressum">Impressum & Datenschutzerklärung</a>
      </footer>
    </div>
  );
}

export default App;
