import { ReactNode } from 'react';
import PrivateSidebar from '../Components/Private/PrivateSidebar';

interface Props {
  children?: ReactNode
}

const PrivateLayout = ({ children }: Props) => {
  return (
    <>
      <div className='flex flex-row'>
        <PrivateSidebar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default PrivateLayout;