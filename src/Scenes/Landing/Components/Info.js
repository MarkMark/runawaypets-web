import React from 'react'
import Views from '../Images/views/progress.webp'
import ViewsFallback from '../Images/views/progress.png'
import Img from '../../../Components/Images/Img'

export default function Info() {
  return (
    <section className="o-wrapper u-padding-top-large">
      <div className="o-layout">
        <div className="o-col u-padding-bottom-none">
          <h1>Easy as one, two, three</h1>

          <p>
            Losing a pet is one of the most stressful & upsetting situations a
            person can be in. So in 3 easy steps you can have a post with all
            your pets details a picture and the last seen location visable to
            all users in your area. best of all, its free!
          </p>

          <div className="u-alignText--center">
            <Img
              src={Views}
              fallback={ViewsFallback}
              alt={'Runaway pets views'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
