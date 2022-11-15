import React from 'react'
import "./State.css"

const State= () => {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Statistics</h1>
        <br /><br />
        <div className='main-stats'>
        <div >
        <div className="star_header">
          <h2>
            Github <span>Statistics</span>
          </h2>
        </div>
        <div className="box1">
          <a href="https://github.com/Abiramirajasekar">
            <img src="https://github-readme-streak-stats.herokuapp.com?user=Abiramirajasekar&theme=github-light&border_radius=5" />
          </a>
        </div>
        <div className="box2">

          <div>
            <a href="https://github.com/Abiramirajasekar">
              <img
                align="center"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abiramirajasekar"
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/Abiramirajasekar">
              <img
                align="left"
                src="https://github-readme-stats.vercel.app/api?username=Abiramirajasekar&count_private=true&show_icons=true"
              />
            </a>
          </div>

        </div>
      </div>
            
        </div>
    </div>
  )
}

export default State