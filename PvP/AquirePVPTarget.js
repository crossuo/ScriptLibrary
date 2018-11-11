// -- Orion Assistant Snippet
// ++ Author: Deuce
// ++ Discord Tag: Deuce#3277
// ++ Purpose: This snippet will target the closest PVP target. 
//             The script will include innocent targets if the character is a murderer.
// ++ Shard: UOForever
// ++ Config: None

function PvPSelect() {
    var noto = Player.Notoriety();
    Orion.Ignore(self, true);       
    if(noto == 6){
        var players = Orion.FindType('0x0190|0x0191|0x00B6|0x00B7|0x00B8|0x00B9|0x00BA', '0xFFFF', ground, 'near|mobile|ignorefriends ', '25', 'blue|criminal|red|gray|orange');
    } else {
        var players = Orion.FindType('0x0190|0x0191|0x00B6|0x00B7|0x00B8|0x00B9|0x00BA', '0xFFFF', ground, 'near|mobile|ignorefriends ', '25', 'criminal|red|gray|orange');
    }
    if (players.length){
        var obj = Orion.FindObject(players[0]);
        if (obj) Orion.CharPrint(players[0], '30', '*' + obj.Name() + '*');
        Orion.Wait(100);
        Orion.ClientLastTarget(obj.Serial());
        }
    Orion.Ignore(self, false);        
}
