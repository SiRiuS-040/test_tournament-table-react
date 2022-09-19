import React from 'react';
import { ITableMatch } from '../models';

import { MatchButton } from "./PlayMatchButton";

interface TableMatchProps {
    tablematch: ITableMatch
}

export function TableMatch({ tablematch }: TableMatchProps) {
    function CheckTeams(evt: any) {

        let targetMatch = evt.target
        console.log(targetMatch);


        // console.log('проверка на готовность к игре');



        // let teamMatchupArr = document.querySelectorAll('.tournament__matchup')
        // teamMatchupArr.forEach(matchUp => {
        //     let buttonMatch = matchUp.querySelector('.tournament__button-play-match')
        //     let teamsArr = matchUp.querySelectorAll('.tournament__team')
        //     console.log(teamsArr);

        //     teamsArr.forEach(function (team) {


        //     });


        // });
    }

    // CheckTeams()

    return (
        <ul className="tournament__matchup" data-round={tablematch.round} data-match={tablematch.match}
        // onLoad={CheckTeams}
        >
            <li className="tournament__team not-ready" data-team={tablematch['data-team'][0]}>
                <span className="tournament__team-name"></span>
                <span className="tournament__team-score"></span>
            </li>

            <MatchButton />

            <li className="tournament__team not-ready" data-team={tablematch['data-team'][1]}>
                <span className="tournament__team-name"></span>
                <span className="tournament__team-score"></span>
            </li>
        </ul>
    )
}


