import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import {
  getAllSelected,
  removeRowsSelected,
  setRowsSelected,
  updateRowsByPeriodAndPage,
} from "../../actions/paginationActions";

function Head() {
  const { rows, headers, period, selected } = useSelector(
    (state) => state.pagination
  );

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    let { rowsPages, page } = rows[period];
    let allcheched = getAllSelected(rowsPages, page);
    setChecked(allcheched);
  }, [rows, period]);

  const handlerChecked = useCallback(
    (e) => {
      dispatch(updateRowsByPeriodAndPage(rows, period, e.target.checked));
      if (e.target.checked) {
        dispatch(setRowsSelected(rows, period, selected));
      } else {
        dispatch(removeRowsSelected(rows, period, selected));
      }
    },
    [rows, period, dispatch, selected]
  );

  return (
    <>
      {headers?.length > 0 ? (
        <thead className="position-sticky">
          <tr className="bg-white-smoke">
            <th>
              <input
                type="checkbox"
                className="checkbox"
                checked={checked}
                onChange={(e) => {
                  setChecked(e.target.checked);
                  handlerChecked(e);
                }}
              />
            </th>
            {headers?.map((header) => <th key={v4()}>{header}</th>) || null}
          </tr>
        </thead>
      ) : null}
    </>
  );
}

export default Head;
