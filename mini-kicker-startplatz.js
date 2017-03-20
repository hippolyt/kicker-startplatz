let Min = 0
let Max = 0
let Accel = 0
let thresh = 0
input.onButtonPressed(Button.A, () => {
    radio.sendValue("kicker", 2)
    led.setBrightness(255)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showString("CALL PLAYERS")
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(3000)
    led.setBrightness(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, () => {
    radio.sendValue("kicker", 3)
    led.setBrightness(255)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showString("TOURNAMENT!")
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(3000)
    led.setBrightness(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.forever(() => {
    Accel = input.acceleration(Dimension.Strength) - 1000
    if (Accel > Max) {
        Max = Accel
    }
    if (Accel < Min) {
        Min = Accel
    }
    basic.pause(1)
    if (thresh < Max) {
        basic.setLedColor(Colors.Red)
        radio.sendValue("kicker", 1)
        basic.pause(3000)
        Max = 0
        basic.setLedColor(Colors.Green)
    } else {

    }
})
input.onButtonPressed(Button.AB, () => {
    led.setBrightness(255)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.showNumber(Max)
    basic.showString("POWER")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(3000)
    led.setBrightness(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
radio.onDataPacketReceived(({receivedString: kicker, receivedNumber: value}) => {
    if (value == 5) {
        basic.setLedColor(Colors.Blue)
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.pause(500)
        basic.setLedColor(Colors.Indigo)
        music.playTone(Note.D, music.beat(BeatFraction.Whole))
        basic.pause(500)
        basic.setLedColor(Colors.Violet)
        music.playTone(Note.E, music.beat(BeatFraction.Whole))
        basic.pause(500)
        basic.setLedColor(Colors.Purple)
        basic.setLedColor(Colors.Green)
    }
    if (value == 6) {
        basic.setLedColor(Colors.Orange)
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.pause(500)
        basic.setLedColor(Colors.Yellow)
        music.playTone(Note.E, music.beat(BeatFraction.Whole))
        basic.pause(500)
        basic.setLedColor(Colors.Violet)
        music.playTone(Note.G, music.beat(BeatFraction.Whole))
        basic.pause(500)
        basic.setLedColor(Colors.White)
        basic.setLedColor(Colors.Green)
    }
})
thresh = 10
radio.setTransmitPower(100000000)
radio.setGroup(6)
led.setBrightness(10)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.setLedColor(Colors.Green)

