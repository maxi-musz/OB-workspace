/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Header: React.FC = () => {
  return (
    <header className="bg-white py-12 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Comfortable Workspace.<br />Suitable for <span className="text-green-500">Personal or Office works Dabex</span>.</h1>
          <p className="text-gray-700 mb-8">A most realxing, conducive and easiest way to work without any form of disturbances or interruptions</p>
          <div className="flex space-x-4">
            <Link href="/try-free" legacyBehavior>
              <a className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Get Started</a>
            </Link>
            <Link href="/deploy" legacyBehavior>
              <a className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700">Contact Us</a>
            </Link>
          </div>

          <br />
          <br />
          <hr />
          <div className='mt-2'>
            <div>
              <div className='flex flex-row text-xs'>
                <div className='mx-10'>
                  <h1 className='text-xl text-blue-500'>100+</h1> 
                  <p className='text-xs'>Customers</p>
                </div>
                <div  className='mx-10'>
                  <h1 className='text-xl text-blue-500'>63+</h1> 
                  <p className='text-xs'>Active users</p>
                </div>
                <div  className='mx-10'>
                  <h1 className='text-xl text-blue-500'>43+</h1> 
                  <p className='text-xs'>Supports</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="w-[32rem] relative aspect-video lg:ml-10">
                    <Image
                    src="/workspace-img1.jpg"
                    alt="banner-image"
                    fill
                    className="object-contain"
                    />
          </div>
          
      </div>
    </header>
  );
};

export default Header;
