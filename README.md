# netjockey-server-node
netjockey is a clone of famous service plug.dj written from scratch. Except, you can host this one yourself!
netjockey utilizes strict separation of client side and server side.
Server is there only to provide RESTful API for clients to connect to. 
Clients play music from YouTube and handle user interface.

This netjockey server is written in node.js using coffeescript.
To configure the server, you can use files in `app/config/settings directory`.

Are you looking for a client? Here's a link to our official HTML client: https://github.com/jas-bar/netjockey-client-html

netjockey-server-node project is under MIT license. See LICENSE for more information

# How to setup

```sh
git clone https://github.com/jas-bar/netjockey-server-node/
cd netjockey-server-node
npm install
npm run-script build
npm start
```
