import { DEFAULT_VIEW, REDUX_ACTIONS, rowsOptions } from "../constants";
import {
  getIndexes,
  getPages,
  getRowsPeerPages,
} from "../reducers/paginationReducer";

export const setHeaders = (payload) => {
  return {
    type: REDUX_ACTIONS.SET_HEADERS,
    payload,
  };
};

export const setRows = (payload) => {
  let rows = {};

  // init rows
  for (const options of rowsOptions) {
    let { value: period } = options;

    period = parseInt(period, 10);

    rows[period] = {
      page: 1,
      rowsPages: [],
      period,
      pages: getPages(payload, period), // get pages for each period
    };

    let pages = rows[period].pages;

    // get rows for each page index associate to specific period
    for (let page = 1; page <= pages; page++) {
      let rowsPage = getRowsPeerPages(payload, DEFAULT_VIEW, page, period)?.map(
        (row) => ({
          row,
          checked: false,
        })
      );

      rows[period].rowsPages.push({
        [page]: rowsPage,
        views: getIndexes(payload.length, DEFAULT_VIEW, page, period),
        allSelection: false,
      });
    }
  }

  // console.log({ rows })

  return {
    type: REDUX_ACTIONS.SET_ROWS,
    payload: rows,
  };
};

export const setUrl = (payload) => {
  return {
    type: REDUX_ACTIONS.SET_URL,
    payload,
  };
};

export const setPeriod = (payload) => {
  return {
    type: REDUX_ACTIONS.SET_PERIOD,
    payload,
  };
};

export const setViews = (payload) => {
  return {
    type: REDUX_ACTIONS.SET_VIEWS,
    payload,
  };
};

export const toggleOverlay = (payload) => {
  return {
    type: REDUX_ACTIONS.TOGGLE_OVERLAY,
    payload,
  };
};

export const setPages = (payload) => {
  return {
    type: REDUX_ACTIONS.SET_PAGES,
    payload,
  };
};

export const setPage = (payload) => {
  return {
    type: REDUX_ACTIONS.SET_PAGE,
    payload,
  };
};

export const setRowsPeerPages = (payload) => {
  return {
    type: REDUX_ACTIONS.SET_ROWS_PEER_PAGES,
    payload,
  };
};

export const setInitRowsPeerPages = () => {
  return {
    type: REDUX_ACTIONS.INIT_ROWS_PEER_PAGES,
  };
};

export const getRows = (rows, period) => {
  let { rowsPages, page } = rows[period];

  let row = rowsPages?.find((data) => {
    return data?.hasOwnProperty(page);
  });

  return row ? row[page] : [];
};

export const setPageByPeriod = (rows, page, period) => {
  let ob = rows[period];

  ob.page = page;

  return {
    type: REDUX_ACTIONS.SET_PAGE_TO_ROWS_PERIOD,
    payload: { ob, period },
  };
};

export const setSelected = (row) => {
  return {
    type: REDUX_ACTIONS.SET_SELECTED,
    payload: row,
  };
};

export const setRowsSelected = (rows, period, selected) => {
  let { page } = rows[period];

  let { lines = {} } = getRowsByPage(rows, period);

  // console.log({ page, lines });

  if (lines.hasOwnProperty(page)) {
    lines[page].forEach((row, i) => {
      selected.push({ ...row, index: i, page });
    });
  }

  // console.log({ selected });

  return {
    type: REDUX_ACTIONS.UPDATE_SELECTED,
    payload: selected,
  };
};

export const removeRowsSelected = (rows, period, selected) => {
  let { page } = rows[period];

  let { lines = {} } = getRowsByPage(rows, period);

  if (lines.hasOwnProperty(page)) {
    lines[page].forEach((row, i) => {
      let indexed = selected.findIndex(
        (row) => row?.page === page && row?.index === i
      );

      if (indexed !== -1) {
        selected.splice(indexed, 1);
      }
    });
  }

  return {
    type: REDUX_ACTIONS.UPDATE_SELECTED,
    payload: selected,
  };
};

export const removeSelected = (data) => {
  let { page, index, selected } = data;

  let indexed = selected.findIndex(
    (row) => row?.page === page && row?.index === index
  );

  if (indexed !== -1) {
    selected.splice(indexed, 1);
  }
  // console.log({ newSelected: selected });
  return {
    type: REDUX_ACTIONS.UPDATE_SELECTED,
    payload: selected,
  };
};

export const getViewByPeriodAndPage = (rows, period) => {
  let { rowsPages, page } = rows[period];

  let row = rowsPages?.find((data) => {
    return data?.hasOwnProperty(page);
  });

  return row ? row["views"] : null;
};

export const getRowByPeriodAndPage = (rows, period, index) => {
  let { rowsPages, page } = rows[period];

  let row = rowsPages?.find((data) => {
    return data?.hasOwnProperty(page);
  });

  return row ? row[page][index] : null;
};

export const getAllSelected = (rowsPages, page) => {
  let index = rowsPages?.findIndex((data) => {
    return data?.hasOwnProperty(page);
  });

  let row = rowsPages[index];

  // console.log({ allSelection: row?.allSelection, page });

  return row?.allSelection ? true : false;
};

export const getRowsByPage = (rows, period) => {
  let { rowsPages, page } = rows[period];

  let index = rowsPages?.findIndex((data) => {
    return data?.hasOwnProperty(page);
  });

  return index !== -1
    ? {
        index,
        lines: rowsPages[index],
      }
    : null;
};

export const checkRow = (rowsPages, page, index) => {
  let rowIndex = rowsPages?.findIndex((d) => {
    return d?.hasOwnProperty(page);
  });

  if (rowIndex !== -1) {
    let data = rowsPages[rowIndex];

    data[page][index]["checked"] = !data[page][index]["checked"];

    rowsPages[rowIndex] = { ...data };
  }

  return rowsPages;
};

export const checkRowsByPeriodAndPages = (rows, rowsPages, page, index) => {
  let rowIndex = rowsPages?.findIndex((d) => {
    return d?.hasOwnProperty(page);
  });

  if (rowIndex !== -1) {
    let data = rowsPages[rowIndex];

    data[page][index]["checked"] = !data[page][index]["checked"];

    rowsPages[rowIndex] = { ...data };
  }

  return rowsPages;
};

export const updateRowByPeriodAndPage = (rows, period, index) => {
  try {
    let { rowsPages, page } = rows[period];

    const data = checkRow(rowsPages, page, index);

    // console.log({ data });

    rows[period].rowsPages = [...data];

    return {
      type: REDUX_ACTIONS.SET_UPDATED_ROWS,
      payload: rows,
    };
  } catch (error) {
    console.log(error);
  }
};

export const updateRowsByPeriodAndPage = (rows, period, isChecked) => {
  try {
    let { lines = {}, index } = getRowsByPage(rows, period);

    // console.log({ index });

    let { page, rowsPages } = rows[period];

    if (lines.hasOwnProperty(page)) {
      for (const row of lines[page]) {
        row.checked = isChecked;
      }

      rowsPages[index] = lines;

      rowsPages[index].allSelection = isChecked;
    }

    rows[period].rowsPages = rowsPages;

    return {
      type: REDUX_ACTIONS.SET_UPDATED_ROWS,
      payload: rows,
    };
  } catch (error) {
    console.log(error);
  }
};
