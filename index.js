require('dotenv').config();
const express = require('express');
const app = express();

const githubData = {
  "login": "akanxikushwaha",
  "id": 159679181,
  "node_id": "U_kgDOCYSCzQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/159679181?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/akanxikushwaha",
  "html_url": "https://github.com/akanxikushwaha",
  "followers_url": "https://api.github.com/users/akanxikushwaha/followers",
  "following_url": "https://api.github.com/users/akanxikushwaha/following{/other_user}",
  "gists_url": "https://api.github.com/users/akanxikushwaha/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/akanxikushwaha/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/akanxikushwaha/subscriptions",
  "organizations_url": "https://api.github.com/users/akanxikushwaha/orgs",
  "repos_url": "https://api.github.com/users/akanxikushwaha/repos",
  "events_url": "https://api.github.com/users/akanxikushwaha/events{/privacy}",
  "received_events_url": "https://api.github.com/users/akanxikushwaha/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Akanxi Kushwaha",
  "company": null,
  "blog": "",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "sipping coffee and debugging",
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2024-02-11T05:41:57Z",
  "updated_at": "2026-02-04T11:43:16Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/instagram',(req,res) => {
    res.send('Instagram API endpoint');
});

app.get('/login',(req,res) => {
    res.send('<h1> please login </h1>');
});

app.get('/youtube',(req,res)=>{
    res.send('Youtube API endpoint');
});

app.get('/github',(req,res)=>{
    res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`);
});