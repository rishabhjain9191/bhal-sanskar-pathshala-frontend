import "./App.css";
import Card from "./Card.js";

const data = [
  { id: 1, statement: "Mahavir bhagwan ka chinha kya hai ?" },
  { id: 2, statement: "Chandraprabhu bhagwan ka chinha kya hai ?" },
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
