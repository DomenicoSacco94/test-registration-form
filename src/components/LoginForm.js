import {SubmitButton} from "./SubmitButton";
import {Field} from "./Field";
import {useFormValidation} from "../hooks/useFormValidation";
import "./LoginForm.css"

export const LoginForm = () => {

    const [isFormValid, validations, parseMail, parsePassword, onSubmit] = useFormValidation();

    return (
        <>
            <div className="formHeader"> Registration</div>
            <div className="formContainer fixedBox">
                <div className="formColumn">
                    <Field label="Email" type="email" placeholder="example@mail.com" onChange={parseMail}/>
                </div>
                <div className="formColumn">
                    <Field label="Password" type="text" placeholder="password" validationResults={validations.password}
                           validationClass="validationDiv" onChange={parsePassword}/>
                    <SubmitButton disabled={!isFormValid} onSubmit={onSubmit}/>
                </div>
            </div>
        </>
    );
}
