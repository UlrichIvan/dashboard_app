import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setPage, setPages, setPeriod, setRowsPeerPages, setViews } from '../../actions/paginationActions';
import { getRowsPeerPages } from '../../reducers/paginationReducer';

function SelectRows(props) {
    const [value, setValue] = useState(props?.value);

    const { rows, views } = useSelector(state => state.pagination)

    const dispatch = useDispatch()

    const handlerChange = useCallback((e) => {

        let period = e.target.value

        let rowsfiltered = getRowsPeerPages(rows, views, 1, period)

        console.log({ period, rowsfiltered })

        dispatch(setRowsPeerPages({ rowsPage: rowsfiltered }))

        setValue(period)

        dispatch(setViews({ period: parseInt(period, 10), page: 1 }))

        dispatch(setPages({ period: parseInt(period, 10) }))

        dispatch(setPage({ page: 1 }))

        dispatch(setPeriod({ period: parseInt(period, 10) }))



    }, [dispatch, rows, views])

    return (
        <>
            <select
                style={{ outline: 0 }}
                {...props}
                value={value}
                placeholder="select rows"
                onChange={handlerChange}
                options={props?.options} >
                {props?.options?.map(options => (<option key={v4()} value={options?.value}>{options?.label}</option>))}
            </select>
        </>
    )
}

export default SelectRows
