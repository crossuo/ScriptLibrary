/*+++
author = "Vlek"
discord = "Vlek#9397"
oaversion = "2.0.16.4"
title = "Heal Self"
description = """
Simple heal self macro. If you don't need to be healed, it won't do it.
You do have to self-manage the timing as there is no global timer set
for the healing delay since I would have to know specifically how
each server handles the calculation of the heal delay.

If you like this script, please consider donating to OrionUO's dev team!
"""
version = "1.0.0"
categories = ["pvp","pvm"]
+++*/

if (Player.Hits() !== Player.MaxHits() || Player.Poisoned()) {
    var bandages = Orion.FindType(0x0E21, 0xFFFF, 'backpack', 'fast');
    if (bandages.length !== 0) {
        Orion.UseObject(bandages[0]);
        Orion.WaitForTarget(15000);
        Orion.TargetObject(Player.Serial());
        Orion.Print("Healing!");
    } else {
        Orion.Print(0x34, "No more bandages!");
    }
} else {
    Orion.Print("You do not need to be healed right now!");
}
