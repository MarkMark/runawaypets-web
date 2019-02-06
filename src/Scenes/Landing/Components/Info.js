import React from 'react'
import Views from '../Images/views/progress.png'

export default function Info() {
  return (
    <section className="o-wrapper u-padding-top-large">
      <div className="o-layout">
        <div className="col u-padding-bottom-none">
          <h1>Easy as one, two, three</h1>

          <p>
            Losing a pet is one of the most stressful & upsetting situations a
            person can be in. So in 3 easy steps you can have a post with all
            your pets details a picture and the last seen location visable to
            all users in your area. best of all, its free!
          </p>

          <div className="u-alignText--center">
            <img src={Views} alt="Runaway pets views" />
          </div>
        </div>
      </div>
    </section>
  )
}
