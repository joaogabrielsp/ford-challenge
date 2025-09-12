export interface TestCase {
  id: string
  name: string
  description: string
  status: "pending" | "running" | "passed" | "failed"
  legacyOutput?: string
  newOutput?: string
  executionTime?: number
}

export interface Project{
    id: string
    name: string
    legacyPath?: string
    newPath?: string
    createdAt: Date
}

export type Screen = "generated-tests" | "test-results"