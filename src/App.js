import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";

function App() {

  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
