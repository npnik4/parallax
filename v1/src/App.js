import './App.scss';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#fff',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        contrastText: '#fff',
      },
      secondary: {
        light: '#8e32f8',
        main: '#fff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#6495ed',
      },
      success: {
        main: '#eeeeee'
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Home/>
    </ThemeProvider>
    </>
  );
}

export default App;
