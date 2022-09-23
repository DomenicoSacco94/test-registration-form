import './App.css';
import SubmitButton from "./SubmitButton";
import {useState} from "react";
import Input from "./Input";
import {validateForm, validateMail} from "./ValidationUtils";

const defaultValidationResults = {
    mail : {
        'valid mail address': false
    },
    password: {
        '8+ characters': false,
        'lowercase letter': false,
        'uppercase letter': false,
        'number': false,
        'special character': false
    }
}

function App() {

    const [validations, setValidations] = useState(defaultValidationResults);
    const [isFormValid, setIsFormValid] = useState(false);

    const parseMail = (event) => {
        setValidations({...validations ,
            mail : {
                'valid mail address': validateMail(event.target.value)
            }}
        )
        setIsFormValid(validateForm(validations))
    }

    const parsePassword = (event) => {
        setValidations({...validations ,
            password : {
                '8+ characters': false,
                'lowercase letter': false,
                'uppercase letter': false,
                'number': false,
                'special character': false
            }}
        )
        setIsFormValid(validateForm(validations))
    }

    return (
        <>
        <div className="appHeader"> Registration </div>
            <div className="formContainer fixedBox">
                <div className="formColumn">
                <Input name="Email" type="mail" validationResults={validations.mail} validationDivClass="validationDivMail" onChange={parseMail}/>
                </div>
                <div className="formColumn">
                <Input name="Password" type="text" validationResults={validations.password} validationDivClass="validationDiv" onChange={parsePassword}/>
                <SubmitButton disabled={!isFormValid}/>
                </div>
            </div>
        </>
    );
}

export default App;
