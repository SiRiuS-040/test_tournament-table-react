import React, { useState, useEffect } from 'react';
import { IStartMatch } from '../models';
import { MatchButton } from "./PlayMatchButton";

interface StartMatchProps {
    startmatch: IStartMatch
}

export function StartMatch({ startmatch }: StartMatchProps) {

    const [selectedFile, setSelectedFile] = useState()
    // const [preview, setPreview] = useState('')

    // // create a preview as a side effect, whenever selected file is changed
    // useEffect(() => {
    //     if (!selectedFile) {
    //         // setPreview(undefined)
    //         return
    //     }
    //     const objectUrl = URL.createObjectURL(selectedFile)
    //     // console.log(objectUrl);
    //     setPreview(objectUrl)
    //     // free memory when ever this component is unmounted
    //     return () => URL.revokeObjectURL(objectUrl)
    // }, [selectedFile])


    function setLogo(evt: any) {
        const onSelectFile = (evt: any) => {
            if (!evt.target.files || evt.target.files.length === 0) {
                setSelectedFile(undefined)
                return
            }
            setSelectedFile(evt.target.files[0])
            const objectUrl = URL.createObjectURL(evt.target.files[0])
            let parentTeam = evt.target.closest('.tournament__team')
            parentTeam.style.backgroundImage = `url(${objectUrl})`

        }

        onSelectFile(evt)
    }

    function CheckTeams() {
        // console.log('проверка');
        let matchArr = document.querySelectorAll('.tournament__matchup')
        // console.log(matchArr);

        matchArr.forEach(match => {
            let teamArr = match.querySelectorAll('.tournament__team')
            let matchButton = match.querySelector('.tournament__button-play-match')

            // matchButton.classList.add('hidden')

            // console.log(matchButton);
            // console.log(teamArr);

            // console.log(teamArr[0].classList.contains('ready'));


            if (teamArr[0].classList.contains('ready') === teamArr[1].classList.contains('ready')) {
                // matchButton.classList.remove('hidden')
            } else {
                // matchButton.classList.add('hidden')
            }
        });
    }

    CheckTeams()

    return (
        <ul className="tournament__matchup" data-match={startmatch['data-match']} data-round={startmatch['data-round']} >
            <li className="tournament__team ready" data-team={startmatch.teams[0].id} style={{ backgroundImage: `url(${startmatch.teams[0].logo})` }}>
                <input type="text" className="tournament__team-input" defaultValue={startmatch.teams[0].name} data-default={startmatch.teams[0].name} />
                <span className="tournament__team-name">{startmatch.teams[0].name}</span>
                <span className="tournament__team-score"></span>
                <label className="tournament__team-logo-label">
                    <input type="file" className="tournament__team-logo-input" accept=".jpg,.jpeg,.png,.svg" onChange={setLogo} />
                </label>
            </li>

            <MatchButton />

            <li className="tournament__team ready" data-team={startmatch.teams[1].id} style={{ backgroundImage: `url(${startmatch.teams[0].logo})` }}>
                <input type="text" className="tournament__team-input" defaultValue={startmatch.teams[1].name} data-default={startmatch.teams[1].name} />
                <span className="tournament__team-name">{startmatch.teams[1].name}</span>
                <span className="tournament__team-score"></span>
                <label className="tournament__team-logo-label">
                    <input type="file" className="tournament__team-logo-input" accept=".jpg,.jpeg,.png,.svg" onChange={setLogo} />
                </label>
            </li>
        </ul>
    )
}
