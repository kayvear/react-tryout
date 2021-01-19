import './App.css';
import toolico from './logo.svg';

function Header(props) {
  // console.log(props);
  return (
    <header>
      <h1>{props.name}'s Workshop</h1>
    </header>
  )
};

function Main(props) {
  return (
    <section>
      <p>Tools to {props.verb} all your problems</p>
      <img src={toolico} height={200} alt="fake tool icon"/>
      <ul style={{ textAlign: "left" }}>
      {props.tools.map((tool) => (
        <li key={tool.id}>{tool.name}</li>
      ))}
      </ul>
    </section>
  )
};


function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
};

const tools = [
  "Hammer",
  "Spanner",
  "Wrench",
  "Hacksaw"
];

const toolObjects = tools.map((tool, i) => ({id: i, name: tool}));
// console.log(toolObjects);



function App() {
  return (
    <div className="App">
       < Header name="Krish"/>
       < Main verb="fix" tools={toolObjects}/>
       < Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
