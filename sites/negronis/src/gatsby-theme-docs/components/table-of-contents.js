/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import TableOfContentsPage from './table-of-contents-page';

const TableOfContents = () => {
  const data = useStaticQuery(graphql`
    query {
      allDocsPage {
        nodes {
          id
          title
          path
        }
      }
    }
  `);

  const pages = data.allDocsPage.nodes;

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {pages.map((page) => (
          <TableOfContentsPage
            id={page.id}
            path={page.path}
            title={page.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
