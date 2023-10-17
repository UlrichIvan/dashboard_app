export const selectOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const rowsOptions = [
  { value: "10", label: "10 rows" },
  { value: "15", label: "15 rows" },
  { value: "20", label: "20 rows" },
  { value: "30", label: "30 rows" },
  { value: "40", label: "40 rows" },
];

export const DEFAULT_PERIOD = 10;

export const DEFAULT_VIEW = { a: 1, b: 10, a_init: 1, index: 1 };

export const routesTarget = [
  {
    route: "/all-charnel-interaction-summary-report",
    value: "all charnel interaction summary report",
    show: true,
  },
  {
    route: "/chat-chanel-logs",
    value: "chat chanel logs",
    show: true,
  },
  {
    route: "/call-chanel-logs",
    value: "call chanel logs",
    show: true,
  },
  {
    route: "/facebook-chanel-logs",
    value: "facebook chanel logs",
    show: true,
  },
  {
    route: "/instagram-chanel-logs",
    value: "instagram chanel logs",
    show: true,
  },
  {
    route: "/twitter-chanel-logs",
    value: "twitter chanel logs",
    show: true,
  },
];

export const FileListItems = ["csv", "xlsx", "pdf"];

export const HOST = "http://localhost:4000";

export const REDUX_ACTIONS = {
  SET_URL: "SET_URL",
  TOGGLE_OVERLAY: "TOGGLE_OVERLAY",
  SET_PAGE: "SET_PAGE",
  SET_PERIOD: "SET_PERIOD",
  SET_PAGES: "SET_PAGES",
  SET_ROWS: "SET_ROWS",
  SET_HEADERS: "SET_HEADERS",
  SET_VIEWS: "SET_VIEWS",
  SET_ROWS_PEER_PAGES: "SET_ROWS_PEER_PAGES",
  INIT_ROWS_PEER_PAGES: "INIT_ROWS_PEER_PAGES",
  SET_PAGE_TO_ROWS_PERIOD: "SET_PAGE_TO_ROWS_PERIOD",
  SET_SELECTED: "SET_SELECTED",
  SET_UPDATED_ROWS: "SET_UPDATED_ROWS",
  UPDATE_SELECTED: "UPDATE_SELECTED",
};
export const channels = [
  { enabled: 1, value: "channel" },
  { enabled: 1, value: "facebook" },
  { enabled: 1, value: "instagram" },
  { enabled: 1, value: "whatsapp" },
  { enabled: 1, value: "linkedin" },
  { enabled: 1, value: "twitter" },

  { enabled: 1, value: "chat" },
  { enabled: 1, value: "call" },
  { enabled: 1, value: "total" },
];
