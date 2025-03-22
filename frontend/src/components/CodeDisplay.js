// src/components/CodeDisplay.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeDisplay({ code, language = 'javascript' }) {
  return (
    <SyntaxHighlighter language={language} style={oneDark} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeDisplay;
