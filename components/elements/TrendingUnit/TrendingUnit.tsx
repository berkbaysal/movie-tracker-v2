import Image from 'next/image';
import React, { useState } from 'react';
import { imgURL, posterSize } from '../../../static/resources';

interface TrendingUnitProps {
  title: string;
  posterPath: string | null;
  width?: number;
  height?: number;
  variant?: 'default' | 'large';
}

function TrendingUnit({
  title,
  posterPath,
  width,
  height,
  variant,
}: TrendingUnitProps) {
  const [hovering, setHovering] = useState<boolean>(false);

  return (
    <div className="c-trending-unit">
      <Image
        src={`${imgURL}/${posterSize.large.url}/${posterPath}`}
        alt={`${title} film poster`}
        className="c-trending-unit__trending-poster"
        width={width}
        height={height}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
      <div
        className={`c-trending-unit__title ${
          variant === 'large' ? 'c-trending-unit__title--top-trending' : ''
        } ${hovering ? 'c-trending-unit__title--slide-up' : ''}`}
      >
        {title}
      </div>
    </div>
  );
}

TrendingUnit.defaultProps = {
  width: posterSize.large.width,
  height: posterSize.large.height,
  variant: 'default',
};

export default TrendingUnit;
