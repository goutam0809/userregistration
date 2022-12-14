/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// const msal = require('@azure/msal-node');

// const SERVER_PORT = process.env.PORT || 3001;
// const REDIRECT_URI = "http://localhost:3001/redirect";

// // Before running the sample, you will need to replace the values in the config,
// // including the clientSecret
// const config = {
//     auth: {
//         clientId: "9845c026-0e66-4ea8-a9da-be4b933c4fda",
//         authority: "https://login.microsoftonline.com/477ca565-f827-4d31-af4f-a253d05d6387",
//         clientSecret: "KlM8Q~6eXt55eyFfwZpX05MbrYSpRazEULZoTcV_"
//     },
//     system: {
//         loggerOptions: {
//             loggerCallback(loglevel, message, containsPii) {
//                 console.log(message);
//             },
//             piiLoggingEnabled: false,
//             logLevel: msal.LogLevel.Verbose,
//         }
//     }
// };

// // Create msal application object
// const pca = new msal.ConfidentialClientApplication(config);

// // Create Express App and Routes

// app.get('/', (req, res) => {
//     const authCodeUrlParameters = {
//         scopes: ["user.read"],
//         redirectUri: REDIRECT_URI,
//     };

//     // get url to sign user in and consent to scopes needed for application
//     pca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
//         res.redirect(response);
//     }).catch((error) => console.log(JSON.stringify(error)));
// });

// app.get('/redirect', (req, res) => {
//     const tokenRequest = {
//         code: req.query.code,
//         scopes: ["user.read"],
//         redirectUri: REDIRECT_URI,
//     };

//     pca.acquireTokenByCode(tokenRequest).then((response) => {
//         console.log("\nResponse: \n:", response);
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log(error);
//         res.status(500).send(error);
//     });
// });
const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
const user = require("./server/serverController/userController");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const SERVER_PORT = process.env.PORT || 3001;

app.post("/registerUser", (req, res) => {
  user.registerUser(req, res);
});
app.get("/loginUser", (req, res) => {
  user.loginuser(req, res);
});
app.listen(SERVER_PORT);
