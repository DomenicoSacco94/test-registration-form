function SubmitButton({onSubmit, disabled}) {

    return (
        <div className="submitDiv">
            <button onClick={onSubmit} disabled={disabled} className="submitButton formItem"> Submit</button>
        </div>
    );
}

export default SubmitButton;
