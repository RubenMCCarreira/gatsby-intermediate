import { Fragment } from 'react';

const Layout = ({ children }) => (
  <Fragment>
    <header
    >
      gatsby-theme-docs
    </header>
    <main>{children}</main>
  </Fragment>
);

export default Layout;
