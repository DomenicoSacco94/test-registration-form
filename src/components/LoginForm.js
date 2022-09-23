import {SubmitButton} from "./SubmitButton";
import {Field} from "./Field";
import {useFormValidation} from "../hooks/useFormValidation";

export const LoginForm = () => {

    const [isFormValid, validations, parseMail, parsePassword, onSubmit] = useFormValidation();

    return (
        <>
            <div className="formHeader"> Registration</div>
            <div className="formContainer fixedBox">
                <div className="formColumn">
                    <Field label="Email" type="email" onChange={parseMail}/>
                </div>
                <div className="formColumn">
                    <Field label="Password" type="text" validationResults={validations.password}
                           validationClass="validationDiv" onChange={parsePassword}/>
                    <SubmitButton disabled={!isFormValid} onSubmit={onSubmit}/>
                </div>
            </div>
        </>
    );
}
