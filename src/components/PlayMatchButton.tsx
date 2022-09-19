import React from 'react';

import { TEAM_DATA, MAX_GAME_SCORE, MAX_TEAM_NAME } from '../data/options';

export function MatchButton(props: any) {

    // console.log('кнопка матч');

    function CheckTeams() {

        // console.log(evt);



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

    CheckTeams()

    function ClickMe(evt: any) {
        console.log('клик на маатч');

        let targetButton = evt.target
        console.log(targetButton);


        // console.log('прошел клик');
        // let target = evt.target


        // let parent = target.closest('.tournament__matchup');
        // let teamArr = parent.querySelectorAll('.tournament__team')

        // console.log(teamArr);

        // function getScore() {
        //     teamArr.forEach(function (team: any) {
        //         let teamScore = team.querySelector('.tournament__team-score')
        //         teamScore.textContent = getRandomInt(0, MAX_GAME_SCORE)
        //         team.classList.add('battle')
        //     });
        //     let firstTeamScore = teamArr[0].querySelector('.tournament__team-score').textContent;
        //     let SecondTeamScore = teamArr[1].querySelector('.tournament__team-score').textContent;
        //     if (firstTeamScore === SecondTeamScore) {
        //         console.log('счет одинаковый');
        //         setTimeout(() => {
        //             teamArr.forEach(function (team: any) {
        //                 team.classList.remove('battle')
        //             });
        //         }, 300);
        //     } else if (firstTeamScore > SecondTeamScore) {
        //         teamArr[0].classList.add('winner')
        //         teamArr[1].classList.remove('ready')
        //         teamArr[0].classList.remove('ready')
        //         teamArr[1].classList.add('looser')
        //         target.classList.add('hidden')
        //     } else {
        //         teamArr[1].classList.add('winner')
        //         teamArr[1].classList.remove('ready')
        //         teamArr[0].classList.remove('ready')
        //         teamArr[0].classList.add('looser')
        //         target.classList.add('hidden')
        //     }
        // }


        // function getRandomInt(min: any, max: any) {
        //     min = Math.ceil(min);
        //     max = Math.floor(max);
        //     return Math.floor(Math.random() * (max - min)) + min;
        // }


        // function startMatch() {
        //     if (teamArr[0].classList.contains('ready') && teamArr[1].classList.contains('ready')) {
        //         getScore()
        //         // mooveWinner()
        //         // unblockMatchButton()
        //         // showChampion()
        //     } else {
        //     }
        // }
        // startMatch();
    }

    // function PlayMatch(evt: { target: any; }) {
    //     let target = evt.target
    //     let parent = target.closest('.tournament__matchup');
    //     let teamArr = parent.querySelectorAll('.tournament__team')

    //     function getScore() {
    //         teamArr.forEach(function (team: any) {
    //             let teamScore = team.querySelector('.tournament__team-score')
    //             teamScore.textContent = getRandomInt(0, MAX_GAME_SCORE)
    //             team.classList.add('battle')
    //         });
    //         let firstTeamScore = teamArr[0].querySelector('.tournament__team-score').textContent;
    //         let SecondTeamScore = teamArr[1].querySelector('.tournament__team-score').textContent;
    //         if (firstTeamScore === SecondTeamScore) {
    //             console.log('счет одинаковый');
    //             setTimeout(() => {
    //                 teamArr.forEach(function (team: any) {
    //                     team.classList.remove('battle')
    //                 });
    //             }, 300);
    //         } else if (firstTeamScore > SecondTeamScore) {
    //             teamArr[0].classList.add('winner')
    //             teamArr[1].classList.remove('ready')
    //             teamArr[0].classList.remove('ready')
    //             teamArr[1].classList.add('looser')
    //             target.classList.add('hidden')
    //         } else {
    //             teamArr[1].classList.add('winner')
    //             teamArr[1].classList.remove('ready')
    //             teamArr[0].classList.remove('ready')
    //             teamArr[0].classList.add('looser')
    //             target.classList.add('hidden')
    //         }
    //     }

    //     function getRandomInt(min: any, max: any) {
    //         min = Math.ceil(min);
    //         max = Math.floor(max);
    //         return Math.floor(Math.random() * (max - min)) + min;
    //     }

    //     // function mooveWinner() {
    //     //     let currentMatch = Number(parent.getAttribute('data-match'))
    //     //     let currentRound = Number(parent.getAttribute('data-round'))
    //     //     teamArr.forEach(function (team: any) {
    //     //         if (team.classList.contains('winner')) {
    //     //             let findTeamArr = document.querySelectorAll('.tournament__team');
    //     //             findTeamArr.forEach(findTeemm => {
    //     //                 let findTeamID = findTeemm.getAttribute('data-team');
    //     //                 let findMatch = findTeemm.closest('.tournament__matchup');

    //     //                 let findMatchRound = findMatch.getAttribute('data-round');
    //     //                 let findTeamName = findTeemm.querySelector('.tournament__team-name');
    //     //                 let setTeamName = team.querySelector('.tournament__team-name').textContent;
    //     //                 if (currentMatch == findTeamID && ((currentRound) + 1 == findMatchRound)) {
    //     //                     findTeemm.style = team.getAttribute('style');
    //     //                     findTeamName.textContent = setTeamName;
    //     //                     findTeemm.classList.remove('not-ready')
    //     //                     findTeemm.classList.add('ready')
    //     //                 }
    //     //             });
    //     //         }
    //     //     });
    //     // }

    //     // function unblockMatchButton() {
    //     //     allMatchArr.forEach(match => {
    //     //         let teamArr = match.querySelectorAll('.tournament__team')
    //     //         let battleButton = match.querySelector('.tournament__button-play-match')
    //     //         let readyCounter = 0;
    //     //         teamArr.forEach(team => {
    //     //             if (team.classList.contains('ready')) {
    //     //                 readyCounter++
    //     //             }
    //     //             if (team.classList.contains('winner')) {
    //     //                 battleButton.classList.add('hidden')
    //     //             }
    //     //         });
    //     //         if (readyCounter == 2) {
    //     //             battleButton.classList.remove('hidden')
    //     //         }
    //     //     });
    //     // }
    //     // function showChampion() {
    //     //     teamArr.forEach(team => {
    //     //         let mmatchRound = team.closest('.tournament__round')
    //     //         if (team.classList.contains('winner') && mmatchRound.classList.contains('final')) {
    //     //             team.classList.add('champion')
    //     //             let parentWrapper = team.closest('.final')
    //     //             let championWrapperLogo = parentWrapper.querySelector('.tournament__winner-logo')
    //     //             let championWrapperName = parentWrapper.querySelector('.tournament__winner-name')
    //     //             let teamName = team.querySelector('.tournament__team-name').textContent
    //     //             championWrapperName.textContent = teamName;
    //     //             championWrapperLogo.style = team.getAttribute('style');
    //     //             parentWrapper.classList.add('show-champion')
    //     //         }
    //     //     });
    //     // }

    //     function startMatch() {
    //         if (teamArr[0].classList.contains('ready') && teamArr[1].classList.contains('ready')) {
    //             getScore()
    //             // mooveWinner()
    //             // unblockMatchButton()
    //             // showChampion()
    //         } else {
    //         }
    //     }
    //     startMatch();
    // }

    return (
        <li className="tournament__button-wrapper">
            <button className="tournament__button-play-match"

                onClick={ClickMe}

            ></button>
        </li >
    )
}