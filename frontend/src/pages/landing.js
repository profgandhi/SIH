import Login from "../components/login";
import Diagnosis from "../components/diagnosis";

export default function () {
    return (
        <div className="w-100 h-100 d-flex flex-column justify-content-evenly align-items-center">
        <h1>Disease Diagnosis</h1>
        <div className="w-100 h-80 d-flex flex-row justify-content-evenly align-items-center">
            <Login />
            <Diagnosis />
        </div>
        </div>
    );
}
