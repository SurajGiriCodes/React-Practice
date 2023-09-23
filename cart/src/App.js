import "./App.css";
import CartContext from "./CartContext";
import { useGlobalContext } from "./context";

import Navbar from "./Navbar";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <CartContext />
    </div>
  );
}

export default App;
