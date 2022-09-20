export interface IStartMatch {
    'teams': [
        {
            id: number
            name: string
            logo: string
        },
        {
            id: number
            name: string
            logo: string
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