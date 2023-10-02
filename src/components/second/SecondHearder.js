import React from 'react'
import { FileListItems } from '../../constants'
import DropDownExport from '../dropdown/DropDownExport'

function SecondHearder() {
    return (
        <div className="SecondHearder font-xs py-2 bg-white-smoke pr-2 text-capitalize d-flex w-100 justify-content-between align-items-center">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-12 col-sm-6 first-body-title py-2 font-sm font-weight-600">
                        all channel interaction summary report
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="buttons-actions d-flex justify-content-end align-items-center">
                            <DropDownExport title="export" items={FileListItems} />
                            <span className="btn-sm btn-primary text-capitalize">
                                <i className="fa fa-wrench" aria-hidden="true"></i>
                                <span className="searchn ml-2">
                                    settings
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondHearder
