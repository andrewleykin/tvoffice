# Site for TV Office

## Настройка проекта

Копирую переменные и заполняем их

```
cp .env.example .env
```

В [https://console.developers.google.com/](https://console.developers.google.com/ "Google консоль разработчика") создаем client id и api key

Создаем гугл таблицу, настраиваем доступ для всех у кого есть ссылка, копируем sheetId - https://docs.google.com/spreadsheets/d/sheetId/edit#gid=0

В [https://openweathermap.org//](https://openweathermap.org/ "Сервис погоды") регистрируемся и создаем api key

### Устанавливаем зависимости

```
yarn install
```

### Для разработки

```
yarn serve
```

### Для продакшена

```
yarn build
```
