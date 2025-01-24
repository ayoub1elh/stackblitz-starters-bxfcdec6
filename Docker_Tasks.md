# Docker Command-Line Tasks

## Overview

This task is designed to assess your proficiency with Docker's command-line interface. You will demonstrate your ability to interact with Docker through various commands used for managing containers, images, and Docker networks.

## Tasks

### Task 1: Run a Container

**Objective**: Write the Docker command to run a container from an image.

**Instructions**:

- Use the `nginx` image from Docker Hub.
- Run the container in detached mode.
- Map port `8080` on the host to port `80` in the container.

**Command**:
docker run -d -p 8080:80 nginx

### Task 2: List Containers

**Objective**: Write the Docker command to list all running containers, showing their IDs and names.

**Instructions**:

- The command should output the list of running containers.
- Display only the container IDs and names.

**Command**:
docker ps --format '{{.ID}}\t{{.Names}}'

### Task 3: Execute a Command Inside a Running Container

**Objective**: Write the Docker command to execute a bash command inside an already running container.

**Instructions**:

- Assume you have a running container with the name `mycontainer`.
- Execute the command `ls -l /usr` inside this container.

**Command**:
docker exec mycontainer ls -l /usr
