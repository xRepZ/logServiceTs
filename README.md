## Запуск в Docker
### create docker network:
    docker network create service-network
### build:
    docker compose build
### up:
    docker compose up

  
## Типы HTTP-запросов: GET, POST

  ### POST /api/log
      вход: {
	      "user_id": "id",
	      "action": "CREATE",
      }

### GET /api/log/filter
      выход: logs[]
    возможные параметры:
      limit -- пагинация,
      page -- страница
