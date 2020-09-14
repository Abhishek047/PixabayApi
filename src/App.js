import React from 'react';
import Navigation from './components/Navigation'
import SelectOpt from './components/SelectOpt'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

function App() {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <Navigation />
        <SelectOpt />
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
