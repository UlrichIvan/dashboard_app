import React from 'react'
import { v4 } from 'uuid'

function Tr({ tds = [] }) {
    return (
        <>
            <tr>
                <td>
                    <input type="checkbox" className="checkbox" name="" id="" />
                </td>
                {tds.map((td) => (<td key={v4()}>{td}</td>))}
            </tr>
        </>
    )
}

export default Tr
