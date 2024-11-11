import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#8d6e58] py-6">
      <Image
        src="/image/logo-blanco-Ney.png"
        alt="Neymar Carrero Logo"
        width={150}
        height={50}
        className="mx-auto"
      />
      
    </div>
  );
};

export default Footer;