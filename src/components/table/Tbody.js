import React, { } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import Tr from '../table/Tr';

function Tbody() {

    const { rows, headers, rowsPage } = useSelector(state => state.pagination)

    return (
        <>
            {rows?.length && headers?.length ? <tbody className="bg-white">
                {rowsPage?.map(r => (<Tr key={v4()} tds={r} />))}
            </tbody> : null}
        </>
    )
}

export default Tbody
