/*+++
author = "Vlek"
discord = "Vlek#9397"
oaversion = "2.0.16.4"
title = "Cancel All"
description = """
This is a simple script that I usually have assigned to my Esc key.
All this does is cancel all macros and also the targeting cursor if active.

Currently this is not suggested because of a memory leak associated with
Orion.Terminate!

If you like this script, please consider donating to OrionUO's dev team!
"""
version = "1.0.0"
categories = ["utility"]
+++*/

Orion.Terminate("All");
Orion.CancelTarget();
