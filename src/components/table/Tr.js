import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid'
import { getRowByPeriodAndPage, setSelected } from '../../actions/paginationActions';

function Tr({ tds = [], index }) {
    const [checked, setChecked] = useState(false);

    const { rows, period } = useSelector(state => state.pagination)

    const dispatch = useDispatch()

    const handlerChecked = useCallback(
        (e) => {

            if (e.target.checked) {

                let row = getRowByPeriodAndPage(rows, period, index)

                dispatch(setSelected({ row, index }))
                console.log(row)
            } 

            console.log({ checked: e.target.checked })
        },
        [rows, period, index, dispatch],
    )

    return (
        <>
            <tr>
                <td>
                    <input
                        value={checked}
                        onClick={handlerChecked}
                        type="checkbox"
                        className="checkbox"
                        onChange={(e) => setChecked(!e.target.checked)}
                    />
                </td>
                {tds.map((td) => (<td key={v4()}>{td}</td>))}
            </tr>
        </>
    )
}

export default Tr 
