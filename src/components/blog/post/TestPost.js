import TableOfContents from "./table-of-contents/TableOfContents";
const TestPost = () => {
    return (
        <div>
            <TableOfContents/>
            <h2 id="h2-1">Top Heading 1</h2>
            <h2 id="h2-2">Top Heading 2</h2>
            <h3 id="h3-1">Sub Heading 2-1</h3>
            <h2 id="h2-3">Top Heading 3</h2>
            <h3 id="h3-2">Sub Heading 3-1</h3>
            <h3 id="h3-3">Sub Heading 3-2</h3>
            <h2 id="h2-4">Top Heading 4</h2>
            <h3 id="h3-4">Sub Heading 4-1</h3>
            <h4 id="h4-1">Sub Sub Heading 4-1-1</h4>
            <h4 id="h4-2">Sub Sub Heading 4-1-2</h4>
            <h3 id="h3-5">Sub Heading 4-2</h3>
            <h3 id="h3-6">Sub Heading 4-3</h3>
        </div>
    );
};

export default TestPost;