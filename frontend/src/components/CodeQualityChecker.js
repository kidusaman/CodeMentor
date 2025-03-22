import React, { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';
import { checkCodeQuality } from '../services/api';
import CodeDisplay from './CodeDisplay';

function CodeQualityChecker() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const handleCheckQuality = async () => {
    try {
      const response = await checkCodeQuality(code);
      setResult(response.result);
    } catch (error) {
      console.error(error);
      setResult(`Error: ${error.response?.data?.detail || error.message}`);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5">Code Quality Checker</Typography>

      <TextField
        label="Paste your code here..."
        multiline
        rows={6}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        variant="outlined"
      />

      <Button variant="contained" onClick={handleCheckQuality}>
        Check Quality
      </Button>

      {/* Only show the heading and code block if `result` is not empty */}
      {result && (
        <>
          <Typography variant="h6" marginTop={2}>
            Quality Analysis:
          </Typography>
          <CodeDisplay code={result} language="plaintext" />
        </>
      )}
    </Box>
  );
}

export default CodeQualityChecker;
