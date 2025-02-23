import { createTheme, responsiveFontSizes } from '@mui/material'

let theme = createTheme({
  palette: {
    primary: {
      main: '#14110F'
    },
    secondary: {
      main: '#931621'
    }
  },
  typography: {
    fontFamily: '"Segoe UI"'
    // 'Roboto'
    // '"Helvetica Neue"'
  }
})

theme = responsiveFontSizes(theme)
export default theme
