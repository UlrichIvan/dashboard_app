import React from 'react'
import SelectRows from './SelectRows'
import { rowsOptions } from '../../constants'
import Pagination from './Pagination'
import { useSelector } from 'react-redux'

function CaptionTable() {

    const { rows, headers,views } = useSelector(state => state.pagination)
    
    return (
        <>
            {rows?.length && headers?.length ? (<div className="bg-white font-xs py-2 caption">
                <div className="caption-wrapper container-fluid pr-3 bg-white">
                    <div className="row">
                        <div className="col-12 col-sm-6 view-col">
                            <div className="view-infos d-flex align-items-center text-capitalize">
                                <div className="views">
                                    {`view ${views?.a}-${views?.b} of ${rows?.length} rows`}
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
