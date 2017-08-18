# RIGA [![Build Status](https://travis-ci.org/idatosabiertos/Riga.svg?branch=master)](https://travis-ci.org/idatosabiertos/Riga)

## REQUERIMIENTOS / REQUIREMENTS
1. Ruby 2.3.1
2. Bundler
3. SQLite

## INSTALACIÓN / INSTALLATION
1. $`git clone https://github.com/idatosabiertos/Riga`
2. $`Cd Riga`
3. $`bundle install`
4. $`bundle exec jekyll serve --host=0.0.0.0`
5. Navegar a / Navigate to `http://localhost:8080` en la maquina host / on host machine.

### DOCKER [DockerFile](https://github.com/idatosabiertos/Riga/blob/develop/Dockerfile)
DockerHub: https://hub.docker.com/r/mtuduri/riga/   
**Pasos / Steps:**
1. `git clone https://github.com/idatosabiertos/Riga`
2. `docker build -t riga .`
3. `docker run riga` 
4. Navegar a / Navigate to `http://localhost:4000` en la maquina host / on host machine.
    
### Vagrant  [/vagrant](https://github.com/idatosabiertos/Riga/tree/develop/vagrant)
 **Requerimientos / Requirements**
 - [Vagrant](https://www.vagrantup.com/downloads.html)
 - [VirtualBox](https://www.virtualbox.org/wiki/Downloads)  
**Pasos / Steps:**
1. `git clone https://github.com/idatosabiertos/Riga/tree/develop/vagrant`
2. `cd Riga/vagrant`
3. `vagrant up` 
4. Navegar a / Navigate to `http://localhost:4000` en la maquina host / on host machine.



