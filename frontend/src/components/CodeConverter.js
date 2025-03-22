import React, { useState } from 'react';
import { Button, Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { convertCode } from '../services/api';
import CodeDisplay from './CodeDisplay';

function CodeConverter() {
  const [code, setCode] = useState('');
  const [sourceLang, setSourceLang] = useState('Python');
  const [targetLang, setTargetLang] = useState('JavaScript');
  const [result, setResult] = useState('');

  const handleConvert = async () => {
    try {
      const response = await convertCode(code, sourceLang, targetLang);
      setResult(response.result);
    } catch (error) {
      console.error(error);
      setResult(`Error: ${error.response?.data?.detail || error.message}`);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5">Code Converter</Typography>

      <Box display="flex" gap={2}>
        <FormControl fullWidth>
          <InputLabel>Source Language</InputLabel>
          <Select
            value={sourceLang}
            label="Source Language"
            onChange={(e) => setSourceLang(e.target.value)}
          >
            <MenuItem value="Python">Python</MenuItem>
            <MenuItem value="JavaScript">JavaScript</MenuItem>
            <MenuItem value="Java">Java</MenuItem>
            <MenuItem value="C++">C++</MenuItem>
            {/* Add more languages as needed */}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Target Language</InputLabel>
          <Select
            value={targetLang}
            label="Target Language"
            onChange={(e) => setTargetLang(e.target.value)}
          >
            <MenuItem value="JavaScript">JavaScript</MenuItem>
            <MenuItem value="Python">Python</MenuItem>
            <MenuItem value="Java">Java</MenuItem>
            <MenuItem value="C++">C++</MenuItem>
            {/* Add more languages as needed */}
          </Select>
        </FormControl>
      </Box>

      <TextField
        label="Your Code"
        multiline
        rows={6}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        variant="outlined"
      />

      <Button variant="contained" onClick={handleConvert}>
        Convert
      </Button>

      {/* Only show the heading and code block if `result` is not empty */}
      {result && (
        <>
          <Typography variant="h6" marginTop={2}>
            Converted Code:
          </Typography>
          <CodeDisplay code={result} language={targetLang.toLowerCase()} />
        </>
      )}
    </Box>
  );
}

export default CodeConverter;
