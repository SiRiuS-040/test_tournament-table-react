import React, { useState } from 'react';

import { TEAM_DATA, MAX_GAME_SCORE, MAX_TEAM_NAME } from '../data/options';

export function MatchButton(props: any) {

    const [match, setMatch] = useState(false)
    const btnMatchClassName = match ? 'hidden' : ''
    const btnClasses = ['tournament__button-play-match', btnMatchClassName]



    function CheckTeams() {
        let buttonArr = document.querySelectorAll('.tournament__button-play-match')

        buttonArr.forEach(button => {
            let parentMatch = button.closest('.tournament__matchup')
            let parentTeamArr = parentMatch?.querySelectorAll('.tournament__team')
            // if (parentTeamArr[0].classList.contains('.'))
        });
    }

    // CheckTeams()



    function ClickMe(evt: any) {
        console.log('клик на матч');
        let targetButton = evt.target
        console.log(targetButton);
        let parentMatch = targetButton.closest('.tournament__matchup')
        // console.log(parentMatch);

        let teamArr = parentMatch.querySelectorAll('.tournament__team')

        teamArr.forEach(function (team: any) {
            // console.log(team);
            let teamScore = team.querySelector('.tournament__team-score')
            teamScore.textContent = getRandomInt(0, MAX_GAME_SCORE)
        });

        let firstTeamScore = teamArr[0].querySelector('.tournament__team-score').textContent;
        let SecondTeamScore = teamArr[1].querySelector('.tournament__team-score').textContent;

        if (firstTeamScore === SecondTeamScore) {
            setTimeout(() => {
                teamArr.forEach(function (team: any) {
                    team.classList.remove('battle')
                });
            }, 300);
        } else if (firstTeamScore > SecondTeamScore) {
            teamArr[0].classList.add('winner')
            teamArr[1].classList.remove('ready')
            teamArr[0].classList.remove('ready')
            teamArr[1].classList.add('looser')
            setMatch(prev => !prev)
        } else {
            teamArr[1].classList.add('winner')
            teamArr[1].classList.remove('ready')
            teamArr[0].classList.remove('ready')
            teamArr[0].classList.add('looser')
            setMatch(prev => !prev)
        }

        function getRandomInt(min: any, max: any) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        }

        function mooveWinner() {
            let currentMatch = parentMatch.getAttribute('data-match')
            let currentRound = parentMatch.getAttribute('data-round')

            console.log(currentMatch);
            console.log(currentRound);

            console.log(teamArr);


            teamArr.forEach(function (team: any) {

                console.log(team);


                if (team.classList.contains('winner')) {
                    let findTeamArr = document.querySelectorAll('.tournament__team');

                    console.log(findTeamArr);


                    findTeamArr.forEach(function (findTeemm: any) {
                        let findTeamID = findTeemm.getAttribute('data-team');
                        let findMatch = findTeemm.closest('.tournament__matchup');
                        let findMatchRound = findMatch.getAttribute('data-round');
                        let findTeamName = findTeemm.querySelector('.tournament__team-name');


                        let setTeamName = team.querySelector('.tournament__team-name').textContent;
                        if (currentMatch === findTeamID && (Number(currentRound) + 1 == findMatchRound)) {
                            findTeemm.style = team.getAttribute('style');
                            findTeamName.textContent = setTeamName;
                            findTeemm.classList.remove('not-ready')
                            findTeemm.classList.add('ready')
                        }
                    });
                }
            });
        }

        function startMatch() {
            if (teamArr[0].classList.contains('ready') && teamArr[1].classList.contains('ready')) {
                // getScore()
                mooveWinner()
                // unblockMatchButton()
                // showChampion()
            } else {
            }
        }
        startMatch();


        // setMatch(prev => !prev)
    }



    return (
        <li className="tournament__button-wrapper">
            <button className={btnClasses.join(' ')}
                onClick={ClickMe}
            ></button>
        </li >
    )
}