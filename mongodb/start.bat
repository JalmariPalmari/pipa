docker run -d --rm --name mongodb -p 27018:27017 -v db:/data/db mongo
docker volume create --name=db