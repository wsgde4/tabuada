input.onButtonPressed(Button.A, function () {
    numero1 = randint(1, 10)
    numero2 = randint(1, 10)
    basic.showNumber(numero1)
    basic.showString("x")
    basic.showNumber(numero2)
    nrjogadas = 1
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(pontuação)
    basic.showString("de")
    basic.showNumber(nrjogadas)
    basic.pause(2000)
    basic.clearScreen()
    nrjogadas = 0
    pontuação = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(numero1 * numero2)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pontuação += 1
    basic.showString("Boa!")
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
let nrjogadas = 0
let pontuação = 0
let numero2 = 0
let numero1 = 0
numero1 = 0
numero2 = 0
pontuação = 0
nrjogadas = 0
basic.forever(function () {
	
})
