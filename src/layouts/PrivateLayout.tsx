import React, { useState } from 'react';
import PrivateSidebar from '../Components/Private/PrivateSidebar';
import PrivateNavbar from './../Components/Private/PrivateNavbar';

interface PrivateLayoutProps  {
  children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const toggleSidebar = () => setSidebarToggle((Prev) => !Prev);

  return (
    <>
      <div className='flex flex-col '>
        <PrivateSidebar sidebarToggle={sidebarToggle} />
        <div className="w-full">
          <PrivateNavbar
            sidebarToggle={sidebarToggle}
            onToggle={toggleSidebar} />
        </div>
        <main className={`xl:ml-64 ${sidebarToggle ? 'ml-64' : 'ml-0'} bg-gray-300 min-h-screen`}>
          {children}
        </main>
      </div>
    </>
  );
};

export default PrivateLayout;