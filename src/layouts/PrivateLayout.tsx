import { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

const PrivateLayout = ({ children }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default PrivateLayout;