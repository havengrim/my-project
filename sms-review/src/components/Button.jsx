import React from 'react';

const Button = ({ onClick, styles, buttonText }) => {
  return (
    <button 
      type="button" 
      className={`py-2 px-4 bg-blue-500 text-white font-poppins font-medium text-[18px] outline-none ${styles} rounded-[10px]`}
      onClick={onClick} // Ensure onClick is defined
    >
      {buttonText}
    </button>
  )
}

export default Button;