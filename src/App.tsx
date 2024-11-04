import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes/Routes";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
