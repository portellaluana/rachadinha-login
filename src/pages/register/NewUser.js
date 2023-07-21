import { BackgroundLogin } from "../../components/background/BackgroundLogin"
import { ModalNewUser } from "../../components/modal/ModalNewUser"
export const NewUser = () => {

    return (
        <div className="login-container">
            <BackgroundLogin/>
            <ModalNewUser/>
        </div>
    )
}