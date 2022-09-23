import './App.css';
import SubmitButton from "./SubmitButton";
import {useState} from "react";
import Input from "./Input";

function App() {

    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');

    const onSubmit = () => {
        console.log(password)
        console.log(mail)
    }

    const validationResults = [
        '8+ characters',
        'lowercase letter',
        'uppercase letter',
        'number',
        'special character'
    ]

    return (
        <>
        <div className="appHeader"> Registration </div>
            <div className="formContainer fixedBox">
                <div className="formColumn">
                <Input name="Email" type="mail" validationResults={['mailVal']} validationDivClass="validationDivMail" setValue={setMail}/>
                </div>
                <div className="formColumn">
                <Input name="Password" type="text" validationResults={validationResults} validationDivClass="validationDiv" setValue={setPassword}/>
                <SubmitButton onSubmit={onSubmit}/>
                </div>
            </div>
        </>
    );
}

export default App;
