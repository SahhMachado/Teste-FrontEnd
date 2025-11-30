export type GithubRepo = {
  full_name       : string
  description     : string
  stargazers_count: number
  forks_count     : number
  html_url        : string
  fork            : boolean
  archived        : boolean
  mirror_url      : null
  language        : string
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
