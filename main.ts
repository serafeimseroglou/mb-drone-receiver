input.onButtonPressed(Button.A, function () {
    a += 1
    b += 1
    c += 1
    d += 1
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, a)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, b)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, b)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, d)
    basic.clearScreen()
    led.plot(0, Math.map(a, 10, 140, 0, 9))
})
input.onButtonPressed(Button.B, function () {
    a += -1
    b += -1
    c += -1
    d += -1
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, a)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, b)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, b)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, d)
    basic.clearScreen()
    led.plot(0, Math.map(a, 10, 140, 0, 9))
})
radio.onReceivedValue(function (name, value) {
    if (ready == 1) {
        if (name == "x") {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, Math.map(value, 160, 1024, 10, 180))
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, Math.map(value, 160, 1024, 10, 180))
        } else {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, Math.map(value, 50, 900, 10, 180))
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, Math.map(value, 50, 900, 10, 180))
        }
    }
})
/**
 * TODO: 
 * 
 * - Make it lighter less than 300 grams
 * 
 * - Check independent 1 and 2 max threshold.
 * 
 * - Try to sync servo 1 and 2!
 */
let d = 0
let b = 0
let a = 0
let ready = 0
ready = 0
radio.setGroup(1)
a = 160
b = 160
let c = 160
d = 160
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, a)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, a)
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
b = 10
c = 10
d = 10
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, a)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, b)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, c)
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
