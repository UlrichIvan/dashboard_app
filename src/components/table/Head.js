import React from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

function Head() {
    const { headers } = useSelector(state => state.pagination)
    return (
        <>
            {headers?.length > 0 ? (<thead className="position-sticky">
                <tr className="bg-white-smoke">
                    <th>
                        <input type="checkbox" className="checkbox" name="" id="" />
                    </th>
                    {(headers?.map(header => (<th key={v4()}>{header}</th>)) || null)}
                </tr>
            </thead>) : null}
        </>
    )
}

export default Head
