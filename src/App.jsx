import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <Intro />

        <hr />
      </main>
    </div>
  );
}

export default App;
