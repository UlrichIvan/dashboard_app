import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setPage, setPageByPeriod, setPeriod } from '../../actions/paginationActions';

function SelectRows(props) {

    const [value, setValue] = useState(props?.value);

    const dispatch = useDispatch()

    const { rows } = useSelector(state => state.pagination)


    const handlerChange = useCallback((e) => {

        let period = e.target.value

        setValue(period)

        dispatch(setPeriod({ period: parseInt(period, 10) }))

        dispatch(setPage({ page: 1 }))

        dispatch(setPageByPeriod(rows, 1, period))



    }, [dispatch, rows])

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
