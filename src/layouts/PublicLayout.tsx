import { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

const PublicLayout = ({ children }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;