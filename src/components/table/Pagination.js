import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPage, setPageByPeriod } from '../../actions/paginationActions'

function Pagination() {

    const { rows, page, pages, period } = useSelector(state => state.pagination)

    const [pageIndicator, setPageIndicator] = useState({
        page: 1,
        pages: 1
    });

    const dispatch = useDispatch()

    useEffect(() => {

        if (rows.hasOwnProperty(period)) {

            let rowsValue = rows[period]

            setPageIndicator({
                page: rowsValue?.page,
                pages: rowsValue?.pages
            })

        }

    }, [rows, period, page]);

    const update = useCallback((page) => {

        dispatch(setPageByPeriod(rows, page, period))

        dispatch(setPage({ page }))

    }, [dispatch, period, rows])

    const nextClickHandler = useCallback(() => {
        if ((page + 1) <= pages) {
            console.log({ page: page + 1, pages })
            update(page + 1)
        }
    }, [update, page, pages])

    const previousClickHandler = useCallback(() => {
        if ((page - 1) >= 1) {
            update(page - 1)
        }
    }, [page, update])


    return (
        <>
            {Object.keys(rows)?.length ? <div className="Pagination page-indicator ml-3">
                <span className="previous" onClick={previousClickHandler}>
                    <i className="fa fa-chevron-left"></i>
                </span>
                {pageIndicator?.page && pageIndicator?.pages ? <span className="pages mx-2">
                    {`page ${pageIndicator?.page} of ${pageIndicator?.pages}`}
                </span> : null}
                <span className="next" onClick={nextClickHandler}>
                    <i className="fa fa-chevron-right"></i>
                </span>
            </div> : null}
        </>
    )
}

export default Pagination
