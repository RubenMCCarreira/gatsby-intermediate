/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from 'theme-ui';
import { Global } from '@emotion/react';

const Layout = ({ children }) => (
  <Fragment>
    <Global styles={{ body: { margin: 0 } }} />
    <header
      sx={{
        bg: 'primary',
        color: 'background',
        fontFamily: 'header',
        p: 3,
      }}
    >
      gatsby-theme-docs
    </header>
    <main
      sx={{
        mx: 'auto',
        maxWidth: 650,
        width: '90vw',
        fontFamily: 'main',
      }}
    >
      {children}
    </main>
  </Fragment>
);

export default Layout;
