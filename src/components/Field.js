import {ValidationResults} from "./ValidationResults";

export const Field = ({label, type, validationClass, validationResults, onChange, placeholder}) => {

    return (
        <>
            <div className="label"> {label} </div>
            <input data-testid={`form-field-${label}`} placeholder={placeholder} onChange={onChange} type={type} className="input formItem"/>
            <ValidationResults validationResults={validationResults} validationClass={validationClass} />
        </>
    );
}
