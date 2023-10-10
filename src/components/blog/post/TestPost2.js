import React, { useState, useEffect } from 'react';
//import React from 'react';
import TestMarkdown from '../../../markdown/test/test_markdown.md';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import TableOfContents from './table-of-contents/TableOfContents';

const TestPost2 = () => {
  const [article, setArticle] = useState('');
  const [articleRendered, setArticleRendered] = useState(false);

  useEffect(() => {
    fetch(TestMarkdown)
      .then((res) => res.text())
      .then((text) => setArticle(text))
      .then(() => setArticleRendered(true));
  }, []);

  return (
    <>
      <TableOfContents article={articleRendered}></TableOfContents>
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {article}
      </ReactMarkdown>
    </>
  );
};

export default TestPost2;
