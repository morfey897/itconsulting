import React from 'react';
import { SectionTitle } from '../SectionTitle';

export default function About() {
  return (
    <div className={'About'}>
      <SectionTitle
        titleItems={[
          { text: 'About' },
          { text: 'we will help.', color: 'gray' },
        ]}
      />
    </div>
  );
}
