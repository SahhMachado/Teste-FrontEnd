import { useEffect, useState } from "react"
import type { GithubPerfil } from "../types/github"
import { getInfoPerfilUsuario } from "../api/github"

export function useGithubProfile(username: string) {
  const [perfil, setPerfil] = useState<GithubPerfil | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPerfil() {
      try {
        const perfilData = await getInfoPerfilUsuario(username)
        setPerfil(perfilData)
      } catch {
        setError("Erro ao carregar perfil")
      }
    }

    fetchPerfil()
  }, [username])

  return { perfil, error }
}
