import styled from "styled-components"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Trending from "./components/Trending"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div>
        <h2>Trending</h2>
        <Trending />
        <h2>Series</h2>
      </div>

    </div>
  );
}

export default App;
