git pull

old_container=$(docker ps -a -q  --filter ancestor=magnet)

old_image=$(docker images -q magnet)

docker build . -t magnet --no-cache

docker stop $old_container

docker run --restart unless-stopped -d -p 9999:9999 magnet

docker rm $old_container

docker rmi $old_image