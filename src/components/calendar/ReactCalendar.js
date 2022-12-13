// https://www.section.io/engineering-education/build-react-calendar-library/

import React, {useState} from 'react';
// import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './ReactCalendar.css';

const ReactCalendar = () => {

    const [date, setDate] = useState(new Date())

  return (
    <div className='react-calender'>
        <div className="calendar-container">
            <Calendar onChange={setDate} value={date}/>
        </div>
        <div className="text-center">
            Selected date: {date.toDateString()}
        </div>
    </div>
  )
}

export default ReactCalendar