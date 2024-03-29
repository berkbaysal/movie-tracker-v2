import { Button } from '@elements';
import { MediaContentCredits, MediaContentDetails } from '@utilities/interfacesApp';
import { backdropSize, imgURL, posterSize } from '@utilities/resources';
import PlaceholderPoster from '@public/img/placeholder_poster.png';
import Image from 'next/image';
import React from 'react';

interface IContentSumamryProps {
  contentInfo: MediaContentDetails;
  credits: MediaContentCredits;
}

function ContentSummary({ contentInfo, credits }: IContentSumamryProps) {
  const findCrewWithJob = (job: string) => {
    return credits.crew.filter((crew) => crew.job.toLowerCase() === job.toLowerCase()).map((entry) => entry.name);
  };

  return (
    <section aria-label="Details section" className="container-fluid o-background-container c-content-summary">
      {contentInfo.backgroundImagePath && (
        <>
          <Image
            src={`${imgURL}/${backdropSize.large.url}${contentInfo.backgroundImagePath}`}
            alt="Background image"
            sizes="100vw"
            width={backdropSize.large.width}
            height={backdropSize.large.height}
            className="c-content-summary__background-image"
          />
          <div className="c-content-summary__overlay" />
        </>
      )}
      <div className="container c-content-summary__container u-padding-ends-xsmall u-padding-ends-2xsmall@md-down">
        <Image
          src={
            contentInfo.posterPath ? `${imgURL}/${posterSize.large.url}${contentInfo.posterPath}` : PlaceholderPoster
          }
          alt={`${contentInfo.title} poster`}
          sizes="(max-width: 760px) 100vw 17vw"
          width={posterSize.large.width}
          height={posterSize.large.height}
          className="c-content-summary__poster"
          placeholder="empty"
          priority
        />

        <div className="c-content-summary__info-container">
          <div className="c-content-summary__title-container">
            <h1 className="c-content-summary__content-title">{contentInfo.title}</h1>
            <div className="c-content-summary__content-title--date-and-time">{` ${new Date(
              contentInfo.year
            ).getFullYear()} •  ${contentInfo.runtime} min `}</div>
          </div>
          <div className="c-content-summary__content-overview">
            <div className="c-content-summary__content-overview--tagline" data-testid="content-tagline">
              {contentInfo.tagline || <br />}
            </div>
            {contentInfo.genres.map((genre) => genre.name).join(', ')}
          </div>
          <div>
            {findCrewWithJob('director').length > 0 ? (
              <div className="c-content-summary__content-creators">
                {'Directing: '}
                <span className="c-content-summary__content-creators--creator-names">
                  {findCrewWithJob('director').join(', ')}
                </span>
              </div>
            ) : (
              <br />
            )}
            {findCrewWithJob('screenplay').length > 0 ? (
              <div className="c-content-summary__content-creators">
                {'Screenplay: '}
                <span className="c-content-summary__content-creators--creator-names">
                  {findCrewWithJob('screenplay').join(', ')}
                </span>
              </div>
            ) : (
              <br />
            )}
          </div>
          <div className="c-content-summary__controls">
            <Button label="Mark Watched" />
          </div>
          <div className="c-content-summary__overview">
            <h2 className="c-content-summary__overview--title">Overview:</h2>
            <p className="c-content-summary__overview--summary">{contentInfo.overview}</p>
          </div>
        </div>
      </div>
      <div className="c-content-summary__overview--separated u-padding-2xsmall">
        <h2 className="c-content-summary__overview--title">Overview:</h2>
        <p className="c-content-summary__overview--summary">{contentInfo.overview}</p>
      </div>
    </section>
  );
}

export default ContentSummary;
