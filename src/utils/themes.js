import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'EuclidCircularA, Raleway'
    },
    palette: {
        mode: 'light',
        background: {
            default: '#f8f8f8',
            paper: '#ffffff',
        },
        primary: {
            main: '#000000'
        },
        text: {
            secondary: '#919191',
            primary: '#6f7176'
        },
        secondary: {
            main: '#228c22'
        },
        accent: {
            main: '#ffd300'
        },
        light: {
            secondary: '#228C224D',
            primary: '#0000004C',
            accent: '#FFD3004D'
        },
        action: {
            active: '#b90e0a'
        },
        colors: {
            toolbar: '#000000A6',
            action: '#b90e0a'
        }
    },
    shape: {
        borderRadius: 32
    }
});


const darkTheme = createTheme({
    typography: {
        fontFamily: 'EuclidCircularA, Raleway'
    },
    palette: {
        mode: 'dark',
        background: {
            default: '#181b1f',
            paper: '#21242F'
        },
        text: {
            primary: '#f2f2f4',
            secondary: '#6f7176'
        },
        primary: {
            main: '#000000',
            toolbar: '#00000026'
        },
        secondary: {
            main: '#228c22'
        },
        accent: {
            main: '#ffd300'
        },
        light: {
            secondary: 'rgba(210,70,98,0.15)',
            primary: '#0000004C'
        },
        action: {
            active: '#b90e0a'
        },
        colors: {
            toolbar: '#00000026',
            action: '#b90e0a'
        }
    },
    shape: {
        borderRadius: 32
    }
});


export const THEMES = {lightTheme, darkTheme};
