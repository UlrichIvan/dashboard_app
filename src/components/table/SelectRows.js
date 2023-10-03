import React, { useState } from 'react'
import { v4 } from 'uuid';

function SelectRows(props) {
    const [value, setValue] = useState(props?.value);
    return (
        <>
            <select
                style={{ outline: 0 }}
                {...props}
                value={value}
                placeholder="select rows"
                onChange={(e) => setValue(e.target.value)}
                options={props?.options} >
                {props?.options?.map(options => (<option key={v4()} value={options?.value}>{options?.value}</option>))}
            </select>
        </>
    )
}

export default SelectRows
