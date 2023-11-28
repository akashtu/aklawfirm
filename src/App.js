import "./App.css";
import { Area } from "./Components/Area/Area";
import { Choose } from "./Components/Choose/Choose";
import { Clients } from "./Components/Clients/Clients";
import { Faq } from "./Components/FAQ/Faq";
import { Footer } from "./Components/Footer/Footer";
import { Introduce } from "./Components/Introduce/Introduce";
import { Subscribe } from "./Components/Subscribe/Subscribe";
import { Team } from "./Components/Team/Team";
import { Top } from "./Components/Top/Top";

function App() {
  return (
    <div className="App">
      <Top />
      <Introduce />
      <Choose />
      <Area />
      <Clients />
      <Team />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
