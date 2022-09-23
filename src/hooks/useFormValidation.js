import {useCallback, useEffect, useState} from "react";
import {validateForm, validateMail, validatePassword} from "../components/ValidationUtils";

export const useFormValidation = () => {

    const [validations, setValidations] = useState({
        mail: validateMail(),
        password: validatePassword()
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const [formData, setFormData] = useState(null);

    useEffect(() =>
        setIsFormValid(validateForm(validations)), [validations])

    const onSubmit = () => console.log(formData);

    const parseField = useCallback((fieldName, callback) => (event) => {
        const value = event.target.value;
        setValidations({
                ...validations,
                [fieldName]: callback(value)
            }
        )
        setFormData({
            ...formData,
            [fieldName]: value
        })
    },[formData, validations])

    const parseMail = parseField("mail", validateMail);

    const parsePassword = parseField("password", validatePassword)

    return [isFormValid, validations, parseMail, parsePassword, onSubmit]
}