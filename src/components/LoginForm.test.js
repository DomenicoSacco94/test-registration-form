import {fireEvent, render, screen, within} from '@testing-library/react';
import App from '../App';
import {validateMail, validatePassword} from "./ValidationUtils";
import '@testing-library/jest-dom';

describe('LoginForm', () => {

    describe('Rendering Tests', ()=> {
        test('The form renders', () => {
            render(<App/>);
            expect(screen.getByText("Email")).toBeInTheDocument();
            expect(screen.getByText("Password")).toBeInTheDocument();
            expect(screen.getByText("Submit")).toBeInTheDocument();
            expect(screen.getByTestId("form-field-Email")).toBeInTheDocument();
            expect(screen.getByTestId("form-field-Password")).toBeInTheDocument();
        });

        test('Password validation rules are rendering', () => {
            render(<App/>);
            Object.keys(validatePassword('test'))
                .forEach(key => expect(screen.getByText(key)).toBeInTheDocument())
        });

        test('Mail validation rules are not rendering', () => {
            render(<App/>);
            Object.keys(validateMail('test'))
                .forEach(key => expect(screen.queryByText(key)).toBeNull())
        });
    })

    describe('General Validation Tests', ()=> {
        test('Submit button is disabled by default', () => {
            render(<App/>);
            expect(screen.getByText("Submit")).toBeDisabled()
        });

        test('An invalid mail and password do not allow to submit', () => {
            testInputs('anInvalidMail', '1234', false)
        });

        test('A valid mail but an invalid password does not allow to submit', () => {
            testInputs('valid@mail.com', '1234', false)
        });

        test('A valid password but an invalid mail does not allow to submit', () => {
            testInputs('anInvalidMail', 'awdtr!2Sdld', false)
        });

        test('Both valid mail and password allow submit', () => {
            testInputs('valid@mail.com', 'awdtr!2Sdld', true)
        });
    })

    describe('Password Validation Tests', ()=> {

        test('Password is invalid for not having 8+ characters', () => {
            testPasswordRule('!2Sdld','8+ characters')
        });

        test('Password is invalid for not having uppercase', () => {
            testPasswordRule('awdtr!2dld','uppercase letter')
        });

        test('Password is invalid for not having lowercase', () => {
            testPasswordRule('FESFS!2SDLD','lowercase letter')
        });

        test('Password is invalid for not having special character', () => {
            testPasswordRule('awdtr2Sdld','special character')
        });

        test('Password is invalid for not having number', () => {
            testPasswordRule('awdtr!Sdld','number')
        });
    })

});

const testInputs = (mail, password, isSubmitEnabled) => {
    render(<App/>);
    fireEvent.change(screen.getByTestId("form-field-Email"), {target: {value: mail}})
    fireEvent.change(screen.getByTestId("form-field-Password"), {target: {value: password}})
    const submitButton = screen.getByText("Submit")
    isSubmitEnabled? expect(submitButton).toBeEnabled() : expect(submitButton).toBeDisabled()
}

const testPasswordRule = (password, ruleName) => {
    testInputs('valid@mail.com', password, false)
    expect(within(screen.getByText(ruleName)).getByAltText('NO')).toBeInTheDocument()
    Object.keys(validatePassword(password))
        .filter(key=> key!==ruleName)
        .forEach(key => expect(within(screen.getByText(key)).getByAltText('YES')).toBeInTheDocument())
}