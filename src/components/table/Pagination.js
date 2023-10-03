import React from 'react'

function Pagination() {
    return (
        <>
            <div className="Pagination page-indicator ml-3">
                <span className="previous">
                    <i className="fa fa-chevron-left"></i>
                </span>
                <span className="previous">
                    <i className="fa fa-chevron-left"></i>
                </span>
                <span className="pages mx-2"> page 1 of 408 </span>
                <span className="next">
                    <i className="fa fa-chevron-right"></i>
                </span>
                <span className="next">
                    <i className="fa fa-chevron-right"></i>
                </span>
            </div>
        </>
    )
}

export default Pagination
