import "./App.css";
import picture from "./download.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <h1>We serve the most {props.adjective} food around</h1>
      <img src={picture} height={200} alt={"random resturant"} />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = ["Macaroni and Cheese", "Salmon", "Tofu with Vegetable"];

const dishObject = dishes.map((dish, i) => ({ id: i, name: dish }));

function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main adjective="Amazing" dishes={dishObject} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
