import React from 'react';

const Button: React.FC<{
  name: string;
  href: string;
  className?: string;
}> = ({ name, href, className }) => {
  return (
    <a href={href}>
      <button
        className={`${
          className ? `${className}` : ''
        } py-2 px-4 duration-300 ease-in-out hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.30)]`}
      >
        {name}
      </button>
    </a>
  );
};

export default Button;
