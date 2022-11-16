import React from 'react'
import "./State.css"


const State= () => {
  return (
  <>
 <div class="skills">Github Statistics</div>
    <div class="mystats">
        <div>
            <img src="https://github-readme-stats.vercel.app/api?username=AbiramiRajasekar&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=true" alt="AbiramiRajasekar"/>
        </div>
        <div>
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=AbiramiRajasekar&theme=tokyonight&hide_border=false" alt="AbiramiRajasekar"/>
        </div>
        <div>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AbiramiRajasekar&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=true&layout=compact" alt="AbiramiRajasekar"/>
        </div>
    </div>
    </>
  )
}

export default State