import {useEffect, useState} from "react";
import {validateForm, validateMail, validatePassword} from "../components/ValidationUtils";

export const useFormValidation = () => {

    const [validations, setValidations] = useState({
        mail: validateMail(),
        password: validatePassword()
    });

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() =>
        setIsFormValid(validateForm(validations)), [validations])

    const parseField = (fieldName, callback) => (event) => {
        const value = event.target.value;
        setValidations({
                ...validations,
                [fieldName]: callback(value)
            }
        )
    }

    const parseMail = parseField("mail", validateMail);

    const parsePassword = parseField("password", validatePassword)

    return [isFormValid, validations, parseMail, parsePassword]
}