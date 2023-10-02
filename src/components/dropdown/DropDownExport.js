import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

function DropDownExport(props) {
    return (
        <div className="DropDownExport">
            <Dropdown >
                <Dropdown.Toggle className="text-capitalize btn-sm p-1 btn-default mr-2" variant="default" id="dropdown-basic">
                    <span className="first-header-icon">
                        <i className="fa fa-repeat"></i>
                    </span>
                    <span className="dropdown-title ml-2">{props.title}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="px-2">
                    {props?.items.map((item, i) => (<Dropdown.Item
                        href="#/action-1"
                        className="pl-2 mt-2 font-xs text-uppercase font-weight-500 text-center"
                        key={i}
                    >
                        {item}
                    </Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropDownExport
