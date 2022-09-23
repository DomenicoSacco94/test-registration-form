import {Image} from "./Image";

export const Field = ({label, type, validationClass, validationResults, onChange}) => {

    return (
        <>
            <div className="label"> {label} </div>
            <input onChange={onChange} type={type} className="input formItem" placeholder="mail"/>
            {validationResults && <div className={validationClass}>
                {Object.entries(validationResults).map(([key, value]) => <div
                    key={key}> {value ? <Image src="/correct.svg" alt="YES"/> :
                    <Image src="/wrong.svg" alt="NO"/>} {key} </div>)}
            </div>}
        </>
    );
}
