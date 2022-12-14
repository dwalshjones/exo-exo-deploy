import React from 'react'
import IndicatorBars from './IndicatorBars'
import Levels from './Levels'

export default function HUD() {
  return (
    <>
      <body className="HUDBody">
        <div className="HUDcontainer">
          <div className="left-part information">
            <IndicatorBars />
            <div className="right-part information">
              <ul className="mission-info">
                <li>
                  <span>MISSION: EXO-EXO</span>
                </li>
                <li>
                  <span>SIZE: 5 TEST SUBJECTS</span>
                </li>
                <li>
                  <span>TEAM: HOROEKA</span>
                </li>
                <li>
                  <span>NAVIGATION:</span>
                </li>
                <li>
                  <div className="instructions">
                    <span> - CLICK PLANET TO ZOOM</span>
                    <span> - HOVER FOR INFORMATION</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

{
  /* <script> src={<Script />}</script> */
}
