const http = require('http');
const url = require('url');
const fs = require('fs');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const express = require('express');
const path = require('path');
const app = express();

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

app.use(express.static(path.join(__dirname, 'html')));
app.get('./', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'main.html'));
});
app.get('./html/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'about.html'));
});
app.listen(5000, () => {
  console.log('Express App on port 5000!');
});
app.use((req, res, next) => {
  console.log('안녕!');
  next();
})
