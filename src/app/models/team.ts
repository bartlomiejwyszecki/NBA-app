export interface Team {
    city: string,
    fullName: string,
    logo: string,
    shortName: string,
    leagues: {
        standard: {
            confName: string,
            divName: string
        }
    }
}