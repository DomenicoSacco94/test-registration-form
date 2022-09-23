import './App.css';
import SubmitButton from "./SubmitButton";
import {useState} from "react";
import Input from "./Input";
import {validateForm, validateMail, validatePassword} from "./ValidationUtils";

function App() {

    const [validations, setValidations] = useState({
        mail: validateMail(),
        password: validatePassword()
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const parseMail = (event) => {
        const mail = event.target.value;

        setValidations({
                ...validations,
                mail: validateMail(mail)
            }
        )
        setIsFormValid(validateForm(validations))
    }

    const parsePassword = (event) => {
        const password = event.target.value;

        setValidations({
                ...validations,
                password: validatePassword(password)
            }
        )
        setIsFormValid(validateForm(validations))
    }

    return (
        <>
            <div className="appHeader"> Registration</div>
            <div className="formContainer fixedBox">
                <div className="formColumn">
                    <Input name="Email" type="mail" validationResults={validations.mail}
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
