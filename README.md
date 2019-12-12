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

![Virtual Machines](https://www.docker.com/sites/default/files/d8/2018-11/docker-containerized-appliction-blue-border_2.png)

Containers:

![Containers](https://www.docker.com/sites/default/files/d8/2018-11/docker-containerized-appliction-blue-border_2.png)

### links:

[Docker Website](https://www.docker.com)

[Docker Hub](https://hub.docker.com/search?q=&type=image)

[Documentation docker](https://docs.docker.com/)

### Workshop:

- [ ] Run the hello-world docker

- [ ] Run Alpine
  
  - [ ] cat /etc/issue
  
  - [ ] show docker process
  
  - [ ] stop alpine container
  
  - [ ] show all containers
  
  - [ ] remove alpine's container

- [ ] Team cheers vs Team halloween (docker/doodle)

- [ ] Run Alpine mounting current directory explaining parameters
  
  - [ ] --rm
  
  - [ ] --interactive
  
  - [ ] --tty
  
  - [ ] --volume
  
  - [ ] --workdir

- [ ] Run figlet result must be:
  
  ```bash
  ooooo    ooooo          .oooooo.   oooooo     oooo oooooooooooo 
  `888'    `888'         d8P'  `Y8b   `888.     .8'  `888'     `8 
  888      888         888      888   `888.   .8'    888         
  888      888         888      888    `888. .8'     888oooo8    
  888      888         888      888     `888.8'      888    "    
  888      888       o `88b    d88'      `888'       888       o 
  o888o    o888ooooood8  `Y8bood8P'        `8'       o888ooooood8 
  ```

  oooooooooo.     .oooooo.     .oooooo.   oooo    oooo oooooooooooo ooooooooo.   
  `888'   `Y8b   d8P'  `Y8b   d8P'  `Y8b  `888   .8P'  `888'     `8 `888   `Y88. 
   888      888 888      888 888           888  d8'     888          888   .d88' 
   888      888 888      888 888           88888[       888oooo8     888ooo88P'  
   888      888 888      888 888           888`88b.     888    "     888`88b.    
   888     d88' `88b    d88' `88b    ooo   888  `88b.   888       o  888  `88b.  
  o888bood8P'    `Y8bood8P'   `Y8bood8P'  o888o  o888o o888ooooood8 o888o  o888o 

  or

---

  /\__  _\    /\ \     /\  __`\/\ \/\ \/\  _`\     /\  _`\ /\  __`\/\  _`\  /\ \/\ \ /\  _`\ /\  _`\     
  \/_/\ \/    \ \ \    \ \ \/\ \ \ \ \ \ \ \L\_\   \ \ \/\ \ \ \/\ \ \ \/\_\\ \ \/'/'\ \ \L\_\ \ \L\ \   
     \ \ \     \ \ \  __\ \ \ \ \ \ \ \ \ \  _\L    \ \ \ \ \ \ \ \ \ \ \/_/_\ \ , <  \ \  _\L\ \ ,  /   
      \_\ \__   \ \ \L\ \\ \ \_\ \ \ \_/ \ \ \L\ \   \ \ \_\ \ \ \_\ \ \ \L\ \\ \ \\`\ \ \ \L\ \ \ \\ \  
      /\_____\   \ \____/ \ \_____\ `\___/\ \____/    \ \____/\ \_____\ \____/ \ \_\ \_\\ \____/\ \_\ \_\
      \/_____/    \/___/   \/_____/`\/__/  \/___/      \/___/  \/_____/\/___/   \/_/\/_/ \/___/  \/_/\/ /

```

- [ ] Run Ghost CMS

- [ ] Serve index.html with apache or nginx
```
