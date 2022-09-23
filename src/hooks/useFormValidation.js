import {useState} from "react";
import {validateForm, validateMail, validatePassword} from "../components/ValidationUtils";

export const useFormValidation = () => {

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

    return [isFormValid, validations, parseMail, parsePassword]
}