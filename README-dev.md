# Start dev container (run once)
docker run -d -it --volume=$PWD:/lora-app-server --name lora_app_dev khbx/lora_app_dev:latest

# Requirements (run once)
sudo docker exec lora_app_dev /bin/sh -c "make dev-requirements && make ui-requirements && make requirements"

# Compile and recreate imag
sudo docker exec lora_app_dev /bin/sh -c "make clean && make build" && sudo docker build -t theo024/lora-app-server -f Dockerfile-copy .

# Image was built using
docker build -f Dockerfile-devel -t khbx/lora_app_dev .
