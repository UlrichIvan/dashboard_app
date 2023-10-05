import React from 'react'

function Table(props) {
    return (
        <>
            <table {...props}>
                {props.children}
            </table>
        </>
    )
}

export default Table
