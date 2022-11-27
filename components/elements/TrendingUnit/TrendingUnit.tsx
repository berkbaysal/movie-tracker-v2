import Image from 'next/image';
import React, { useState } from 'react';
import { imgURL, posterSize } from '../../../util/resources';

interface TrendingUnitProps {
  title: string;
  posterPath: string | null;
  width?: number; // Expected original image size, used by Next to optimize layout, does not impact actual image size
  height?: number; // -----------------------------------------------------------------------------------------------
  variant?: 'default' | 'large';
  priority: boolean;
}

function TrendingUnit({
  title,
  posterPath,
  width = posterSize.large.width,
  height = posterSize.large.height,
  variant = 'default',
  priority = false,
}: TrendingUnitProps) {
  const [hovering, setHovering] = useState<boolean>(false);

  const sizes =
    variant === 'default'
      ? '(max-width: 544px) 40wv, 25vw'
      : '(max-width: 544px) 10wv, 25vw';
  return (
    <div className="c-trending-unit">
      <h3
        className={`c-trending-unit__title ${
          variant === 'large' ? 'c-trending-unit__title--top-trending' : ''
        } ${hovering ? 'c-trending-unit__title--slide-up' : ''}`}
      >
        {title}
      </h3>

      <Image
        src={`${imgURL}/${posterSize.large.url}${posterPath}`}
        alt={`${title} film poster`}
        className="c-trending-unit__trending-poster"
        sizes={sizes}
        width={width}
        height={height}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        priority={priority}
      />
    </div>
  );
}

export default TrendingUnit;
