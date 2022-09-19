import React, { useState, useEffect } from 'react';
import { IStartMatch } from '../models';
import { MatchButton } from "./PlayMatchButton";

interface StartMatchProps {
    startmatch: IStartMatch
}

export function StartMatch({ startmatch }: StartMatchProps) {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState('')

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            // setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)

        console.log(objectUrl);

        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])

        let parentTeam = e.target.closest('.tournament__team')
        console.log(parentTeam);

        console.log(preview);


        // parentTeam.style.backgroundImage = {
        //     backgroundImage: `url(${preview})`
        // }

    }




    return (
        <ul className="tournament__matchup" data-match={startmatch['data-match']} data-round={startmatch['data-round']}>
            <li className="tournament__team ready" data-team={startmatch.teams[0].id}>
                <input type="text" className="tournament__team-input" defaultValue={startmatch.teams[0].name} data-default={startmatch.teams[0].name} />
                <span className="tournament__team-name">{startmatch.teams[0].name}</span>
                <span className="tournament__team-score"></span>
                <label className="tournament__team-logo-label">
                    <input type="file" className="tournament__team-logo-input" accept=".jpg,.jpeg,.png,.svg" onChange={onSelectFile} />
                </label>
            </li>

            <MatchButton />

            <li className="tournament__team ready" data-team={startmatch.teams[1].id} >
                <input type="text" className="tournament__team-input" defaultValue={startmatch.teams[1].name} data-default={startmatch.teams[1].name} />
                <span className="tournament__team-name">{startmatch.teams[1].name}</span>
                <span className="tournament__team-score"></span>
                <label className="tournament__team-logo-label">
                    <input type="file" className="tournament__team-logo-input" accept=".jpg,.jpeg,.png,.svg" onChange={onSelectFile} />
                </label>
            </li>
        </ul>
    )
}
