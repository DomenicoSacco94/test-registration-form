import './App.css';
import InputForm from "./InputForm";
import SubmitButton from "./SubmitButton";
import MailForm from "./MailForm";

function App() {
    return (
        <>
        <div className="appHeader"> Registration </div>
            <div className="formContainer fixedBox">
                <div className="formColumn">
                <MailForm />
                </div>
                <div className="formColumn">
                <InputForm />
                <SubmitButton/>
                </div>
            </div>
        </>
    );
}

export default App;
