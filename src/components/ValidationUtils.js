export const validateMail = (mail) => {
    return {
        'valid mail address': validateEmailAddress(mail)
    }
}

export const validatePassword = (password) => {
    return {
        '8+ characters': validateCharactersLength(password),
        'lowercase letter': validateLowerCase(password),
        'uppercase letter': validateUpperCase(password),
        'number': validateNumber(password),
        'special character': validateSpecialCharacter(password)
    }
}

export const validateForm = (validations) => {
    return Object.values(validations.mail)
        .concat(Object.values(validations.password))
        .every(element => element);
}

const validateEmailAddress = (email) => {
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return expression.test(String(email).toLowerCase())
}

const validateCharactersLength = (string) => {
    return string?.length > 7;
}

const validateLowerCase = (string) => {
    const expression = /.*[a-z].*/;
    return !!string && expression.test(string);
}

const validateUpperCase = (string) => {
    const expression = /.*[A-Z].*/;
    return expression.test(string);
}

const validateNumber = (string) => {
    const expression = /.*\d.*/;
    return expression.test(string);
}

const validateSpecialCharacter = (string) => {
    const expression = /[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/;
    return expression.test(string);
}