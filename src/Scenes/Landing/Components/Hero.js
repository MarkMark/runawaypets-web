import React from 'react'
import AppStore from '../Images/badges/appstore.webp'
import AppStoreFallback from '../Images/badges/appstore.png'
import PlayStore from '../Images/badges/google-play-badge.webp'
import PlayStoreFallback from '../Images/badges/google-play-badge.png'
import Img from '../../../Components/Images/Img'

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

        <div>
          <a
            href="https://www.facebook.com/runawaypets/"
            className="a-icon-facebook2"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            href="https://www.instagram.com/runawaypets"
            className="a-icon-instagram"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            href="https://twitter.com/runawaypets"
            className="a-icon-twitter"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </section>
  )
}
