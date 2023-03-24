import "./App.css";
import AllRoutes from "./Components/AllRoutes";
// import AllLinks from "../src/Components/AllLinks"
import "bootstrap/dist/css/bootstrap.min.css";
// import AuthContextProvider, { AuthContext }  from "./Components/Context/AuthContext";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      
        <div style={{ marginTop: "3%",  }} className="allRoutes">
          <AllRoutes />
        </div>

        
     
    </div>
  );
}

export default App;

{/* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/IR4qwR9K7HY"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>; */}
