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

Now in your `component.json` you can use this server as a remote:

```
{
    "name": "dialog",
    "remotes: ["http://0.0.0.0:3000"],
    "dependencies": {
        "COMPONENT/overlay": "0.0.1",
        "COMPONENT/after": "0.0.1"
    }
}
```

The Stash project codes are used as the user name. In this case, the components are within
a project with "COMPONENT" as the code.
