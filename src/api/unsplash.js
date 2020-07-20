import axios from 'axios'
export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID MQetklPshLZTF25x6gfDZz8QEFbhc6ZTd9r9T357qcA"
      }
})