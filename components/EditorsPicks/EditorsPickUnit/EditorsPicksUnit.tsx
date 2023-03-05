import React from 'react';
import Image from 'next/image';
import { EditorsPick } from '@utilities/interfacesApp';
import { imgURL, posterSize } from '@utilities/resources';
import Link from 'next/link';

function EditorsPicksUnit({
  title,
  posterPath,
  year,
  mediaType,
  id,
}: EditorsPick) {
  // Could be changed for optimization of desing alters
  const optimalImageSize = posterSize.medium;

  const sizes = '(max-width: 760px) 50vw, 25vw';

  return (
    <Link href={`/${mediaType}/${id}`}>
      <div className="c-editors-picks-unit">
        <div className="c-editors-picks-unit__poster-wrapper">
          <Image
            className="c-editors-picks-unit__poster"
            src={`${imgURL}/${optimalImageSize.url}${posterPath}`}
            alt={`${title} film poster`}
            sizes={sizes}
            width={optimalImageSize.width}
            height={optimalImageSize.height}
            placeholder="empty"
          />
        </div>
        <h3 className="c-editors-picks-unit__title">{`${title} (${year})`}</h3>
      </div>
    </Link>
  );
}

export default EditorsPicksUnit;
