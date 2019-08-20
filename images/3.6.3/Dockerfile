FROM python:latest

MAINTAINER Luis Mayta <@slovacus>

ENV BUILD_DEPS  \
  libbz2-dev \
  libsasl2-dev \
  libxml2-dev \
  binutils \
  libproj-dev \
  gdal-bin \
  # zlib
  zlib1g-dev \
  # bjoern
  libev-dev \
  libevdev2

ENV RUNTIME_DEPS curl \
  git-core

RUN apt-get update -y \
  && apt install -y --no-install-recommends $BUILD_DEPS $RUNTIME_DEPS \
  && apt-get clean \
  && apt-get purge -y --auto-remove $BUILD_DEPS \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
