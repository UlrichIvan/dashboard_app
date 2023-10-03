import React, { useCallback } from 'react'
import InputCheckBox from '../input/InputCheckBox'
import RowSetting from './RowSetting';
import { v4 } from 'uuid';

function SettingColumns({ title = "", labels = [] }) {
    const getRows = useCallback((lbs = [], len = 0) => {
        let inputs = []
        let index = 0;
        while (index < len) {
            inputs.push(
                <RowSetting key={v4()}>
                    <div className="col-6"><InputCheckBox label={lbs[index]} /></div>
                    <div className="col-6"><InputCheckBox label={lbs[index + 1]} /></div>
                </RowSetting>
            )
            index = index + 2
        }

        return inputs
    }, [])

    const generateRows = useCallback((labels = []) => {

        let len = labels?.length;

        console.log({ len })

        if (len) {
            let inputs = []

            if (len % 2 === 0) {
                return getRows(labels, len)
            } else {
                if (len - 1) {
                    inputs = getRows(labels, len - 1)
                    inputs.push(<RowSetting key={v4()}>
                        <div className="col-12"> <InputCheckBox label={labels[len - 1]} /></div>
                    </RowSetting>)
                    return inputs
                } else {
                    inputs.push(<RowSetting key={v4()}>
                        <div className="col-12"> <InputCheckBox label={labels[0]} /></div>
                    </RowSetting>)
                    return inputs
                }
            }
        } else {
            return null
        }
    }, [getRows])
    return (
        <>
            <div className="general-wrapper mt-3 bg-white mx-3">
                <div className="general font-weight-bold text-capitalize p-2">{title}</div>
                <div className="check font-weight-bold text-capitalize p-2 ">
                    {generateRows(labels)}
                </div>
            </div>
        </>
    )
}

export default SettingColumns
