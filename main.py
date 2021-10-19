def on_received_number(receivedNumber):
    Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1,
        Math.map(receivedNumber, -1024, 1024, 0, 180))
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global a
    a = 0
    Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2, a)
    basic.show_string("" + str((Math.map(a, 0, 180, 0, 9))))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global a
    a += 20
    basic.show_string("" + str((Math.map(a, 0, 180, 0, 9))))
    Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2, a)
input.on_button_pressed(Button.B, on_button_pressed_b)

a = 0
radio.set_group(1)
a = 180
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO2, a)
basic.show_string("" + str((Math.map(a, 0, 180, 0, 9))))