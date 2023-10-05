import React, { useState } from 'react'

function InputCheckBox({label="",state=1}) {
    const [value, setValue] = useState(state);
    return (
        <>
            <div className="input-group d-flex ig justify-content-start align-items-center">
                <div
                    className={`input-check ${value ? "true" : "false"} d-flex align-items-center position-relative`}
                    onClick={() => setValue(value === 0 ? 1 : 0)}
                >
                    <div className={`input-circle bg-white  ${value ? "true" : "false"} position-absolute`}></div>
                </div>
                <span className="input-label-check ml-2">{label}</span>
            </div>
            <input
            className="d-none"
                onChange={(e) => setValue(e.target.value)}
                type="checkbox"
                checked={value}
            />
        </>
    )
}

export default InputCheckBox
