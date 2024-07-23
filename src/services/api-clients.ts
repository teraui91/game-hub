import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "091f581e50ae4162888e6eddb6cbc712"
  }
})

