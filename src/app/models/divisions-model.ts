export interface Team {
  allStar: string,
  city: string,
  fullName: string,
  leagues: {
    standard: {
      confName: string,
      divName: string
    }
  },
  logo: string,
  nbaFranchise: string,
  nickname: string,
  shortName: string,
  teamId: string
}

export interface Division {
  name: string,
  teams: Team[]
}
