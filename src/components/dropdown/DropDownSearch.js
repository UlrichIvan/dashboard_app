import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

function DropDownSearch({title="",items=[]}) {
    return (
        <div className="DropDownSearch">
            <Dropdown>
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                    <span className="first-header-icon">
                        <i className="fa fa-file-text"></i>
                    </span>
                    <span className="dropdown-title ml-2">{title}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="form-group search font-xs px-2 d-flex justify-content-between align-items-center">
                        <span className="search-icon">
                            <i className="fa fa-search"></i>
                        </span>
                        <input
                            type="text"
                            placeholder="search"
                            className="text-capitalize font-xs py-0 px-2 form-control"
                        />
                    </div>
                    <div className="wrapper-items">
                        {items.map((item, i) => (<Dropdown.Item
                            href={item.route}
                            className="pl-2 font-xs font-weight-500"
                            key={i}
                        >
                            {item.value}
                        </Dropdown.Item>))}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropDownSearch
