import React, { ReactElement } from 'react';

interface buttonInterface {
    variant: 'primary'|'secondary',
    text:string,
    startIcon:ReactElement;
    onClick?:void;
    widthFull?:boolean
}

export const Button = ({variant,text,startIcon,onClick,widthFull}:buttonInterface) => {
  // Define base classes
  const baseClasses = `inline-flex h-12 animate-shimmer items-center justify-center rounded-md border px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  ${widthFull? "w-full" :""}`;
  
  // Define variant-specific styles
  const variants: any = {
    primary: `border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-400 focus:ring-slate-400 focus:ring-offset-slate-50`,
    secondary: `border-purple-800 bg-[linear-gradient(110deg,#3b0763,45%,#5a29a8,55%,#3b0763)] bg-[length:200%_100%] text-purple-200 focus:ring-purple-400 focus:ring-offset-purple-50`
  };


  return (
    <div>
      <button onClick={onClick} className={`${baseClasses} ${variants[variant]} gap-2`}>
        {startIcon}
        {text}
      </button>
    </div>
  );
};

export default Button;
