import time
import frida


app_name = "tv.danmaku.bili"
# app_name = "com.kugou.android"

device = frida.get_device_manager().enumerate_devices()[-1]
pid = device.spawn(app_name)
device.resume(pid)
time.sleep(1)
session = device.attach(pid)
with open("hook_code.js") as f:
    script = session.create_script(f.read())
script.load()

input("防止进程结束\n")