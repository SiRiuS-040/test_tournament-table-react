import { log } from 'console';
import React from 'react';
// import './App.css';
import { StartMatch } from "./components/StartMatchup";
import { TableMatch } from "./components/TableMatchup";
import { startmatchdata } from './data/startmatchup'
import { tablematchdata } from './data/startmatchup'


function App() {
  console.log('Главное приложение');

  // function CheckTeams() {

  //   let matchArr = document.querySelectorAll('.tournament__matchup')
  //   console.log(matchArr);

  //   matchArr.forEach(match => {
  //     let teamArr = match.querySelectorAll('.tournament__team')
  //     let matchButton = match.querySelector('.tournament__button-play-match')

  //     // matchButton.classList.add('hidden')

  //     console.log(matchButton);
  //     // console.log(teamArr);

  //     // console.log(teamArr[0].classList.contains('ready'));


  //     if (teamArr[0].classList.contains('ready') === teamArr[1].classList.contains('ready')) {
  //       // matchButton.classList.remove('hidden')
  //     } else {
  //       // matchButton.classList.add('hidden')
  //     }


  //   });

  // }

  // CheckTeams()


  return (
    <div className='main-section tournament'>
      {/* <h1 className='visually-hidden'>Tuornament</h1>
      <h2 className='visually-hidden'>Tournament Legend</h2> */}
      <section className='tournament-section tournament__legend-table'>

        <div className='tournament__legend-round'>
          <span className='tournament__legend-desc'>Round 1</span>
        </div>
        <div className='tournament__legend-round'>
          <span className='tournament__legend-desc'>Round 2</span>
        </div>
        <div className='tournament__legend-round'>
          <span className='tournament__legend-desc'>Round 1 / 2</span>
        </div>
        <div className='tournament__legend-round'>
          <span className='tournament__legend-desc'>FINAL</span>
        </div>
        <div className='tournament__legend-round'>
          <span className='tournament__legend-desc'>Round 1 / 2</span>
        </div>
        <div className='tournament__legend-round'>
          <span className='tournament__legend-desc'>Round 2</span>
        </div>
        <div className='tournament__legend-round'>
          <span className='tournament__legend-desc'>Round 1</span>
        </div>
      </section>

      <section className='tournament-section tournament__table'>
        {/* <h2 className='visually-hidden'>Tournament Table</h2> */}
        <div className='tournament__table-wrapper tournament__round tournament__round--one west-side'>
          <StartMatch startmatch={startmatchdata[0]} />
          <StartMatch startmatch={startmatchdata[1]} />
          <StartMatch startmatch={startmatchdata[2]} />
          <StartMatch startmatch={startmatchdata[3]} />
        </div>
        <div className='tournament__table-wrapper tournament__round tournament__round--one east-side'>
          <StartMatch startmatch={startmatchdata[4]} />
          <StartMatch startmatch={startmatchdata[5]} />
          <StartMatch startmatch={startmatchdata[6]} />
          <StartMatch startmatch={startmatchdata[7]} />
        </div>

        <div className='tournament__table-wrapper tournament__round tournament__round--two west-side'>
          <TableMatch tablematch={tablematchdata[0]} />
          <TableMatch tablematch={tablematchdata[1]} />
        </div>

        <div className='tournament__table-wrapper tournament__round tournament__round--two east-side'>
          <TableMatch tablematch={tablematchdata[2]} />
          <TableMatch tablematch={tablematchdata[3]} />
        </div>

        <div className='tournament__table-wrapper tournament__round tournament__round--three west-side'>
          <TableMatch tablematch={tablematchdata[4]} />
        </div>

        <div className='tournament__table-wrapper tournament__round tournament__round--three east-side'>
          <TableMatch tablematch={tablematchdata[5]} />
        </div>

        <div className='tournament__table-wrapper tournament__round tournament__round--four final'>
          <TableMatch tablematch={tablematchdata[6]} />

          <div className='tournament__winner-wrapper'>
            <span className='tournament__winner-name'></span>
            <div className='tournament__winner-logo'></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
