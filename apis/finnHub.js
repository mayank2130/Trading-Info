import axios from "axios"

const TOKEN = "ch0eu21r01qoe1m33g4gch0eu21r01qoe1m33g50"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})