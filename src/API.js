// Define the URLs for our different routes
const baseURL = "http://localhost:3001"
const signInURL = `${baseURL}/sign-in`
const signUpURL = `${baseURL}/sign-up`
const validateURL = `${baseURL}/validate`
const createTournamentURL = `${baseURL}/create-tournament`
const createSeasonURL = `${baseURL}/create-season/`
const createMatchURL =  `${baseURL}/create-match/`
const createTeamURL =  `${baseURL}/create-team/`
const getTournamentsURL = `${baseURL}/get-tournaments/`
const getOneTournamentURL = `${baseURL}/get-tournament/`
const getMatchURL = `${baseURL}/get-match/`
const getSeasonURL = `${baseURL}/get-season/`
const getTeamURL = `${baseURL}/get-team/`

const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(url, configurationObject)
}

const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url)
}

const getData = (url, id) => {
  return fetch(url + id)
}

const validate = token => {
  return get(validateURL, token).then(response => response.json())
}

const signIn = data => {
  return post(signInURL, data).then(response => response.json())
}

const signUp = data => {
return post(signUpURL, data).then(response => response.json())
}

const createTournament = data => {
  return post(createTournamentURL, data).then(response => response.json())
}

const createSeason = data => {
  return post(createSeasonURL, data).then(response => response.json())
}

const createMatch = data => {
  return post(createMatchURL, data).then(response => response.json())
}

const createTeam = data => {
  return post(createTeamURL, data).then(response => response.json())
}

const getTournaments = id => {
  return getData(getTournamentsURL, id).then(response => response.json())
}
const getTournament = id => {
  return getData(getOneTournamentURL, id).then(response => response.json())
}

const getSeason = id => {
  return getData(getSeasonURL, id).then(response => response.json())
}

const getMatch = id => {
  return getData(getMatchURL, id).then(response => response.json())
}

const getTeam = id => {
  return getData(getTeamURL, id).then(response => response.json())
}


export default { getTournament, signIn, validate, signUp, createSeason, createTournament, createMatch, createTeam, getTournaments, getSeason, getMatch, getTeam }