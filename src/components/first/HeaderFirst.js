import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function HeaderFirst() {
  return (
    <>
      <div className="first-header font-xs gap-in-left py-2 text-capitalize bg-white d-flex w-100 justify-content-start align-items-center">
        <Dropdown>
          <Dropdown.Toggle variant="default" id="dropdown-basic">
            <span className="first-header-icon">
              <i className="fa fa-file-text"></i>
            </span>
            <span className="dropdown-title ml-2">Dropdown Button</span>
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
              <Dropdown.Item
                href="#/action-1"
                className="pl-2 font-xs font-weight-500"
              >
                all charnel interaction summary report
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                className="pl-2 font-xs font-weight-500"
              >
                chat chanel logs
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                className="pl-2 font-xs font-weight-500"
              >
                call chanel logs
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                className="pl-2 font-xs font-weight-500"
              >
                facebook chanel logs
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                className="pl-2 font-xs font-weight-500"
              >
                instagram chanel logs
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                className="pl-2 font-xs font-weight-500"
              >
                Something else
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                className="pl-2 font-xs font-weight-500"
              >
                whatsapp chanel logs
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                className="pl-2 font-xs font-weight-500"
              >
                twitter chanel logs
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                className="pl-2 font-xs font-weight-500"
              >
                linkedin
              </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        {/* <span className="first-header-title mx-3"> interaction report </span> */}
      </div>
    </>
  );
}

export default HeaderFirst;
