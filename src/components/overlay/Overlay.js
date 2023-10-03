import React from 'react'
import SettingColumns from '../setting/SettingColumns'
function Overlay() {
    return (
        <div className='Overlay position-absolute h-100 w-100 p-0 m-0'>
            <div className="settings position-absolute h-100 w-30">
                {/* header settings */}
                <div className="container-fluid p-0 bg-white">
                    {/* header settings */}
                    <div className="d-flex justify-content-between p-2 align-items-center">
                        <div className="setting-name text-capitalize font-weight-bold">settings</div>
                        <div className="close d-flex align-items-center justify-content-center">
                            <span className="close-icon font-sm">
                                &#x2715;
                            </span>
                        </div>
                    </div>
                </div>
                {/* body settings */}
                <div className="container-fluid p-0">
                    <SettingColumns title={"general"} labels={["enable filtering"]} />
                    <SettingColumns title={"show/hide columns"} labels={["enable filtering","test","app"]} />
                </div>
            </div>
        </div>
    )
}

export default Overlay
