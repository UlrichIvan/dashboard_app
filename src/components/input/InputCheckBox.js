import React, { useState } from 'react'

function InputCheckBox({label=""}) {
    const [value, setValue] = useState(0);
    return (
        <>
            <div className="input-group d-flex justify-content-start align-items-center">
                <div
                    className={`input-check ${value ? "true" : "false"} d-flex align-items-center position-relative`}
                    onClick={() => setValue(value === 0 ? 1 : 0)}
                >
                    <div className={`input-circle bg-white  ${value ? "true" : "false"} position-absolute`}></div>
                </div>
                <span className="input-label-check ml-2">{label}</span>
            </div>
            <input
                style={{ display: "none" }}
                onChange={(e) => setValue(e.target.value)}
                type="checkbox"
                checked={false}
                value={value}
            />
        </>
    )
}

export default InputCheckBox
