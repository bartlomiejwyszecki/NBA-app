export interface Player<T> {
    firstName: T,
    lastName: T,
    teamId: T,
    yearsPro: T,
    collegeName: T,
    country: T,
    playerId: T,
    dateOfBirth: T,
    affiliation: T,
    startNba: T,
    heightInMeters: T,
    weightInKilograms: T,
    leagues: {
        standard: {
            jersey: T,
            active: T,
            pos: T
        }
    }
}