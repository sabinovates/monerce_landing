import React, { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface FrameProps{
    children: ReactNode,
    footerRef: any,
}

const Frame: React.FC<FrameProps> = ({footerRef, children}: FrameProps) => {
  return (
    <div className='frame'>
        <Header />
        {children}
        <Footer footerRef={footerRef} />
    </div>
  )
}

export default Frame