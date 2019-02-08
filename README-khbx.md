# Start dev container (absolute path need to be changed)
docker run -d -it --volume=/home/khbx/Desktop/campus-iot/lora-app-server:/go/src/github.com/brocaar/lora-app-server --name lora_app_test khbx/lora_app_dev:latest

# Compile and recreate imag
sudo docker exec lora_app_test /bin/sh -c "make clean && make build" && sudo docker build -t gbesnard/lora_app -f Dockerfile-khbx .
