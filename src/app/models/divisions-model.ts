export interface Teams {
  city: string,
  fullName: string,
  leagues: {
    standard: {
      confName: string,
      divName: string
    }
  },
  logo: string,
  teamId: string
}

export interface Division {
  teams: Teams[]
}

export interface Divisions {
  atlantic: Division,
  central: Division,
  southeast: Division,
  northwest: Division,
  pacific: Division,
  southwest: Division
}

export const _divisions: Divisions = {
  atlantic: {
    teams: [
      ]
  },
  central: {
    teams: []
  },
  southeast: {
    teams: []
  },
  northwest: {
    teams: []
  },
  pacific: {
    teams: []
  },
  southwest: {
    teams: []
  }
}