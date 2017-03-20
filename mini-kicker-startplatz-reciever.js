let timer = 0
let kick_change = 0
let value = 0
basic.forever(() => {
    while (timer > 0) {
        basic.pause(1000)
        timer += -1000
        if (timer <= 0) {
            basic.setLedColor(Colors.Green)
            basic.showLeds(`
                # # # . .
                # . . . .
                # # # . .
                # . . . .
                # . . . .
                `)
            if (kick_change == 1 && value == 0) {
                serial.writeLine("Frei")
                kick_change = 0
            }
        } else {
            basic.setLedColor(Colors.Red)
        }
    }
})
input.onButtonPressed(Button.B, () => {
    basic.clearScreen()
    basic.setLedColor(Colors.Yellow)
})
input.onButtonPressed(Button.A, () => {
    basic.showNumber(5)
    basic.setLedColor(Colors.Blue)
})
radio.onDataPacketReceived(({receivedString: kicker, receivedNumber: value}) => {
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
    if (value == 1) {
        if (kick_change == 0) {
            kick_change = 1
        }
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        timer = 30000
        basic.setLedColor(Colors.Red)
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        if (kick_change == 1 && value == 1) {
            serial.writeLine("besetzt")
            kick_change = 0
        }
    }
    if (value == 2) {
        if (kick_change == 0) {
            kick_change = 1
        }
        radio.sendValue("kicker", 5)
        music.playTone(Note.C, music.beat(BeatFraction.Half))
        basic.showString("SPIELER GESUCHT")
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
        if (kick_change == 1 && value == 2) {
            serial.writeLine("gesucht")
            kick_change = 0
        }
    }
    if (value == 3) {
        if (kick_change == 0) {
            kick_change = 1
        }
        radio.sendValue("kicker", 6)
        music.playTone(Note.C, music.beat(BeatFraction.Quarter))
        basic.showString("Turnament")
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
serial.redirect(
    SerialPin.C16,
    SerialPin.C17,
    BaudRate.BaudRate9600
)
kick_change = 0
radio.setGroup(6)
timer = 0
music.playTone(Note.B, music.beat(BeatFraction.Eighth))
