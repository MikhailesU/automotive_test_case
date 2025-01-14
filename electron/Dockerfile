# Используем базовый образ с Node.js
FROM node:14

# Устанавливаем зависимости для Xvfb и других инструментов
RUN apt-get update && apt-get install -y  xvfb libgtk-3-0 libdbus-glib-1-2 libasound2 libnss3-dev libgdk-pixbuf2.0-dev libgtk-3-dev libxss-dev libgconf-2-4 libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 libgbm-dev libnss3-dev libxss-dev && rm -rf /var/lib/apt/lists/*

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

#RUN npm install --save-dev electron

# Устанавливаем зависимости приложения
RUN npm install

# Копируем все файлы приложения
COPY . .

RUN npm i -g electron-mocha
# Запускаем приложение с помощью Xvfb
CMD ["sh", "-c", "Xvfb :99 -screen 0 1024x768x24 & DISPLAY=:99 electron . --no-sandbox"]