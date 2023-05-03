import { ThemeProvider } from "styled-components"

const generalTheme = {
    colors: {
        darkerbg: '#222',
        lighterbg: '#444',
        importantTxt: '#fff',
        simpleTxt: '#ddd',
    },
    fonts: {
        titleFont: 'Caveat',
        normalFont: 'Lato',
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
    box: {
        boxSizing: 'border-box',
    },
    HTMLbody: {
        height: '100%'
    },

    body: {
        display: 'grid',
        placeItems: 'center',
        background: '#1d1e22',
    },

    button: {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        height: '56px',
        width: '220px',
        padding: '0 22px',
        border: 0,
        borderRadius: '28px',
        fontFamily: "Euclid Circular A",
        color: '#f7f7f7',
        background: 'green',
        cursor: 'pointer',
    },

    text: {
        position: 'absolute',
        left: '60px',
        display: 'block',
        whiteSpace: 'nowrap',
        fontSize: '17px',
        fontWeight: 600,
    },

    icon: {
        fontSize: '30px',
    },

    buttonSendingText: {
        animation: 'textAnimation 5s both',
    },

    buttonSendingIcon: {
        animation: 'iconAnimation 5s both',
    }

    /* @keyframesTextAnimation: {
      0 %,
          30 % {
              translate: 0 0,
          }
      39.9 % {
          translate: 0 100px;
      }
      40 % {
          translate: 300px 100px;
      }
      40.1 % {
          translate: 300px - 60px;
  }
  40.2 % {
      translate: 33px - 60px;
      }
  45 % {
      translate: 33px 0;
  }
  95 % {
      translate: 33px 0;
  }
  100 % {
      translate: 0 0;
  }
    }
  
  @keyframes iconAnimation {
      0 %,
          5 % {
              translate: 0 0;
          }
      20 %,
          30 % {
              translate: -250px 0;
          }
      40 % {
          translate: 200px 0;
          scale: 2;
      }
      40.1 % {
          translate: 200px - 60px;
      scale: 1;
  }
  40.2 % {
      translate: 34px - 60px;
      }
  45 %,
      95 % {
          translate: 34px 0;
      }
  100 % {
      translate: 0 0;
  }
    } */
}

export default function Theme({ children }) {
    return <ThemeProvider theme={generalTheme}>{children}</ThemeProvider>
}