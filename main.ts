radio.onReceivedNumber(function (receivedNumber) {
    if (ready == 1) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, Math.map(receivedNumber, 0, 1024, 0, 180))
        basic.clearScreen()
        led.plot(0, Math.map(receivedNumber, 0, 1024, 0, 9))
    }
})
input.onButtonPressed(Button.A, function () {
    a += -1
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
    basic.clearScreen()
    led.plot(0, Math.map(a, 23, 40, 0, 9))
})
input.onButtonPressed(Button.B, function () {
    a += 1
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
    basic.clearScreen()
    led.plot(0, Math.map(a, 23, 40, 0, 9))
})
let a = 0
let ready = 0
ready = 0
radio.setGroup(1)
a = 80
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)
basic.pause(5000)
a = 160
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
basic.showLeds(`
    . # # # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(5000)
a = 20
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.pause(2000)
a = 160
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
basic.pause(2000)
a = 20
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
ready = 1
