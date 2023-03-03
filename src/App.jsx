import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./RouterConfig";
// import Treaty from "./pages/Treaty-landingpage/index";
function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
    // <Treaty />
  );
}

export default App;
