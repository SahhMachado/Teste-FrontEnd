import { useQuery } from "@tanstack/react-query"
import type { GithubPerfil } from "../types/github"
import { getInfoPerfilUsuario } from "../api/github"

export function useGithubProfile(username: string) {
  return useQuery<GithubPerfil>({
    queryKey: ["github-profile", username],
    queryFn: () => getInfoPerfilUsuario(username),
    staleTime: 1000 * 60 * 5
  })
}