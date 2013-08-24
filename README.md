stash-component-server
======================

Use Stash as a remote for Component

## Usage

First change the URL variable to point to your internal Stash site:

    var url = "http://stash-server:7990";
  
Install the depenedencies:

    npm install

Then run the server 

    npm start

This will spin up a server that will redirect URLs in Github-style
to Stash-style, allowing the use of Stash as a remote for private
Component packages.
