import { useQuery } from "@tanstack/react-query"
import type { GithubRepo } from "../types/github"
import { getRepositories, getStarredRepositories } from "../api/github"

export function useGithubRepos(username: string) {
  const reposQuery = useQuery<GithubRepo[]>({
    queryKey: ["github-repositories", username],
    queryFn: () => getRepositories(username),
    staleTime: 1000 * 60 * 5
  })

  const starredQuery = useQuery<GithubRepo[]>({
    queryKey: ["github-starred", username],
    queryFn: () => getStarredRepositories(username),
    staleTime: 1000 * 60 * 5
  })

  return {
    repositories: reposQuery.data ?? [],
    starred: starredQuery.data ?? [],
    isLoading: reposQuery.isLoading || starredQuery.isLoading,
    error: reposQuery.error || starredQuery.error,
  }
}
