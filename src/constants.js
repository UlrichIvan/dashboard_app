export const selectOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const rowsOptions = [
  { value: "10 rows", label: "10 rows" },
  { value: "15 rows", label: "15 rows" },
  { value: "20 rows", label: "20 rows" },
  { value: "30 rows", label: "30 rows" },
];


// export const itemsDropDownSearch = [
//   "all charnel interaction summary report",
//   "chat chanel logs",
//   "call chanel logs",
//   "facebook chanel logs",
//   "instagram chanel logs",
//   "Something else",
//   "twitter chanel logs"
// ];

export const routesTarget = [
  {
    route: "/all-charnel-interaction-summary-report",
    value: "all charnel interaction summary report",
    show: true
  },
  {
    route: "/chat-chanel-logs", value: "chat chanel logs", show: true
  },
  {
    route: "/call-chanel-logs", value: "call chanel logs", show: true
  },
  {
    route: "/facebook-chanel-logs", value: "facebook chanel logs", show: true
  },
  {
    route: "/instagram-chanel-logs", value: "instagram chanel logs", show: true
  },
  {
    route: "/twitter-chanel-logs", value: "twitter chanel logs", show: true
  }
];

export const FileListItems = [
  "scv",
  "xlsx",
  "pdf"
];


export const HOST = "http://localhost:4000"


export const REDUX_ACTIONS = {
  SET_URL: "SET_URL",
  TOGGLE_OVERLAY: "TOGGLE_OVERLAY",
  SET_ROWS_PAGE: "SET_ROWS_PAGE",
  SET_ROWS_PERIOD: "SET_ROWS_PERIOD",
  SET_ROWS_PAGES: "SET_ROWS_PAGES",
  SET_ROWS: "SET_ROWS"
}
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
]