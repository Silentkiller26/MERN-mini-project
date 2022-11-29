import React from 'react';

import { Place, MailOutline, LocalPhone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className='p-8 grid gap-x-16 gap-y-4 md:grid-cols-3'>
      <div>
        <h1 className='font-bold text-3xl uppercase mb-4 tracking-wider'>
          <a href=''>Craftkala</a>
        </h1>
        <p className='text-justify'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          recusandae nobis sunt aliquid tempore vitae sapiente ea voluptatibus
          ab repellat asperiores eius cum laboriosam facilis eos, maiores
          deleniti nemo consequuntur assumenda sed consectetur culpa voluptatum
          quisquam quibusdam? Saepe, soluta quibusdam.
        </p>
      </div>
      <div>
        <h2 className='font-bold text-2xl mb-4 tracking-wider'>Useful Links</h2>
        <div className='grid grid-cols-2'>
          <ul>
            <li>
              <a href='#Brandname'>Home</a>
            </li>
            <li>
            <a href='/categories/handloom'>Handloom</a>
            </li>
            <li>
              <a href='/categories/pottery'>Pottery</a>
            </li>
            <li>
              <a href='/categories/chappals'>Chappals</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='/categories/paintings'>Paintings</a>
            </li>
            <li>
              <a href='/categories/carving'>Carving</a>
            </li>
            <li>
              <a href='/cart'>Cart</a>
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
            <span>9699810275</span>
          </li>
          <li>
            <MailOutline className='mr-4' />
            <span>contact@Craftkala.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
