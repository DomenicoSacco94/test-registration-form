import './App.css';
import InputForm from "./InputForm";
import SubmitButton from "./SubmitButton";

function App() {
    return (
        <>
        <div className="appHeader"> Upper Text</div>
            <div className="formContainer fixed">
                <InputForm />
                <InputForm />
                <SubmitButton/>
            </div>
        </>
    );
}

export default App;
