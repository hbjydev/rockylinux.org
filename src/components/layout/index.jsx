import RLNavbar from '../Navbar';
import { Styler } from '@resf/pebble';
import React from 'react';

const Layout = ({ children }) => {
  return (
    // <Styler>
    <>
      <RLNavbar />
      <div className="relative bg-white dark:bg-gray-900 overflow-hidden" id="page_content">
        <noscript>
          <style>
            {`
            #LanguageDiv {display:none;}
          `}
          </style>
        </noscript>
        <div>{children}</div>
      </div>
    </>
    // </Styler>
  );
};

export default Layout;
