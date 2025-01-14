import psutil
import time
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/start_recording')
def start_recording():
    cpu_usage = psutil.cpu_percent(interval=1)
    memory_info = psutil.virtual_memory()
    memory_usage = memory_info.percent
    memory_free = memory_info.free / (1024 ** 2)  # Конвертация в МБ
    memory_total = memory_info.total / (1024 ** 2)  # Конвертация в МБ
    swap_info = psutil.swap_memory()
    swap_free = swap_info.free / (1024 ** 2)  # Конвертация в МБ
    swap_total = swap_info.total / (1024 ** 2)  # Конвертация в МБ
    resp = jsonify({"ЦПУ": f"{cpu_usage}%",
                    "ОЗУ": f"{memory_free:.2f} МБ / {memory_total:.2f} МБ",
                    "ПЗУ": f"{swap_free:.2f} МБ / {swap_total:.2f} МБ"})
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp
        
    

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)