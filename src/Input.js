function Input({name, type, className, validationResults}) {



    return (
        <>
        <div className="label"> {name} </div>
        <input type={type} className="input formItem" placeholder="mail"/>
            <div className={className}>
                {validationResults.map(validation => <div> {validation} </div>)}
            </div>
        </>
    );
}

export default Input;
