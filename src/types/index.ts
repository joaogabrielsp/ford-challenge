export interface Project{
    id: string
    name: string
    legacyPath?: string
    newPath?: string
    createdAt: Date
}

export type Screen = "generated-tests" | "test-results"