import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Logo = ({ size, ...props }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size ?? '470'}
      height={size ?? '432'}
      fill='none'
      viewBox='0 0 470 432'
      {...props}
    >
      <path
        fill='#c7c7cc'
        d='M107 432h74V0h-73.5L0 108v216.5L107 432zM362 0l107.5 108v151h-261v-75H303v-76h-94.5V0H362zM451 331v47l-53.5 54h-189V331H451z'
      ></path>
    </svg>
  );
};

export default Logo;
