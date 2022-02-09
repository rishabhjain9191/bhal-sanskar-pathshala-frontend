import "./App.css";
import Card from "./Card.js";

const data = [
  { id: 1, statement: "Mahavir bhagwan ka chinha kya hai ?" },
  { id: 2, statement: "Chandraprabhu bhagwan ka chinha kya hai ?" },
  { id: 3, statement: "Aadinath bhagwan kaha se moksh gae" },
  { id: 4, statement: "Vasupujva bhagwan kaha se moksh gae" },
  { id: 5, statement: "shikhar ji se kitne tirthankar moksh gae ?" },
  { id: 6, statement: "Mahavir bhagwan kaha se moksh gae ?" },
  { id: 7, statement: "Neminath bhagwan kaha se moksh gae ?" },
];

function App() {
  return (
    <div className="App">
      {data.map((question) => (
        <Card key={question.id} content={question.statement} />
      ))}
    </div>
  );
}

export default App;
