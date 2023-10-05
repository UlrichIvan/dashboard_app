import React, { useEffect, useState } from 'react'
import SelectRows from './SelectRows'
import { rowsOptions } from '../../constants'
import Pagination from './Pagination'
import { useSelector } from 'react-redux'
import { getViewByPeriodAndPage } from '../../actions/paginationActions'

function CaptionTable() {

    const { rows, headers, period } = useSelector(state => state.pagination)

    const [views, setViews] = useState(null);

    useEffect(() => {
        if (rows.hasOwnProperty(period)) {

            let views = getViewByPeriodAndPage(rows, period)

            setViews(views)
        }

    }, [period, rows]);

    return (
        <>
            {Object.keys(rows)?.length && headers?.length ? (<div className="bg-white font-xs py-2 caption">
                <div className="caption-wrapper container-fluid pr-3 bg-white">
                    <div className="row">
                        <div className="col-12 col-sm-6 view-col">
                            <div className="view-infos d-flex align-items-center text-capitalize">
                                <div className="views">
                                    {`view ${views?.a}-${views?.b} of ${views?.len} rows`}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="view-right d-flex align-items-center justify-content-end  text-capitalize">
                                <SelectRows
                                    options={rowsOptions}
                                    value="10"
                                    className="p-0 bg-white border-0"
                                />
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : null}
        </>
    )
}

export default CaptionTable
