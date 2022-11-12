import TypeIt from "typeit-react";
import './style.css'
import { useEffect } from "react";

function App(props) {
  useEffect(() => {
    document.title = props.title
  })
  return (
    <div>
      <div className="App">
        <div>
          <h1><TypeIt options={{speed: 50,waitUntilVisible: true,}} element={"h1"}>Best store for all your laptop needs</TypeIt></h1>
          <section>
            <div>
              <p>New</p>
              <h2>ASUS TUF Gaming F17</h2>
              <h4>Mechanized <span className="endurance">endurance</span>. Battlefield <span className="brilliance">brilliance</span>.</h4>
              <button>Buy now</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
