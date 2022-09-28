import React from 'react'
import "./State.css"

const State= () => {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Statistics</h1>
        <br /><br />
        <div className='main-stats'>
            <div>
            <div className='circle'><p>1200+</p></div>
            <h4>Hours</h4>
            <h6>Of Coding</h6>
            </div>
            <div>
            <div className='circle-even'><p>400+</p></div>
            <h4>HackerRank</h4>
            <h6>Points</h6>
            </div>
            <div>
            <div className='circle'><p>400+</p> </div>
            <h4>Git</h4>
            <h6>Commits</h6>
            </div>
            <div>
            <div className='circle-even'><p>3</p></div>
            <h4>Projects</h4>
            <h6>Done</h6>
            </div>
            <div>
            <div className='circle'><p>100+</p></div>
            <h4>Hours</h4>
            <h6>Of Soft Skills</h6>
            </div>
            
        </div>
    </div>
  )
}

export default State