import useHeadings from '../../../../hooks/UseHeadings';

const Headings = ({ headings }) => {
    console.log('in headings component');
    console.log(headings);
    return(
    <ul>
        {headings.map((heading) => (
            <li key={heading.id}>
                <a href={`#${heading.id}`}>{heading.title}</a>
                    {heading.items.length > 0 && (
                        <ul>
                            {heading.items.map((child) => (
                                <li key={child.id}>
                                    <a href={`#${child.id}`}>{child.title}</a>
                                        {child.items.length > 0 && (
                                            <ul>
                                                {child.items.map((subchild) => (
                                                    <li key={subchild.id}>
                                                        <a href={`#${subchild.id}`}>{subchild.title}</a>
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