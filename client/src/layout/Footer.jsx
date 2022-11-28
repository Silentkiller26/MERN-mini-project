import React from 'react';

import { Place, MailOutline, LocalPhone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className='p-8 grid gap-x-16 gap-y-4 md:grid-cols-3'>
      <div>
        <h1 className='font-bold text-3xl uppercase mb-4 tracking-wider'>
          <a href=''>Craftkala.</a>
        </h1>
        <p className='text-justify'>
          Project by Diya Patel, Niyati Rolia and Siddhant Parekh
        </p>
      </div>
      <div>
        <h2 className='font-bold text-2xl mb-4 tracking-wider'>Useful Links</h2>
        <div className='grid grid-cols-2'>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Man Fashion</a>
            </li>
            <li>
              <a href=''>Accessories</a>
            </li>
            <li>
              <a href=''>Order Tracking</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href=''>Cart</a>
            </li>
            <li>
              <a href=''>My Account</a>
            </li>
            <li>
              <a href=''>Wishlist</a>
            </li>
            <li>
              <a href=''>Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-2xl mb-4 tracking-wider'>Contact</h2>
        <ul>
          <li>
            <Place className='mr-4' />
            <span>Mumbai, India</span>
          </li>
          <li>
            <LocalPhone className='mr-4' />
            <span>+201154251620</span>
          </li>
          <li>
            <MailOutline className='mr-4' />
            <span>contact@craftkala.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
