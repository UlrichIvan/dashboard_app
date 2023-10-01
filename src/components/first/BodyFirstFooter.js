import React from "react";

function BodyFirstFooter() {
  return (
    <>
      <div className="fisrst-footer gap-in-right d-flex justify-content-end bg-white pb-3">
        <span className="btn-sm btn-default mr-2 text-capitalize">
          <i className="fa fa-refresh"></i>
          <span className="ml-2 btn-default-text">reset</span>
        </span>
        <span className="btn-sm btn-primary text-capitalize">
          <i className="fa fa-search"></i>
          <span className="ml-2 btn-primary-text">search</span>
        </span>
      </div>
    </>
  );
}

export default BodyFirstFooter;
