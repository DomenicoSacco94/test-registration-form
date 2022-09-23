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

export function validateForm(validations) {
    return Object.values(validations.mail)
        .concat(Object.values(validations.password))
        .every(element => element);
}

function validateEmailAddress(string) {
    return true;
}

function validateCharactersLength(string) {
    return true;
}

function validateLowerCase(string) {
    return true;
}

function validateUpperCase(string) {
    return true;
}

function validateNumber(string) {
    return true;
}

function validateSpecialCharacter(string) {
    return true;
}