import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center bg-neutral-900 ">
        <div className="w-2/3 flex justify-between items-center py-10">
          <h1 className="text-4xl text-white">Logo.</h1>
          <div className="flex  items-center space-x-10 ">
            <Button
              name="Services"
              href="/services"
              className="bg-neutral-900 text-white"
            />
            <Button
              name="Contact"
              href="/contact"
              className="bg-neutral-900 text-white"
            />
            <Button
              name="About"
              href="/about"
              className="bg-neutral-900 text-white"
            />
            <Button
              name="Login"
              href="/login"
              className="bg-sky-500 text-white"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
