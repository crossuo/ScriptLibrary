
<img src="https://avatars1.githubusercontent.com/u/40122559?s=200&v=4">

## OrionUO's Orion Assistant Snippet Library

> This library is a reference wiki and a snippet repo. You will find snippets here 
for various tasks, organized in folders that categorize them. 

This library is maintained by the OrionUO organization but the work here is provided
by the community, so if you have a script that you are proud of please don't hesitate
to contribute!

## Snippet Header

The snippets all will have a header at the top. This identifies the purpose of the script,
the author, shard the script was created for, and a brief description of how to configure it.

> Example:

```javascript
/*+++
author = "Deuce"
discord = "Deuce#3277"
oaversion = "2.0.0"
title = "acquire pvp target"
description = """
This snippet will target the closest PVP target. 
The script will include innocent targets if the character is a murderer.
"""
categories = ["pvp"]
+++*/

function HelloSosaria(){
    Orion.Print("Hello Sosaria");    
}
```

## Steps to contribute

1.  Create a github account.
2.  Select the folder you want to add the script to.
3.  Click `Create new file`.    
4.  Enter a file name with the .js extension.
5.  Copy and Paste the example header, modifying it for your snippet.
6.  Create a pull request for your file.
