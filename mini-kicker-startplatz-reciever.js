let timer = 0
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
        } else {
            basic.setLedColor(Colors.Red)
        }
    }
})
input.onButtonPressed(Button.A, () => {
    basic.showNumber(5)
    basic.setLedColor(Colors.Blue)
})
input.onButtonPressed(Button.B, () => {
    basic.clearScreen()
    basic.setLedColor(Colors.Yellow)
})
radio.onDataPacketReceived(({receivedString: kicker, receivedNumber: value}) => {
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
    if (value == 1) {
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
    }
    if (value == 2) {
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
    }
    if (value == 3) {
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
radio.setGroup(6)
timer = 0
music.playTone(Note.B, music.beat(BeatFraction.Eighth))

