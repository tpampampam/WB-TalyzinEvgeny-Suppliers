
## Описание
приложение для управления поставками для десктопной и мобильной версии экрана

## Функционал
- получение списка поставок в виде таблицы
- редактирование карточки поставками
- создание новой карточки поставками
- удаление карточки поставками
- поиск по различным параметрам

## Технологии
- React
- TypeScript
- Redux RTK Query
- Express Js. (для сервера)
- SASS/SCSS

## Установка и запуск

использую Vite для сборки

git clone //
cd wild
npm install


## Запуск приложения:

npm run dev

## Запуск сервера:

npm run server

## Структура проекта

- components/: Компоненты
- pages/: Страницы
- redux/: store / apiSice
- routes/: Основной роутер
- styles/: SCSS файлы
- utils/: константы







































```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
