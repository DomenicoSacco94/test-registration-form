function Input({name, type, validationDivClass, validationResults, setValue}) {

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
        <div className="label"> {name} </div>
        <input onChange={onChange} type={type} className="input formItem" placeholder="mail"/>
            <div className={validationDivClass}>
                {validationResults.map(validation => <div> {validation} </div>)}
            </div>
        </>
    );
}

export default Input;
