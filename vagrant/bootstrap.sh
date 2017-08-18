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

sudo chmod 757 -R /var/lib/gems
cd /usr
mkdir idatosabiertos
sudo chmod 757 -R /usr/idatosabiertos
cd idatosabiertos
sudo git clone https://github.com/idatosabiertos/Riga.git
cd Riga
bundle install

bundle exec jekyll serve --host=0.0.0.0

echo 'Navegar a http://localhost:4000 en la maquina host'