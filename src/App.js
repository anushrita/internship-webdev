import React from 'react'
import SearchAppBar from './containers/appbar';
import SignInOutContainer from './containers/index'
import {ThemeProvider} from '@material-ui/core'
import {customTheme} from './components/customTheme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
      <SearchAppBar/>
      <SignInOutContainer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
