import "./App.css";

import { Card } from "./card/Card";
import { PiLightningBold } from "react-icons/pi";

function App() {
  return (
    <div className="app-container">
      <header>
        <a href="/">
          <PiLightningBold size={24} />
          <h1>Header</h1>
        </a>
      </header>

      <main>
        Main
        <ul className="card-list">
          <Card quantity={20} source="solar" time="00:00 AM" />
        </ul>
      </main>
      <aside>Sidebar</aside>

      <footer>
        <p>Sticky Footer - &copy; 2024 </p>
      </footer>
    </div>
  );
}

export default App;
