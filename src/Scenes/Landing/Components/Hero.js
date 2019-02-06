import React from 'react'
import AppStore from '../Images/badges/appstore.webp'
import PlayStore from '../Images/badges/google-play-badge.webp'

export default function Hero(params) {
  return (
    <section className="m-hero">
      <div className="m-hero__content">
        <h1>Runaway pets</h1>
        <p className="tagline">
          Here to help reunite owners with their lost pets
        </p>

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
      </div>
    </section>
  )
}
