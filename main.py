def on_received_number(receivedNumber):
    if ready == 1:
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2,
            Math.map(receivedNumber, 0, 1024, 20, 160))
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1,
            Math.map(receivedNumber, 0, 1024, 20, 160))
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

ready = 0
ready = 0
radio.set_group(1)
a = 80
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, a)
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2, a)
basic.show_leds("""
    . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
""")
basic.pause(5000)
a = 160
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, a)
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2, a)
basic.show_leds("""
    . # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")
basic.pause(5000)
a = 20
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, a)
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2, a)
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
""")
basic.pause(2000)
a = 160
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, a)
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2, a)
basic.pause(2000)
a = 20
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, a)
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2, a)
basic.show_leds("""
    . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
""")
ready = 1

def on_every_interval():
    pass
loops.every_interval(10, on_every_interval)
