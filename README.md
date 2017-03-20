# kicker-startplatz

IOT für Fortgeschrittene!

In diesem unglaublich smarten Projekt lernt der Kicker des Startplatz Köln twittern.

Funktioenen 


## Calliope Editor:

Hex-files können unter http://pxt.calliope.cc/index.html geöffnet werden.  

## Calliope Protokoll:

Gesendet wird unter Channel 6.

Nachrichtenschema: `kicker=<integer>`  

Kicker sendet:  
1:  Jemand kickert  
2:  Jemand sucht Mitspieler (Button A)  
3:  Jemand will ein Turnier starten (Button B)  
  
Kicker empfängt:  
5:  Tweet zur Mitspielersuche ist draußen  
6:  Tweet zur Turnierorgranisation ist draußen  

## Twitter

Der Account @sp_kicker veröffentlicht regelmäßig den aktuellen Kickerstatus.  
