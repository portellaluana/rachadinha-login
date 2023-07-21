import { BackgroundLogin } from "../../components/background/BackgroundLogin";
import { ModalLogin} from "../../components/modal/ModalLogin"

export const Login = () => {


  return (
    <div className="login-container">
      <BackgroundLogin />
      <ModalLogin />
    </div>
  );
};
