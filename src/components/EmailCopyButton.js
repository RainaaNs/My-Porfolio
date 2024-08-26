import React, { useState } from 'react';

const EmailCopyButton = () => {
  const [buttonText, setButtonText] = useState('Copy');
  const [isBouncing, setIsBouncing] = useState(false);
  const email = "rainaaaddo@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setButtonText('Copied!');
      setIsBouncing(true);

      setTimeout(() => {
        setButtonText('Copy');
        setIsBouncing(false);
      }, 2000); 
    });
  };

  return (
    <div className='flex flex-col'>
        <p className='text-[20px] pt-[17px]'>{email}</p>
        <button onClick={copyToClipboard} 
                className={`border px-[20px] py-[7px] text-[20px] mt-[5px] rounded-[38px] bg-white text-black' 
                ${isBouncing ? 'animate-bounceTwice' : ''}`}>
            {buttonText}
        </button>
    </div>
  );
};

export default EmailCopyButton;
