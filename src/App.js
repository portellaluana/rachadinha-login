import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViewPoint } from "./components/viewPoint/ViewPoint";
import { Provider } from "../src/context/Provider";
import { Login } from "./pages/login/Login";
import { NewUser } from "./pages/register/NewUser"

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<ViewPoint />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<NewUser />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
