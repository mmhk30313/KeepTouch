import Head from 'next/head'
// import Link from 'next/link';
import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation'
import { admins, supervisors } from '../../configs/config';
// import {admins, supervisors} from '../../configs/config'
export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>About Us</title>
          <meta name="description" content="This is our about page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation/>
        <main className="p-4 md:p-12 md:mx-20">
          <h1 className="text-3xl mb-10 text-center uppercase font-bold">
            About us
          </h1>

          <div className="flex justify-center gap-4">
            {
              supervisors.map((supervisor) => {
                return (
                  <div key={supervisor?.email} className="max-w-lg py-5 px-5 bg-white shadow-lg rounded-lg my-8">
                      <div className="flex justify-center md:justify-center -mt-16">
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" 
                          src={supervisor?.img}
                          alt="supervisor"
                        />
                      </div>
                      <div>
                        <h2 className="text-gray-800 mt-5 text-3xl font-extrabold">{supervisor?.name}</h2>
                        <h2 className="mt-2  text-2xl font-bold text-gray-600">{supervisor?.designation}</h2>
                        <a href='https://cse.mbstu.ac.bd/' target={'_blank'} className="text-gray-700 hover:text-indigo-700 my-2 text-xl font-semibold">
                          Department of {supervisor?.dept}
                        </a>
                        <div className="flex flex-col md:flex-row gap-4">
                          <p className="mt-2 text-gray-600">EMAIL: {supervisor?.email}</p>
                          <p className="mt-0 md:mt-2 text-gray-600">MOBILE: {supervisor?.mobile}</p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <a href="https://mbstu.ac.bd/" target={'_blank'} className="text-2xl font-medium text-indigo-600 hover:text-amber-500">
                          {supervisor?.university}
                        </a>
                      </div>
                  </div>
                )
              })
            }

          </div>

          <div className='flex items-center justify-center flex-col md:flex-row gap-4'>
            {
              admins.map((admin: any, idx) => (
                <div key={admin?.id} className=" py-5 px-5 bg-white shadow-lg rounded-lg my-10">
                  <div className={`flex justify-${idx%2 ? 'end' : 'start'} -mt-16`}>
                    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" 
                      src={admin?.img || "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"} 
                      alt='blog-creator' 
                    />
                  </div>
                  <div>
                    <h2 className="text-gray-800 text-3xl font-bold">{admin?.name}</h2>
                    <a href='https://cse.mbstu.ac.bd/' target={'_blank'} className="text-gray-700 hover:text-indigo-700 mt-2 text-xl font-semibold">Department of {admin?.dept}</a>
                    <div className="flex gap-4">
                      <p className="mt-2 text-gray-600">ID: {admin?.id}</p>
                      <p className="mt-2 text-gray-600">BATCH: <span className='ordinal ...'>{admin?.batch}</span></p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <a href="https://mbstu.ac.bd/" target={'_blank'} className="text-2xl font-medium text-indigo-600 hover:text-amber-500">
                      {admin?.university}
                    </a>
                  </div>
                </div>
                
              ))
            }
          </div>
        </main>
        <Footer/>
      </React.Fragment>
    )
  }
}
