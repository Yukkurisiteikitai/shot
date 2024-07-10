function joea (joi: number) {
    if (joi == 1) {
        cheack = joi
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (joi == 2) {
        cheack = joi
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    if (joi == 3) {
        cheack = joi
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    swithce = 0
    while (swithce == 0) {
        for (let カウンター = 0; カウンター <= 3; カウンター++) {
            joea(カウンター)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    swithce = 1
    if (cheack == 3) {
        basic.showString("Parfect")
        Score = Score++
    }
    if (cheack == 2) {
        basic.showString("osii")
        basic.showNumber(Score)
    }
    if (cheack == 1) {
        basic.showString("You don't have eye")
        basic.showNumber(Score)
    }
    basic.clearScreen()
})
let swithce = 0
let cheack = 0
let Score = 0
Score = 0
cheack = 3
basic.forever(function () {
	
})
