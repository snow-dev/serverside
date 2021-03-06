import React from "react";
import { renderToString } from "react-dom/server"
import serialize from "serialize-javascript"

import express from 'express';
import cors from 'cors';

import App from "../shared/App";

const app = express();

import {fetchPopularRepos} from '../shared/api';

app.use(cors());

/*
  We're going to serve up the public
  folder since that's where our
  client bundle.js file will end up
 */
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  fetchPopularRepos().then((data) => {
    const markup = renderToString(
      <App data={data}/>
    );

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
  
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
  });
});



app.listen(3001, () => {
  console.log(`Server is listening on port: 3001`);
});
