radio.onReceivedNumber(function (receivedNumber) {
    if (ready == 1) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, Math.map(receivedNumber, 170, 1024, 10, 180))
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, Math.map(receivedNumber, 0, 1024, 10, 180))
    }
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let ready = 0
ready = 0
radio.setGroup(1)
let a = 180
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, a)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)
basic.pause(5000)
a = 10
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, a)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, a)
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
loops.everyInterval(10, function () {
	
})
