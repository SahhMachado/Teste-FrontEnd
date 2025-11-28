import { useEffect, useState } from "react"
import type { GithubRepo } from "../types/github"
import { getRepositories, getStarredRepositories } from "../api/github"

export function useGithubRepos(username: string) {
  const [repositories, setRepositories] = useState<GithubRepo[]>([])
  const [starred, setStarred] = useState<GithubRepo[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const [repos, starredRepos] = await Promise.all([
          getRepositories(username),
          getStarredRepositories(username)
        ])

        setRepositories(repos)
        setStarred(starredRepos)

      } catch (err) {
        setError("Erro ao carregar dados")
      }
    }

    fetchRepos()
  }, [username])

  return {repositories, starred, error}
}
