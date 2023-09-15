import React, { useState, useEffect } from 'react';
import TestMarkdown from '../../../markdown/test/test_markdown.md';
import ReactMarkdown from 'react-markdown';

const TestPost2 = () => {
  const [article, setArticle] = useState('');

  useEffect(() => {
    fetch(TestMarkdown)
      .then((res) => res.text())
      .then((text) => setArticle(text));
  }, []);

  return <ReactMarkdown>{article}</ReactMarkdown>;
};

export default TestPost2;
