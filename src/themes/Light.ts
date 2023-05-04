import { createTheme } from "@mui/material"
import { cyan } from "@mui/material/colors"

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#19376D",
      dark: "#0B2447",
      light: "#576CBC",
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffffff",
    },
  },
})