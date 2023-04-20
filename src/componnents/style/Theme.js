import { ThemeProvider } from "styled-components"

const generalTheme = {
    colors: {
        darkerbg: '#222',
        lighterbg: '#444',
        importantTxt: '#fff',
        simpleTxt: '#ddd',
    },
    fonts: {
        titleFont: 'caveat',
        normalFont: 'lato',
    },
    fontSizes: {
        small: '1.0rem',
        medium: '1.5rem',
        large: '3rem',
    },
    fontWeigth: {
        light: 100,
        normal: 300,
        bold: 500,
    },
}

export default function Theme({ children }) {
    return <ThemeProvider Theme={generalTheme}>{children}</ThemeProvider>
}