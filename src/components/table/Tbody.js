import React, {
    useState, useEffect
} from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import Tr from '../table/Tr';
import { getRows } from '../../actions/paginationActions';

function Tbody() {

    const { rows, headers, period } = useSelector(state => state.pagination)

    const [allRows, setAllRows] = useState([]);

    useEffect(() => {
        if (rows.hasOwnProperty(period)) {

            let rowsValue = getRows(rows, period)

            setAllRows(rowsValue)
        }
    }, [period, rows, allRows]);

    return (
        <>
            {allRows?.length && headers?.length ? (<tbody className="bg-white">
                {allRows?.map((r, i) => (<Tr key={v4()} index={i} checked={r?.checked} tds={r?.row} />))}
            </tbody>) : null}
        </>
    )
}

export default Tbody
