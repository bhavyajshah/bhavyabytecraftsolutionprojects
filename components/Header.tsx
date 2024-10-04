
import React from "react";

type HeaderProps = {
  logo: string;
};

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-center w-full text-base leading-7 max-w-[1340px] max-md:max-w-full">
      <img
        loading="lazy"
        src={logo}
        alt="Company logo"
        className="object-contain shrink-0 self-stretch my-auto max-w-full bg-blend-normal aspect-[4.88] w-[190px]"
      />
      <nav className="flex gap-8 items-start self-stretch p-4 whitespace-nowrap bg-blend-normal min-h-[57px] text-neutral-800">
        <a href="#home" className="z-10 bg-blend-normal w-[43px]">
          Home
        </a>
        <a href="#services" className="z-10 w-16 bg-blend-normal">
          Services
        </a>
        <a href="#about" className="z-10 bg-blend-normal w-[43px]">
          About
        </a>
        <a href="#portfolio" className="z-10 bg-blend-normal w-[49px]">
          Portfolio
        </a>
        <a href="#contact" className="z-10 w-8 bg-blend-normal">
          Contact
        </a>
      </nav>
      <div className="flex gap-5 self-stretch my-auto">
        <a
          href="#contact"
          className="px-8 py-2.5 text-white bg-blue-600 bg-blend-normal rounded-[30px] max-md:px-5"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Header;
