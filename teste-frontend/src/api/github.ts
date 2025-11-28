export async function getRepositories(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  
  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios")
  }

  return response.json()
}

export async function getStarredRepositories(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/starred`)

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios favoritados")
  }

  return response.json()
}

export async function getInfoPerfilUsuario(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`)

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios favoritados")
  }

  return response.json()
}