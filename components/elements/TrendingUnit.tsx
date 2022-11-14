import Image from 'next/image';
import React from 'react';
import { imgURL, posterSize } from '../../static/resources';

interface TrendingUnitProps {
  title: string;
  posterPath: string | null;
  width?: number;
  height?: number;
}

function TrendingUnit({ title, posterPath, width, height }: TrendingUnitProps) {
  return (
    <div className="c-trending-unit">
      <Image
        src={`${imgURL}/${posterSize.large.url}/${posterPath}`}
        alt={`${title} film poster`}
        className="c-trending-unit__trending-poster"
        width={width}
        height={height}
      />
      <div className="c-trending-unit__title">{title}</div>
    </div>
  );
}

TrendingUnit.defaultProps = {
  width: posterSize.large.width,
  height: posterSize.large.height,
};

export default TrendingUnit;
