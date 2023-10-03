import React, { useCallback, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function DropDownSearch({ title = "", items = [] }) {
    const [itemsList, setItemsList] = useState(items);
    const [value, setValue] = useState("");

    const url = useSelector(state => state.url)
    const isActive = useCallback((value) => {
        return value === url ? true : false
    }, [url])

    const handlerChange = useCallback((e) => {
        let searchValue = e.target.value
        let items = itemsList

        items.forEach(item => {
            item.show = item.value.indexOf(searchValue) !== -1 ? true : false
        })

        setItemsList([...items])

    }, [itemsList])

    const handlerClick = useCallback((e) => {

        let items = itemsList

        items.forEach(item => {
            item.show = true
        })

        setItemsList([...items])
        setValue("")
    }, [itemsList])

    return (
        <div className="DropDownSearch">
            <Dropdown>
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                    <span className="first-header-icon">
                        <i className="fa fa-file-text"></i>
                    </span>
                    <span className="dropdown-title mx-2">{title}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="form-group search font-xs px-2 d-flex justify-content-between align-items-center">
                        <span className="search-icon">
                            <i className="fa fa-search"></i>
                        </span>
                        <input
                            value={value}
                            type="text"
                            placeholder="search"
                            onChange={(e) => setValue(e.target.value)}
                            onInput={(e) => handlerChange(e)}
                            className="text-capitalize font-xs py-0 px-2 form-control"
                        />
                    </div>
                    <div className="wrapper-items">
                        {itemsList.filter(item => (item.show)).map((item, i) => (<Link
                            onClick={handlerClick}
                            to={item.route}
                            className={`pl-2 py-1 font-xs font-weight-500 dropdown-item ${isActive(item?.route) ? "isactive" : ""} `}
                            key={i}
                        >
                            {item.value}
                        </Link>))}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropDownSearch
