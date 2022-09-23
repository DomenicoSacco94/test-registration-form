function Input({name, type, validationDivClass, validationResults, onChange}) {

    return (
        <>
            <div className="label"> {name} </div>
            <input onChange={onChange} type={type} className="input formItem" placeholder="mail"/>
            <div className={validationDivClass}>
                {Object.entries(validationResults).map(([key, value]) => <div
                    key={key}> {value ? 'true' : 'false'} {key} </div>)}
            </div>
        </>
    );
}

export default Input;
