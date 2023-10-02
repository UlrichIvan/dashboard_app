import React from 'react'
import { v4 } from 'uuid'

function Head({ headers = [] }) {
    return (
        <>
            <thead>
                <tr className="bg-white-smoke">
                    <th>
                        <input type="checkbox" className="checkbox" name="" id="" />
                    </th>
                    {headers?.length > 0 && (headers?.map(header => (<th key={v4()}>{header}</th>)) || null)}
                </tr>
            </thead>
        </>
    )
}

export default Head
