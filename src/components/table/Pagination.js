import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRowsPeerPages } from '../../reducers/paginationReducer'
import { setPage, setRowsPeerPages, setViews } from '../../actions/paginationActions'

function Pagination() {

    const { rows, page, pages, views, period } = useSelector(state => state.pagination)

    const dispatch = useDispatch()

    const update = useCallback((page) => {

        let rowsfiltered = getRowsPeerPages(rows, views, page, period)

        dispatch(setPage({ page }))

        dispatch(setViews({ page, period }))

        dispatch(setRowsPeerPages({ rowsPage: rowsfiltered }))

    }, [views, rows, dispatch, period])

    const nextClickHandler = useCallback((e) => {
        if ((page + 1) <= pages) {
            update(page + 1)
        }
    }, [update, page, pages])

    const previousClickHandler = useCallback((e) => {
        if ((page - 1) >= 1) {
            update(page - 1)
        }
    }, [page, update])


    return (
        <>
            {rows?.length ? <div className="Pagination page-indicator ml-3">
                <span className="previous" onClick={previousClickHandler}>
                    <i className="fa fa-chevron-left"></i>
                </span>
                <span className="pages mx-2"> {`page ${page} of ${pages}`} </span>
                <span className="next" onClick={nextClickHandler}>
                    <i className="fa fa-chevron-right"></i>
                </span>
            </div> : null}
        </>
    )
}

export default Pagination
