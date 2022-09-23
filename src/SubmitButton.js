function SubmitButton({onSubmit}) {

    return (
        <div className="submitDiv"> <button onClick={onSubmit} className="submitButton formItem"> Submit </button> </div>
    );
}

export default SubmitButton;
