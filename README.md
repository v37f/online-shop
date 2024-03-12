# Купи-девайс

Учебный проект онлайн-магазина. Проект выполенен с целью изучения стейт-менеджера MobX, библиотеки Bootstrap,
а также приобретения опыта работы с PostgreSQL в связке с ORM Sequelize. Проект состоит из фронтенд и бэкенд части онлайн-магазина.
Проект выполнен на основе [данного видео](https://youtu.be/H2GCkRF9eko?list=LL).

## Технологии

Фронтенд:

- **ReactJS**
- **React Bootstrap**
- **react-router-dom**
- **Axios**

Бэкенд:

- **NodeJS**
- **Express**
- **PostgreSQL**
- **Sequelize**

## Функционал

В бэкенде реализовано полноценное REST API интернет-магазина и авторизация пользователей по JWT.

Во фронтенд части реализован страницы авторизации, страницы товаров с возможностью фильтрации товаров по типу и бренду и пагинацией,
страница с характеристиками отдельного товара и админ-панель с возможность. добавления новый типов, брендов и товаров.

## Установка и запуск проекта

Для работы серверной части проекта необходимо установить [PostgreSQL](https://www.postgresql.org/download/).

1. Клонируйте репозиторий и перейдите в папку проекта

```
git clone https://github.com/v37f/online-shop.git
cd online-shop
```

2. Перейдите в папку сервера и установите зависимости:

```
cd server
npm install
cd ..
```

3. В папке **server** необходимо создать файл переменных окружения **.env** со следующим содержанием:

```
PORT=5000
DB_NAME=ИМЯ_БД (например: ONLINE_SHOP)
DB_USER=ИМЯ_ПОЛЬЗОВАТЕЛЯ_БД (например: postgres)
DB_PASSWORD=ПАРОЛЬ_БД
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=СЛУЧАЙНЫЙ_СЕКРЕТНЫЙ_КЛЮЧ (строка из латинских символов и цифр)
```

При данных настройках API сервера будет доступно по адресу localhost:5000.

4. Перейдите в папку клиента и установите зависимости:

```
cd client
npm install
cd ..
```

5. В папке **client** необходимо создать файл переменных окружения **.env** со следующим содержанием:

```
REACT_APP_API_URL='http://localhost:5000/'
```

6. Запуск сервера:

```
cd server
npm run dev
```

7. Запуск клиента:

```
cd client
npm start
```