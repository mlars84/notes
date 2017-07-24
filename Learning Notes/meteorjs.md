# Meteor.js

- basic setup: meteor create (nameOfApp)
- cd into it
- meteor
- open localhost:3000
- touch imports/ui/body.html
- touch imports/ui/body.js
- import '../imports/ui/body.js'; in client/main.js


## Collections
- Collections are Meteor's way of storing persistent data. The special thing about collections in Meteor is that they can be accessed from both the server and the client, making it easy to write view logic without having to write a lot of server code. They also update themselves automatically, so a view component backed by a collection will automatically display the most up-to-date data.
