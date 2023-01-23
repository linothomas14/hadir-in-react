import React from "react"

const Button: React.FC<{
    name : string,
    href : string,
    className? : string,
}> = ({ name , href, className }) => {  
    return (
      <a href={href}>
        <button
          className={`${
            className ? `${className}` : ''
          } py-2 px-4 transition duration-150 ease-in-out hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.10)]`}
        >
          {name}
        </button>
      </a>
    );
  }
  
  export default Button;
  