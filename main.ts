input.onButtonPressed(Button.A, function () {
    a += 1
    b += 1
    d += 1
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, a)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, b)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, d)
    basic.clearScreen()
    led.plot(0, Math.map(a, 10, 140, 0, 9))
})
input.onButtonPressed(Button.B, function () {
    a += -1
    b += -1
    d += -1
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, a)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, b)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, d)
    basic.clearScreen()
    led.plot(0, Math.map(a, 10, 140, 0, 9))
})
radio.onReceivedValue(function (name, value) {
    if (ready == 1) {
        if (name == "x") {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, Math.map(value, 160, 1024, 10, 180))
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, Math.map(value, 200, 1024, 10, 180))
        } else {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, Math.map(value, 50, 900, 10, 180))
        }
    }
})
let d = 0
let b = 0
let a = 0
let ready = 0
ready = 0
radio.setGroup(1)
a = 140
b = 150
d = 160
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, a)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, a)
basic.showLeds(`
    . # # # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.pause(1000)
a = 10
b = 20
d = 30
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, a)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, b)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, d)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
ready = 1
