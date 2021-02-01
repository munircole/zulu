export class Team {
   id: number
   teamName: string
}

export class TeamMember {
   id: number
   team_id: number
   user_id: number
   user_role: string
}
