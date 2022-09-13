import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles?.footer}>
            <div className={'inline-block flex gap-2 text-extrabold text-indigo-600'}>
                <div className='flex justify-center text-bold'>
                    @Copyright {new Date().getFullYear()}
                    <span className='mx-2'>|</span>
                    <Link href="/">
                        <a className='hover:text-amber-500'>
                            <img className='animate-spin md:animate-none mr-2' width={25} height={10} src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Logo" />
                            Keep in touch
                        </a>
                    </Link>
                </div>
            </div>
      </footer>
    );
};

export default Footer;