import pyautogui
import time
time.sleep(0)

count = 1

while count<=1000:
    pyautogui.typewrite("Boom")
    pyautogui.press("enter")
    count = count+1
 