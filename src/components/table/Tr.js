import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid'
import { getRowByPeriodAndPage, removeSelected, setSelected, updateRowByPeriodAndPage } from '../../actions/paginationActions';

function Tr({ tds = [], index, checked: check = false }) {
    const [checked, setChecked] = useState(check);

    const { rows, period, page, selected } = useSelector(state => state.pagination)

    const dispatch = useDispatch()

    const handlerChecked = useCallback(
        (isChecked) => {

            // add element as selected
            console.log({ isChecked })

            let row = getRowByPeriodAndPage(rows, period, index)
            console.log({ row })
            if (isChecked) {

                dispatch(setSelected({ ...row, index, page }))

                dispatch(updateRowByPeriodAndPage(rows, period, index))

            } else {

                dispatch(removeSelected({ page, index, selected }))

                dispatch(updateRowByPeriodAndPage(rows, period, index))
            }

        },
        [rows, period, index, dispatch, page, selected],
    )

    return (
        <>
            <tr>
                <td>
                    <input
                        checked={checked}
                        type="checkbox"
                        onChange={(e) => {
                            let isChecked = e.target.checked
                            setChecked(isChecked)
                            handlerChecked(isChecked)
                        }}
                    />
                </td>
                {tds.map((td) => (<td key={v4()}>{td}</td>))}
            </tr>
        </>
    )
}

export default Tr 
