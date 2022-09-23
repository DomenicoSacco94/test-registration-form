import {Image} from "./Image";

function Input({name, type, validationDivClass, validationResults, onChange}) {

    return (
        <>
            <div className="label"> {name} </div>
            <input onChange={onChange} type={type} className="input formItem" placeholder="mail"/>
            {validationResults && <div className={validationDivClass}>
                {Object.entries(validationResults).map(([key, value]) => <div
                    key={key}> {value ? <Image src="/correct.svg" alt="YES"/> :
                    <Image src="/wrong.svg" alt="NO"/>} {key} </div>)}
            </div>}
        </>
    );
}

export default Input;
