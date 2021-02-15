import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core/styles'

// colors
const background = '#f5f5f5'
const warningLight = 'rgba(253, 200, 69, .3)'
const warningMain = 'rgba(253, 200, 69, .5)'
const warningDark = 'rgba(253, 200, 69, .7)'

// breakpoints
const xl = 1920;
const lg = 1920;
const md = 960;
const sm = 600;
const xs = 0;

export const redSeaData: ThemeOptions = {
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: 'Poppins, sans-serif',
        color: '#2E5BFF',
        fontStyle: 'normal',
        fontSize: '2rem',
        fontWeight: 100,
        textOverflow: 'ellipsis',
      },
      h2: {
        fontFamily: 'Poppins, sans-serif',
        color: '#5a5a5a',
        fontStyle: 'normal',
        fontSize: '1.5rem',
        fontWeight: 500,
        textOverflow: 'ellipsis',
      },
      h3: {
        fontFamily: 'Poppins, sans-serif',
        color: '#ffffff',
        fontStyle: 'normal',
        fontSize: '1.6rem',
        fontWeight: 400,
        textOverflow: 'ellipsis',
      },
      h4: {
        fontFamily: 'Poppins, sans-serif',
        color: '#565656',
        fontStyle: 'normal',
        fontSize: '1.3rem',
        fontWeight: 300,
        textOverflow: 'ellipsis',
      },
      h5: {
        fontFamily: 'Open Sans, sans-serif',
        color: '#8c98a9',
        fontStyle: 'normal',
        fontSize: '0.9rem',
        fontWeight: 600,
        textOverflow: 'ellipsis',
      },
      body1: {
        fontFamily: 'Poppins, sans-serif',
        color: '#565656',
        fontStyle: 'normal',
        fontSize: '14px',
        textOverflow: 'ellipsis',
      },
      body2: {
        fontFamily: 'Poppins, sans-serif',
        color: '#565656',
        fontStyle: 'normal',
        fontSize: '13px',
        textOverflow: 'ellipsis',
      },
      caption: {
        fontFamily: 'Poppins, sans-serif',
        color: '#565656',
        fontStyle: 'normal',
        fontSize: 12,
        textOverflow: 'ellipsis',
      },
    },
    MuiButton: {
      text: {
        textTransform: 'none',
        paddingTop: '10px',
        paddingBottom: '10px',
      },
      textPrimary: {
        color: '#FFFFFF',
        background: '#2E5BFF 0% 0% no-repeat padding-box',
        '&&:hover': {
          color: '#FFFFFF',
          background: '#0739EF 0% 0% no-repeat padding-box',
        },
        font: 'normal normal normal 14px/32px Open Sans'
      },
    },
    MuiTabs: {
      root: {
        height: 27,
      },
      indicator: {
        background: '#2E5BFF 0% 0% no-repeat padding-box',
        height: 4,
      },
      scroller: {
        height: 27
      }
    },
    MuiTab: {
      root: {
        minHeight: 23,
        height: 23,
        maxWidth: 'auto',
        //marginRight: 45,
      },
      wrapper: {
        textTransform: 'none',
        textAlign: 'left',
        letterSpacing: 0,
        color: '#2E5BFF',
        fontSize: 16,
        fontFamily: 'Poppins'
      },
    },
    MuiTable: {
      root: {
        backgroundColor: 'red'
      }
    }
  },
  palette: {
    error: {
      contrastText: '#fafefe',
      dark: '#B71C1C',
      light: '#EF5350',
      main: '#D50000',
    },
    primary: {
      contrastText: '#fafefe',
      dark: '#00756c',
      light: '#63d7cb',
      main: '#3f51b5',
    },
    secondary: {
      contrastText: '#fce4ec',
      dark: '#836fa9',
      light: '#e6ceff',
      main: '#6BBD93',
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark,
    },
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: background,
    },
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xl,
      lg,
      md,
      sm,
      xs
    }
  },
}

const RedSea: Theme = createMuiTheme(redSeaData)

export default RedSea
