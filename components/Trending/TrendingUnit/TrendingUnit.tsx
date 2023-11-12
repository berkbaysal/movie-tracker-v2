'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { imgURL, posterSize } from '@utilities/resources';
import Link from 'next/link';
import { MediaType } from '@utilities/interfacesApp';

interface TrendingUnitProps {
  title: string;
  posterPath?: string | null;
  variant?: 'default' | 'large';
  priority?: boolean;
  mediaType: MediaType;
  id: number;
}

function TrendingUnit({
  title,
  posterPath = undefined,
  mediaType,
  id,
  variant = 'default',
  priority = false,
}: TrendingUnitProps) {
  const [hovering, setHovering] = useState<boolean>(false);

  const optimalImageSize = variant === 'large' ? posterSize.large : posterSize.medium;
  const sizes = variant === 'large' ? '(max-width: 760px) 50vw, 25vw' : '(max-width: 760px) 50vw, 15vw';

  return (
    <Link href={`/${mediaType}/${id}`}>
      <div className="c-trending-unit">
        <h3
          className={`c-trending-unit__title ${variant === 'large' ? 'c-trending-unit__title--top-trending' : ''} ${
            hovering ? 'c-trending-unit__title--slide-up' : ''
          }`}
        >
          {title}
        </h3>

        <Image
          src={`${imgURL}/${optimalImageSize.url}${posterPath}`}
          alt={`${title} film poster`}
          sizes={sizes}
          className="c-trending-unit__trending-poster"
          width={optimalImageSize.width}
          height={optimalImageSize.height}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          priority={priority}
          placeholder="empty"
        />
      </div>
    </Link>
  );
}

export default TrendingUnit;
