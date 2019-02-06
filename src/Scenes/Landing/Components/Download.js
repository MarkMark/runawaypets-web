import React from 'react'
import AppStore from '../Images/badges/appstore.webp'
import AppStoreFallback from '../Images/badges/appstore.png'
import PlayStore from '../Images/badges/google-play-badge.webp'
import PlayStoreFallback from '../Images/badges/google-play-badge.png'
import Details from '../Images/views/details.webp'
import DetailsFallback from '../Images/views/details.webp'
import Img from '../../../Components/Images/Img'

export default function Download(params) {
  return (
    <section className="o-wrapper u-padding-vertical-large">
      <div className="o-layout">
        <div className="col">
          <h1>Get the app</h1>
        </div>
      </div>

      <div className="o-layout o-layout--center">
        <div className="col">
          <a
            href="https://itunes.apple.com/au/app/runaway-pets/id1148260739"
            title="Download Runaway Pets iOS App"
            className="a-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              src={AppStore}
              fallback={AppStoreFallback}
              alt="Apple app store logo"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=co.runawaypets.runawaypets"
            title="Download Runaway Pets Android App"
            className="a-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              src={PlayStore}
              fallback={PlayStoreFallback}
              alt="Google play store logo"
            />
          </a>
        </div>

        <div className="col">
          <Img
            src={Details}
            fallback={DetailsFallback}
            alt="Runaway pets app details scene"
          />
        </div>
      </div>
    </section>
  )
}
