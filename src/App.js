import './App.css';
import SubmitButton from "./components/SubmitButton";
import Input from "./components/Input";
import {useFormValidation} from "./hooks/useFormValidation";

function App() {

   const [isFormValid, validations, parseMail, parsePassword] = useFormValidation();

    return (
        <>
            <div className="appHeader"> Registration</div>
            <div className="formContainer fixedBox">
                <div className="formColumn">
                    <Input name="Email" type="email"
                           validationDivClass="validationDivMail" onChange={parseMail}/>
                </div>
                <div className="formColumn">
                    <Input name="Password" type="text" validationResults={validations.password}
                           validationDivClass="validationDiv" onChange={parsePassword}/>
                    <SubmitButton disabled={!isFormValid}/>
                </div>
            </div>
        </>
    );
}

export default App;
