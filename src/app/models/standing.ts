export interface Standing<T> {
    away: {
        win: T,
        loss: T
    },
    conference: {
        loss: T,
        name: T,
        rank: T,
        win: T,
    },
    division: {
        GamesBehind: T,
        loss: T,
        name: T,
        rank: T,
        win: T
    },
    gamesBehind: T,
    home: {
        loss: T,
        win: T
    },
    lastTenLoss: T,
    lastTenWin: T,
    leage: T,
    loss: T,
    lossPercentage: T,
    seasonYear: T,
    streak: T,
    teamId: T,
    tieBreakerPoints: T,
    win: T,
    winPercentage: T,
    winStreak: T
}

export interface Standings {
    eastStandings: Standing<string>[],
    westStandings: Standing<string>[]
}