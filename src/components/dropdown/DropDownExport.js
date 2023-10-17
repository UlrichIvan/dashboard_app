import "jspdf/dist/polyfills.es";
import React, { useCallback } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { utils, writeFile } from "xlsx";
import { FileListItems } from "../../constants";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function DropDownExport(props) {
  const url = useSelector((state) => state.url);

  const { selected, headers } = useSelector((state) => state.pagination);

  const downloadFile = useCallback(
    (e) => {
      e.preventDefault();

      let file = e.target.innerHTML;

      let rows = selected.map((select) => select?.row);

      let rowData = [headers, ...rows];

      if (rows?.length) {
        const ws = utils.json_to_sheet(rowData);

        const wb = utils.book_new();

        const filename = `${url?.replace(/\//, "")}.${file}`;

        if (file === FileListItems[0]) {
          utils.book_append_sheet(wb, ws, "Data");
          writeFile(wb, filename, {
            bookType: FileListItems[0],
          });
        } else if (file === FileListItems[1]) {
          utils.book_append_sheet(wb, ws, "Data");
          writeFile(wb, filename, {
            bookType: FileListItems[1],
          });
        } else if (file === FileListItems[2]) {
          const params = {
            orientation: "portrait",
            unit: "pt",
            size: "A4",
          };

          let doc = new jsPDF(params);

          autoTable(doc, {
            head: [headers],
            body: rows,
          });

          doc.save(filename);
        }
      }
    },
    [url, selected, headers]
  );

  return (
    <div className="DropDownExport">
      <Dropdown>
        <Dropdown.Toggle
          className="text-capitalize btn-sm p-1 btn-default mr-2"
          variant="default"
          id="dropdown-basic"
        >
          <span className="first-header-icon">
            <i className="fa fa-repeat"></i>
          </span>
          <span className="dropdown-title mx-2">{props?.title}</span>
        </Dropdown.Toggle>

        {/* menu items */}
        <Dropdown.Menu className="px-2">
          {props?.items.map((item) => (
            <Dropdown.Item
              href="#"
              onClick={downloadFile}
              className="pl-2 mt-2 font-xs text-uppercase font-weight-500 text-center"
              key={v4()}
            >
              {item}
              {/* <CSVDownload data={data} className="d-none" /> */}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropDownExport;
