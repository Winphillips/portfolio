/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Switch,
  withStyles
} from '@material-ui/core';
import {
  alpha,
  createTheme,
  darken,
  lighten,
  ThemeProvider
} from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

export default function Header(props) {
  const useMountEffect = (fun) => useEffect(fun, []);
  useMountEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) switchDarkMode();
  });

  const [state, setState] = useState({
    themeDialogOpen: false,
    themeColor: '#1838DC',
    darkMode: false
  });
  const darkBgColor = 'rgb(30, 35, 35)';

  let theme = createTheme({
    palette: {
      type: state.darkMode ? 'dark' : 'light',
      background: {
        paper: state.darkMode ? darkBgColor : '#FFF'
      }
    }
  });

  const setThemeDialogOpen = (bool) => setState({ ...state, themeDialogOpen: bool });
  const switchDarkMode = () => {
    document.body.className = !state.darkMode ? 'theme-dark' : 'theme-light';
    setState({ ...state, darkMode: !state.darkMode });
  };
  const onChangeColor = (e) => {
    const v = e.target.value;
    let newValues = {
      'base-color': v,
      'base-color-hover': darken(v, 0.1),
      'darken-base-color-15': darken(v, 0.15),
      'darken-base-color-25': darken(v, 0.25),
      'lighten-base-color-25': lighten(v, 0.25),
      'rgba-base-color-0': alpha(v, 0),
      'rgba-base-color-hover-0-8': alpha(darken(v, 0.1), 0.8)
    };
    for (const cssProp in newValues)
      document.body.style.setProperty(`--${cssProp}`, newValues[cssProp]);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', v);
    setState({ ...state, themeColor: v });
  };

  const StyledSwitch = withStyles({
    switchBase: {
      color: state.themeColor,
      '&$checked': {
        color: state.themeColor
      },
      '&$checked + $track': {
        backgroundColor: state.themeColor
      }
    },
    checked: {},
    track: {},
    root: {
      marginLeft: 15
    }
  })(Switch);

  const StyledButton = withStyles({
    root: { color: state.themeColor }
  })(Button);

  const ThemePickerDialog = (
    <Dialog
      disableScrollLock
      open={state['themeDialogOpen']}
      onClose={() => setThemeDialogOpen(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Theme Picker</DialogTitle>
      <DialogContent className="dialog">
        <FormGroup row>
          <FormControlLabel
            control={
              <StyledSwitch
                checked={state['darkMode']}
                onChange={switchDarkMode}
                name="checkedB"
                aria-label="checkbox"
              />
            }
            label="Dark Mode"
          />
          <FormControlLabel
            control={
              <input
                type="color"
                defaultValue={state.themeColor}
                style={{
                  width: '30px',
                  height: '30px',
                  border: 'none',
                  margin: 4,
                  backgroundColor: state.darkMode ? darkBgColor : '#fff'
                }}
                onChange={onChangeColor}
              />
            }
            label="Theme Color"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <StyledButton onClick={() => setThemeDialogOpen(false)}>Close</StyledButton>
      </DialogActions>
    </Dialog>
  );
  return (
    <ThemeProvider theme={theme}>
      <div id="mobile-menu-open" className="shadow-large">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <header>
        <div id="mobile-menu-close">
          <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" className="shadow">
          {props.sections.map((inst) => (
            <li key={inst}>
              <a href={'#' + inst.toLowerCase()}>{inst}</a>
            </li>
          ))}
          <li key="theme-config">
            <a onClick={() => setThemeDialogOpen(true)} href="#" className="no-scroll">
              <b>Theme</b>
            </a>
          </li>
        </ul>
      </header>
      {ThemePickerDialog}
    </ThemeProvider>
  );
}
