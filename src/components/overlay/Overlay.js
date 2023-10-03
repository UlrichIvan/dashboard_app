import React from 'react'
import SettingColumns from '../setting/SettingColumns'
import { channels } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import toggleOverlay from '../../actions/toggleOverlay'
function Overlay() {
    const open = useSelector(state => state.toggle)
    const dispatch = useDispatch()
    return (
        <div className={`Overlay position-absolute h-100 w-100 p-0 m-0 ${!open ? "d-none" : ""}`}>
            <div className="settings position-absolute h-100 w-30">
                {/* header settings */}
                <div className="container-fluid p-0 bg-white">
                    {/* header settings */}
                    <div className="d-flex justify-content-between p-2 align-items-center">
                        <div className="setting-name text-capitalize font-weight-bold">settings</div>
                        <div
                            className="close d-flex align-items-center justify-content-center"
                            onClick={(e) => {
                                dispatch(toggleOverlay(false))
                            }}
                        >
                            <span className="close-icon font-sm">
                                &#x2715;
                            </span>
                        </div>
                    </div>
                </div>
                {/* body settings */}
                <div className="container-fluid p-0">
                    <SettingColumns title={"general"} labels={[{ enabled: 0, value: "enable filtering" }]} />
                    <SettingColumns title={"show/hide columns"} labels={channels} />
                    <SettingColumns title={"freeze/unfreeze columns"} labels={channels} />
                </div>
            </div>
        </div>
    )
}

export default Overlay
