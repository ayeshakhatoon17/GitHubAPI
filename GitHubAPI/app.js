import readline from "readline-sync";
import axios from "axios";
import color from "cli-color";

console.clear()
const pink = color.xterm(212)
const peach =  color.xterm(224)
const blue = color.xterm(153)
const lime = color.xterm(229)
const purple = color.xterm(147)

let username = readline.question(pink("Enter Github username: "));
console.log(peach("----------------------"))
axios.get(`https://api.github.com/users/${username}`)
.then((response)=>{
    let data = response.data
    console.log(lime("Name: ",data.name))
    console.log(blue("Twitter username 🐥: ",data.twitter_username))
    if (data.twitter_username == null){
        console.log(blue("Twitter account is not created yet"))
    }
   
    console.log(peach("Following: ",data.following))
    console.log(pink("Followers: ",data.followers))
    console.log(purple("Public repos URL: ",data.repos_url))
    
})
.catch((error) =>{
    console.log(error,"error")
    })