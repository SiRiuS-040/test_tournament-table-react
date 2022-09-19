export interface IStartMatch {
    'teams': [
        {
            id: number
            name: string
        },
        {
            id: number
            name: string
        },
    ]
    'side': string
    'data-match': number
    'data-round': number
}

export interface ITableMatch {
    match: number
    round: number
    'data-team': [
        number,
        number
    ]
}