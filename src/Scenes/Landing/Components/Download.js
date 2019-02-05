import React from 'react';
import AppStore from '../Images/badges/appstore.webp';
import PlayStore from '../Images/badges/google-play-badge.webp';
import Details from '../Images/views/details.webp';

export default function Download (params) {
  return (
    <section className="o-wrapper">

      <h1>Get the app</h1>

      <div>
        <a
          href="https://itunes.apple.com/au/app/runaway-pets/id1148260739"
          title="Download Runaway Pets iOS App"
          className="a-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AppStore} alt="Apple app store logo" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=co.runawaypets.runawaypets"
          title="Download Runaway Pets Android App"
          className="a-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={PlayStore} alt="Google play store logo" />
        </a>
      </div>

      <div>
        <img src={Details} alt="Runaway pets app details scene" />
      </div>

    </section>
  );
}
