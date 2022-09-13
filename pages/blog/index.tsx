import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

const index = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Popular Blogs</title>
                <meta name="description" content="This is our about page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            <main className="p-12 px-16">
                <h1 className="text-3xl mb-10 text-center uppercase font-bold">
                    Popular Blogs
                </h1>                
            </main>
            <Footer/>
            
        </React.Fragment>
    );
};

export default index;