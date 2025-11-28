export type GithubRepo = {
  full_name       : string
  description     : string
  stargazers_count: number
  forks_count     : number
}

export type GithubPerfil = {
  name       : string,
  avatar_url : string,
  bio        : string,
  blog: string
  twitter_username: string | null
  company: string | null
  location: string | null
}
