import React from 'react';

interface Props {
  titleItems: Array<{
    text: string;
    color?: string;
  }>;
}

export default function SectionTitle({ titleItems }: Props) {
  const classPrefix: string = 'SectionTitle';

  const title = titleItems.map((titleItem, index) => {
    let spanClass: string = `${classPrefix}__item`;

    if ('color' in titleItem) {
      spanClass = `${spanClass} ${spanClass}--${titleItem.color}`;
    }

    return (
      <span key={`title-${index}`} className={spanClass}>
        {titleItem.text}{' '}
      </span>
    );
  });

  return <div className={classPrefix}>{title}</div>;
}
