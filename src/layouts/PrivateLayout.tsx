import { ReactNode, useState } from 'react';
import PrivateSidebar from '../Components/Private/PrivateSidebar';
import PrivateNavbar from './../Components/Private/PrivateNavbar';

interface Props {
  children?: ReactNode
}

const PrivateLayout = ({ children }: Props) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <>
      <div className='flex flex-col '>
        <PrivateSidebar />
        <div className="w-full">
          <PrivateNavbar />
        </div>
        <main className=" xl:ml-64 ">{children}</main>
      </div>
    </>
  );
};

export default PrivateLayout;