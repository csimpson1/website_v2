import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useHeadings from '../../../../hooks/UseHeadings';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

import './TableOfContents.scss';

const Headings = ({ headings, showToc }) => {
  const scrollHandler = (event, id) => {
    event.preventDefault();
    document.querySelector(`#${id}`).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showToc && (
        <ul>
          {headings.map((heading) => (
            <li key={heading.id}>
              <a href={`#${heading.id}`} onClick={(e) => scrollHandler(e, heading.id)}>
                {heading.title}
              </a>
              {heading.items.length > 0 && (
                <ul>
                  {heading.items.map((child) => (
                    <li key={child.id}>
                      <a href={`#${child.id}`} onClick={(e) => scrollHandler(e, child.id)}>
                        {child.title}
                      </a>
                      {child.items.length > 0 && (
                        <ul>
                          {child.items.map((subchild) => (
                            <li key={subchild.id}>
                              <a href={`#${subchild.id}`} onClick={(e) => scrollHandler(e, subchild.id)}>
                                {subchild.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Headings.propTypes = {
  headings: PropTypes.Object,
  showToc: PropTypes.Boolean
};

const TableOfContents = () => {
  const [isTocExpanded, setTocExpanded] = useState(true);
  const { headings } = useHeadings();

  const handleTocExpansion = (event) => {
    event.preventDefault();
    setTocExpanded(!isTocExpanded);
  };
  return (
    <div className={isTocExpanded ? 'toc-container' : 'toc-container shrink-width-container'}>
      {!isTocExpanded && <BookOutlinedIcon onClick={(e) => handleTocExpansion(e)}></BookOutlinedIcon>}
      {isTocExpanded && <MenuBookOutlinedIcon onClick={(e) => handleTocExpansion(e)}></MenuBookOutlinedIcon>}
      <nav>
        <Headings headings={headings} showToc={isTocExpanded} />
      </nav>
    </div>
  );
};

TableOfContents.propTypes = {
  headings: PropTypes.Object
};

export default TableOfContents;
