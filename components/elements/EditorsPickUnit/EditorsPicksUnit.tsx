import React from 'react';
import Image from 'next/image';
import { EditorsPick } from '../../../util/interfacesApp';
import { imgURL, posterSize } from '../../../util/resources';

function EditorsPicksUnit({ title, posterPath, year }: EditorsPick) {
  // Could be changed for optimization of desing alters
  const optimalImageSize = posterSize.medium;

  const sizes = '(max-width: 760px) 50vw, 25vw';

  return (
    <div className="c-editors-picks-unit">
      {/* TO-DO: ADD <a> to movie with id from props */}
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
      <div className="c-editors-picks-unit__title">{`${title} (${year})`}</div>
    </div>
  );
}

export default EditorsPicksUnit;
