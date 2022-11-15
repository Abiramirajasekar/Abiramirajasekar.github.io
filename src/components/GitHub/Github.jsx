import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "./GitHub.css";



const GitHub = () => {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>DAYS I CODE</h2>
      <div className='github_Calender'>

        <GitHubCalendar style={{ margin: "auto" }}
          username='Abiramirajasekar'


          transformData={selectLastHalfYear}
          hideColorLegend
        />
      </div>
     

    </div>


  )
}



export default GitHub