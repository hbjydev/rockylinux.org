import RLNavbar from '../Navbar';
import React from 'react';
import Footer from '../footer';

const Layout = ({ children }) => {
  return (
    <>
      <RLNavbar />
      <div className="relative bg-white overflow-hidden" id="page_content" style={{ paddingTop: '74px' }}>
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
  );
};

export default Layout;
