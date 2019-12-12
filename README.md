# Workshop Docker

## Prerequisites

Docker must be installed or use https://labs.play-with-docker.com/

## 1. What's docker

Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.
Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.
All containers are run by a single operating-system kernel and are thus more lightweight than virtual machines.
The software that hosts the containers is called Docker Engine.

It was first started in 2013 and is developed by Docker, Inc.

Virtual Machine:

![Virtual Machines](https://www.docker.com/sites/default/files/d8/2018-11/container-vm-whatcontainer_2.png)

Containers:

![Containers](https://www.docker.com/sites/default/files/d8/2018-11/docker-containerized-appliction-blue-border_2.png)

### links:

[Docker Website](https://www.docker.com)

[Docker Hub](https://hub.docker.com/search?q=&type=image)

[Documentation docker](https://docs.docker.com/)

### Workshop:

- Run the hello-world docker

  ```bash
  docker run hello-world
  ```
  
- Run Alpine
  
  - cat /etc/issue
  
  - show docker process
  
  - stop alpine container
  
  - show all containers
  
  - remove alpine's container
  
  ```bash
  docker run --name=container-alpine -d alpine
  docker ps
  docker exec container-alpine ash
  docker stop 2211docker0id72596
  docker ps --all
  docker ps --all | grep container-alpine
  docker rm 2211docker0id72596
  docker run --name=container-alpine -it --rm alpine ash
  ```

- Team cheers vs Team halloween (docker/doodle)
  
  ```bash
  docker run -it --rm docker/doodle:halloween
  docker run -it --rm docker/doodle:cheers
  ```

- Run Alpine mounting current directory explaining parameters
  
  - --rm: Automatically remove the container when it exits
  
  - --interactive, -i: Keep STDIN open even if not attached
  
  - --tty, -t: Allocate a pseudo-TTY
  
  - --volume, -v: Bind mount a volume
  
  - --workdir, -w: Working directory inside the container
  
  - More info on https://docs.docker.com/engine/reference/commandline/run/
    
    ```bash
    docker run --rm --interactive --tty --volume $PWD:/work --workdir /work alpine /bin/ash
    ```

- Run figlet result must be:

```bash
  docker run --rm --interactive --tty --volume $PWD:/work --workdir /work mbentley/figlet -w100 -f roman -d ./fonts I LOVE DOCKER

ooooo    ooooo          .oooooo.   oooooo     oooo oooooooooooo 
`888'    `888'         d8P'  `Y8b   `888.     .8'  `888'     `8 
 888      888         888      888   `888.   .8'    888         
  888      888         888      888    `888. .8'     888oooo8    
  888      888         888      888     `888.8'      888    "    
  888      888       o `88b    d88'      `888'       888       o 
  o888o    o888ooooood8  `Y8bood8P'        `8'       o888ooooood8 



  oooooooooo.     .oooooo.     .oooooo.   oooo    oooo oooooooooooo ooooooooo.   
  `888'   `Y8b   d8P'  `Y8b   d8P'  `Y8b  `888   .8P'  `888'     `8 `888   `Y88. 
   888      888 888      888 888           888  d8'     888          888   .d88' 
   888      888 888      888 888           88888[       888oooo8     888ooo88P'  
 888      888 888      888 888           888`88b.     888    "     888`88b.    
 888     d88' `88b    d88' `88b    ooo   888  `88b.   888       o  888  `88b.  
o888bood8P'    `Y8bood8P'   `Y8bood8P'  o888o  o888o o888ooooood8 o888o  o888o 

  or
docker run --rm --interactive --tty --volume $PWD:/work --workdir /work mbentley/figlet -w100 -f larry3d -d ./fonts -w 1000 I LOVE DOCKER
 ______      __       _____   __  __  ____        ____    _____   ____     __  __   ____    ____       
/\__  _\    /\ \     /\  __`\/\ \/\ \/\  _`\     /\  _`\ /\  __`\/\  _`\  /\ \/\ \ /\  _`\ /\  _`\     
\/_/\ \/    \ \ \    \ \ \/\ \ \ \ \ \ \ \L\_\   \ \ \/\ \ \ \/\ \ \ \/\_\\ \ \/'/'\ \ \L\_\ \ \L\ \   
     \ \ \     \ \ \  __\ \ \ \ \ \ \ \ \ \  _\L    \ \ \ \ \ \ \ \ \ \ \/_/_\ \ , <  \ \  _\L\ \ ,  /   
      \_\ \__   \ \ \L\ \\ \ \_\ \ \ \_/ \ \ \L\ \   \ \ \_\ \ \ \_\ \ \ \L\ \\ \ \\`\ \ \ \L\ \ \ \\ \  
      /\_____\   \ \____/ \ \_____\ `\___/\ \____/    \ \____/\ \_____\ \____/ \ \_\ \_\\ \____/\ \_\ \_\
    \/_____/    \/___/   \/_____/`\/__/  \/___/      \/___/  \/_____/\/___/   \/_/\/_/ \/___/  \/_/\/ /
```

- Run Ghost CMS
  
  ```bash
  docker run -d --rm --name ghost -e url=http://localhost:8080 -p 8080:2368 ghost
  ```

- Serve index.html with apache or nginx
  
  ```bash
  docker run --name indexnginx -v $PWD:/usr/share/nginx/html:ro -p 80:80 --rm -d nginx:alpine
  docker run --name indexapache -v $PWD:/usr/local/apache2/htdocs:ro -p 80:80 --rm -d httpd:alpine
  ```

- Usefull commandline
  
  ```bash
    # Stop all containers
    docker stop $(docker ps -a -q)
    # Stop all containers to restart at start
    docker update --restart=no $(docker ps -a -q
  ```

## 2. What's docker-compose

- [ ] Run index with docker-compose

- [ ] Run Wordpress CMS

