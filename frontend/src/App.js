import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container } from '@mui/material';
import CodeConverter from './components/CodeConverter';
import Debugger from './components/Debugger';
import CodeQualityChecker from './components/CodeQualityChecker';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      {/* Header Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Code Tools
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Tabs for Navigation */}
      <AppBar position="static" color="default" style={{ marginTop: '16px' }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Converter" />
          <Tab label="Debugger" />
          <Tab label="Quality Checker" />
        </Tabs>
      </AppBar>

      {/* Main Content Container */}
      <Container maxWidth="md" style={{ marginTop: '32px' }}>
        {tabIndex === 0 && <CodeConverter />}
        {tabIndex === 1 && <Debugger />}
        {tabIndex === 2 && <CodeQualityChecker />}
      </Container>
    </>
  );
}

export default App;
