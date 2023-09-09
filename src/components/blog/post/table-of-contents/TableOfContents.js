import useHeadings from '../../../../hooks/UseHeadings';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

import React, {useState} from 'react';
import './TableOfContents.css';



const Headings = ({ headings }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const scrollHandler = (event, id) => {
        event.preventDefault();
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth"
        })
    };
    
    const handleTocExpansion = (event) => {
        event.preventDefault();
        setIsExpanded(!isExpanded);
    }

    return(
    <>
        {!isExpanded && <BookOutlinedIcon  onClick = {(e) => handleTocExpansion(e)}></BookOutlinedIcon>}
        {isExpanded && 
        <>
        <MenuBookOutlinedIcon onClick = {(e) => handleTocExpansion(e)}></MenuBookOutlinedIcon>
        <ul>
            {headings.map((heading) => (
                <li key={heading.id}>
                    <a href={`#${heading.id}`} onClick={(e) => scrollHandler(e, heading.id)}>{heading.title}</a>
                        {heading.items.length > 0 && (
                            <ul>
                                {heading.items.map((child) => (
                                    <li key={child.id}>
                                        <a href={`#${child.id}`} onClick={(e) => scrollHandler(e, child.id)}>{child.title}</a>
                                            {child.items.length > 0 && (
                                                <ul>
                                                    {child.items.map((subchild) => (
                                                        <li key={subchild.id}>
                                                            <a href={`#${subchild.id}`} onClick={(e) => scrollHandler(e, subchild.id)}>{subchild.title}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                            }
                                    </li>
                                ))}
                            </ul>
                        )}
                </li>
            ))}
        </ul>
        </>}
    </>
    );
};

const TableOfContents = () => {
    const { headings } = useHeadings();
    return (
        <nav>
            <Headings headings={ headings } />
        </nav>
    )
};

export default TableOfContents;