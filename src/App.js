import './App.css';
import SubmitButton from "./components/SubmitButton";
import Input from "./components/Input";
import {useFormValidation} from "./hooks/useFormValidation";

const App = () => {

    const [isFormValid, validations, parseMail, parsePassword, onSubmit] = useFormValidation();

    return (
        <>
            <div className="appHeader"> Registration</div>
            <div className="formContainer fixedBox">
                <div className="formColumn">
                    <Input name="Email" type="email" onChange={parseMail}/>
                </div>
                <div className="formColumn">
                    <Input name="Password" type="text" validationResults={validations.password}
                           validationDivClass="validationDiv" onChange={parsePassword}/>
                    <SubmitButton disabled={!isFormValid} onSubmit={onSubmit}/>
                </div>
            </div>
        </>
    );
}

export default App;
