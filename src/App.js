import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViewPoint } from "./components/viewPoint/ViewPoint";
import { Provider } from "../src/context/Provider";
import { Login } from "./pages/login/Login";
import { NewUser } from "./pages/register/NewUser"
import { Dashboard } from "./pages/dashboard/Dashboard";
import { CreateGroup } from "./pages/createGroup/CreateGroup";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<ViewPoint />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<NewUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-group" element={<CreateGroup />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
