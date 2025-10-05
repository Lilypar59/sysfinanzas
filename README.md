

docker compose down
docker compose build --no-cache backend
docker compose up backend


docker compose down
docker compose build --no-cache
docker compose up -d


docker compose down -v
docker compose build --no-cache db
docker compose up db


# cambiar de node
nvm use 20.18.3
nvm list

