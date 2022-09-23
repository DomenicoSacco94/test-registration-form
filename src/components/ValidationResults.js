import {Image} from "./Image";

export const ValidationResults = ({validationResults, validationClass}) => {

    return (
        <>
            {validationResults && <div className={validationClass}>
                {Object.entries(validationResults).map(([key, value]) => <div
                    key={key}> {value ? <Image src="/correct.svg" alt="YES"/> :
                    <Image src="/wrong.svg" alt="NO"/>} {key} </div>)}
            </div>}
        </>
    );
}
