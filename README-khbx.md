# Start dev container (absolute path need to be changed)
docker run -d -it --volume=$PWD:/go/src/github.com/brocaar/lora-app-server --name lora_app_dev khbx/lora_app_dev:latest

# Compile and recreate imag
sudo docker exec lora_app_dev /bin/sh -c "make clean && make build" && sudo docker build -t khbx/lora_app -f Dockerfile-khbx .

# Image was built using
docker build -f Dockerfile-devel -t khbx/lora_app_dev .
