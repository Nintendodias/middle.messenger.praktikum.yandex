### Описание

[Netlify](https://subtle-khapse-af4972.netlify.app)

[Макет](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=1%3A498&t=gQns60FsYEIMNZXK-0)

### Установка

- `npm install` — установка стабильной версии,
- `npm run serve` — запуск дев версии,
- `npm run build` — сборка стабильной версии,
- `npm run lint` — проферка и автофикс багов eslint,
- `npm run test` — запуск автотестов chai и mocha,

### Сборка и запуск docker-образа

1. `docker build -t messenger .` - сборка образа
2. `docker images` - просмотр существующих образов
3. `docker run -d -p {port}:3000 {image_id}` - запуск контейнера
4. `docker ps` - просмотр запущенных контейнеров
5. Перейти на `localhost:{port}`

### Настроен Husky

- `pre-commit` — npm run test && npm run lint,
