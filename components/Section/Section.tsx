import React from 'react';

interface Props {
  Component: React.ElementType;
}

export default function Section({ Component }: Props) {
  return (
    <div className={'Section'}>
      <Component />
    </div>
  );
}
