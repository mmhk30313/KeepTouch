import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Layout = ({children}: any) => {
    return (
        <React.Fragment>
            <Navigation/>
            {
                children
            }
            <Footer/>
        </React.Fragment>
    );
};

export default Layout;