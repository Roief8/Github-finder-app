import axios from "axios"

const GithubURL = process.env.REACT_APP_GITHUB_URL
const GithubToken = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GithubURL,
  headers: { Authorization: `token ${GithubToken}` },
})

// get search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })
  const response = await github.get(`/search/users?${params}`)

  return response.data.items
}

// get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?sort=created`),
  ])

  return { user: user.data, repos: repos.data }
}
