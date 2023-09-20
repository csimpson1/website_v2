import React, { useState, useEffect } from 'react';
import TestMarkdown from '../../../markdown/test/test_markdown.md';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const TestPost2 = () => {
  const [article, setArticle] = useState('');

  useEffect(() => {
    fetch(TestMarkdown)
      .then((res) => res.text())
      .then((text) => setArticle(text));
  }, []);

  return (
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {article}
    </ReactMarkdown>
  );
};

export default TestPost2;
