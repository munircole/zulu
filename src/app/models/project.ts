export class Project{
    id: number
    user_id: number
    team_id: number
    projectName: string
    requirements: string
    client: string
    priority: string
    project_type: string
    start_date: Date
    end_sate: Date
    createdAt: Date
    updatedAt: Date
}

export class Task{
    id: number
    project_id: number
    taskname: string
    priority: string
    description: string
    start_date: Date
    end_date: number
    assigned_to: number
    createdAt: Date
    updatedAt: Date

}