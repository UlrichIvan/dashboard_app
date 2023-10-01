import React from "react";
import InputDate from "../input/InputDate";
import SelectOptions from "../select/SelectOptions";
import { selectOptions } from "../../constants";

function BodyFirstContent() {
  return (
    <>
      <div className="first-body-content-form gap-in-left gap-in-right bg-white">
        <div className="first-content-title py-2 font-sm font-weight-600">
          search filters
        </div>
        {/*body-content form*/}
        <div className="form">
          {/*first row*/}
          <div className="form-row">
            {/*input type date*/}
            <div className="form-group col-12 col-sm-3">
              <label
                htmlFor="date_begin"
                className="font-xs font-weight-600 text-capitalize"
              >
                from date and time
              </label>
              <InputDate
                className="form-control text-capitalize font-xs"
                id="date_begin"
                placeholder="select start date & time"
              />
            </div>
            <div className="form-group col-12 col-sm-3">
              <label
                htmlFor="date_end"
                className="font-xs font-weight-600 text-capitalize"
              >
                to date and time
              </label>
              <InputDate
                className="form-control text-capitalize font-xs"
                id="date_end"
                placeholder="select end date & time"
              />
            </div>
            {/*select mutiple*/}
            <div className="form-group col-12 col-sm-3">
              <label
                htmlFor="select_leads"
                className="font-xs font-weight-600 text-capitalize"
              >
                leads pipilines
              </label>
              <SelectOptions
                options={selectOptions}
                placeholder="select one or more options"
                htmlFor="select_leads"
                className="font-xs"
              />
            </div>
            <div className="form-group col-12 col-sm-3">
              <label
                htmlFor="select_tickets"
                className="font-xs font-weight-600 text-capitalize"
              >
                tickets pipilines
              </label>
              <SelectOptions
                options={selectOptions}
                placeholder="select one or more options"
                htmlFor="select_tickets"
                className="font-xs"
              />
            </div>
          </div>
          {/*second row */}
          <div className="form-row">
            {/* select mutiple */}
            <div className="form-group col-12 col-sm-3">
              <label
                htmlFor="select_campaign"
                className="font-xs font-weight-600 text-capitalize"
              >
                campaign flow
              </label>
              <SelectOptions
                options={selectOptions}
                placeholder="select one or more options"
                htmlFor="select_tickets"
                className="font-xs"
              />
            </div>
            <div className="form-group col-12 col-sm-3">
              <label
                htmlFor="select_agents"
                className="font-xs font-weight-600 text-capitalize"
              >
                Agents
              </label>
              <SelectOptions
                options={selectOptions}
                placeholder="select one or more options"
                htmlFor="select_tickets"
                className="font-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyFirstContent;
