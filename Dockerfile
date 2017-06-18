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