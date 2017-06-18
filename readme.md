# RIGA [![Build Status](https://travis-ci.org/idatosabiertos/Riga.svg?branch=develop)](https://travis-ci.org/idatosabiertos/Riga)

## PREQUISITES
- Ruby 2.3.1
- Bundler
- SQLite


## INSTALLATION

- Clone the repo
- Under Riga directory run $ bundle install
- start the server $ bundle exec jekyll serve --host=0.0.0.0
- Navigate to localhost:4000


## DOCKER FILE  
https://hub.docker.com/r/mtuduri/riga/ 

    FROM faizalzakaria/ruby-2.3.1

    MAINTAINER ILDA

    RUN apt-get update 

    RUN apt-get install -y build-essential zlib1g-dev libxml2 libxml2-dev libxslt1-dev

    RUN gem install bundler

    ADD . /Riga

    WORKDIR /Riga

    RUN bundle install

    EXPOSE 4000
    CMD  bundle exec jekyll serve --host=0.0.0.0
    
## VAGRANT 
### -Vagrant File
    Vagrant.configure('2') do |config|
    config.vm.box      = 'yourBoxHere' 
    config.vm.hostname = 'rails-dev-box'

    config.vm.network "private_network", ip: "10.0.0.210"
    config.vm.network :forwarded_port, guest: 4000, host: 4000

    config.vm.provision :shell, path: 'bootstrap.sh', keep_color: true

    config.vm.provider 'virtualbox' do |v|
      v.memory = 2048
      v.cpus = 2
    end
    end
### -Bootstrap.sh
    function install {
        echo installing $1
        shift
        apt-get -y install "$@" >/dev/null 2>&1
    }

    echo adding swap file
    fallocate -l 2G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap defaults 0 0' >> /etc/fstab

    echo updating package information
    apt-add-repository -y ppa:brightbox/ruby-ng >/dev/null 2>&1
    apt-get -y update >/dev/null 2>&1

    install 'development tools' build-essential

    install Ruby ruby2.3 ruby2.3-dev
    update-alternatives --set ruby /usr/bin/ruby2.3 >/dev/null 2>&1
    update-alternatives --set gem /usr/bin/gem2.3 >/dev/null 2>&1

    echo installing current RubyGems
    gem update --system -N >/dev/null 2>&1

    echo installing Bundler
    gem install bundler -N >/dev/null 2>&1

    install Git git
    install SQLite sqlite3 libsqlite3-dev

    install 'Nokogiri dependencies' libxml2 libxml2-dev libxslt1-dev zlib1g-dev

    sudo chwon -R $USER /var/lib/gems
    cd /usr
    mkdir idatosabiertos
    sudo chwon -R $USER /usr/idatosabiertos
    cd idatosabiertos
    sudo git clone https://github.com/GovLab/Riga.git
    cd Riga
    bundle install

    echo 'all set, rock on!'




