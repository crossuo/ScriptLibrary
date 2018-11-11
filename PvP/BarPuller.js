// -- Orion Assistant Snippet
// ++ Author: Deuce
// ++ Discord Tag: Deuce#3277
// ++ Purpose: This Snippet will pull the bars of your enemies and stack them in the window.
// ++ Shard: UOForever
// ++ Config: Line 19 needs to be adjusted for your screen. 1185, 680 is the bottom right
//            corner of my view window.

function BarPuller(){
var noto = Player.Notoriety();
Orion.Ignore(self, true);
 if(noto == 6){
            var serial = Orion.FindType('0xFFFF', '0xFFFF', ground, 'mobile|ignorefriends|human ', '20', 'blue|orange|red|gray|criminal');
    } else {
            var serial = Orion.FindType('0xFFFF', '0xFFFF', ground, 'mobile|ignorefriends|human ', '20', 'orange|red|gray|criminal');
    }

        for (var i = 0; i < serial.length; ++i) {
            if (i >= 10) break;
            Orion.ShowStatusbar(serial[i], 1185, 680-(60*i));
            Orion.Print(serial[i]);
            Orion.Wait(100);
        }
    Orion.Ignore(self, false);
}
