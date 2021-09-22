import RLNavbar from '../Navbar';
import { Styler } from '@resf/pebble';
import React from 'react';
import Footer from '../footer';

const Layout = ({ children }) => {
  return (
    // <Styler>
    <>
      <RLNavbar />
      <div className="relative bg-white dark:bg-gray-900 overflow-hidden" id="page_content" style={{ paddingTop: '74px' }}>
        <noscript>
          <style>
            {`
            #LanguageDiv {display:none;}
          `}
          </style>
        </noscript>
        <div>{children}</div>
      </div>
      <Footer pageContext={{ locale: 'en' }} />
    </>
    // </Styler>
  );
};

export default Layout;
