# Используем официальный образ PostgreSQL
FROM postgres:latest

# Устанавливаем переменные окружения для настройки базы данных
ENV POSTGRES_DB=records
ENV POSTGRES_USER=backend
ENV POSTGRES_PASSWORD=CPU22!!22CPU

# Копируем скрипты и данные в контейнер
COPY ./init.sql /docker-entrypoint-initdb.d/

# Открываем порт для PostgreSQL
EXPOSE 5432