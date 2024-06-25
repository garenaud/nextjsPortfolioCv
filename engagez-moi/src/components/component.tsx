import React from 'react';

type ComponentProps = {
  message: string;
};

const Component: React.FC<ComponentProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default Component;