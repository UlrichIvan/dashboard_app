import React from "react";
import DropDownSearch from "../dropdown/DropDownSearch";
import { routesTarget } from "../../constants";

function HeaderFirst() {
  return (
    <>
      <div className="first-header font-xs gap-in-left py-2 text-capitalize bg-white d-flex w-100 justify-content-start align-items-center">
        <DropDownSearch
          title={"interaction report"}
          items={routesTarget}
        />
      </div>
    </>
  );
}

export default HeaderFirst;
