import './App.css';

function Header() {
  return (
    <header>
      <h1>Krish's Workshop</h1>
    </header>
  )
}

function Main() {
  return (
    <section>
      <p>Tools to fix all your problems</p>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p>Here to help!</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
       < Header />
       < Main />
       < Footer />
    </div>
  );
}

export default App;
