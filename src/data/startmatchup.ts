import { IStartMatch } from "../models";
import { ITableMatch } from "../models";

export const startmatchdata: IStartMatch[] = [

    {
        'teams': [
            {
                id: 1,
                name: 'Команда 1'
            },
            {
                id: 2,
                name: 'Команда 2'
            },
        ],
        'side': 'west-side',
        'data-match': 1,
        'data-round': 1,
    },
    {
        'teams': [
            {
                id: 3,
                name: 'Команда 3'
            },
            {
                id: 4,
                name: 'Команда 4'
            },
        ],
        'side': 'west-side',
        'data-match': 2,
        'data-round': 1,
    },
    {
        'teams': [
            {
                id: 5,
                name: 'Команда 5'
            },
            {
                id: 6,
                name: 'Команда 6'
            },
        ],
        'side': 'west-side',
        'data-match': 3,
        'data-round': 1,
    },
    {
        'teams': [
            {
                id: 7,
                name: 'Команда 7'
            },
            {
                id: 8,
                name: 'Команда 8'
            },
        ],
        'side': 'west-side',
        'data-match': 4,
        'data-round': 1,
    },

    {
        'teams': [
            {
                id: 9,
                name: 'Команда 9'
            },
            {
                id: 10,
                name: 'Команда 10'
            },
        ],
        'side': 'east-side',
        'data-match': 1,
        'data-round': 1,
    },
    {
        'teams': [
            {
                id: 11,
                name: 'Команда 11'
            },
            {
                id: 12,
                name: 'Команда 12'
            },
        ],
        'side': 'east-side',
        'data-match': 2,
        'data-round': 1,
    },
    {
        'teams': [
            {
                id: 13,
                name: 'Команда 13'
            },
            {
                id: 14,
                name: 'Команда 14'
            },
        ],
        'side': 'east-side',
        'data-match': 3,
        'data-round': 1,
    },
    {
        'teams': [
            {
                id: 15,
                name: 'Команда 15'
            },
            {
                id: 16,
                name: 'Команда 16'
            },
        ],
        'side': 'east-side',
        'data-match': 4,
        'data-round': 1,
    },
]

export const tablematchdata: ITableMatch[] = [

    {
        match: 1,
        round: 2,
        'data-team': [
            1,
            2]
    },
    {
        match: 2,
        round: 2,
        'data-team': [
            3,
            4]
    },
    {
        match: 3,
        round: 2,
        'data-team': [
            5,
            6]
    },
    {
        match: 4,
        round: 2,
        'data-team': [
            7,
            8]
    },
    {
        match: 1,
        round: 3,
        'data-team': [
            1,
            2]
    },
    {
        match: 2,
        round: 3,
        'data-team': [
            3,
            4]
    },
    {
        match: 1,
        round: 4,
        'data-team': [
            1,
            2]
    },
]