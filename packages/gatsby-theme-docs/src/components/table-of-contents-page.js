/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const TableOfContentsPage = ({id, title, path }) => {
  return (
    <li key={id}>
      <Link
        to={path}
        sx={{
          '&.active': {
            fontStyle: 'contentPage',
            textDecoration: 'contentPage',
            '::after': { content: '" (currently viewing)"' },
          },
        }}
        activeClassName="active"
      >
        {title}
      </Link>
    </li>
  )
}

export default TableOfContentsPage
