FROM python:3.7.2

MAINTAINER Luis Mayta <@slovacus>

ENV LIBRARY_DEPS  \
  libbz2-dev \
  libsasl2-dev \
  libxml2-dev \
  # python tbk
  libxmlsec1-dev \
  libxmlsec1-openssl \
  binutils \
  libproj-dev \
  gdal-bin \
  # zlib
  zlib1g-dev \
  # bjoern
  libev-dev \
  libevdev2 \
  libgdal20

ENV RUNTIME_DEPS curl \
  git-core \
  gcc \
  python-pycurl

RUN apt-get update -y \
  && apt install -y $LIBRARY_DEPS $RUNTIME_DEPS \
  && apt-get clean \
  && apt-get purge -y \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
