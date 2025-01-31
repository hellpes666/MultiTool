import { ReactNode } from 'react';

interface IContainer {
  children: ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div className='mx-4 my-6 sm:mx-8 sm:my-8 md:mx-12 md:my-10 lg:mx-16 lg:my-12 xl:mx-24 xl:my-16'>
      {children}
    </div>
  );
};

export default Container;
