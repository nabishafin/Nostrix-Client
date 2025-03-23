import React from 'react';

const Button = ({ text }) => {
    return (
        <div>
            <button className='px-3 py-2 rounded-full bg-primary font-semibold text-black'>{text}</button>
        </div>
    );
};

export default Button;