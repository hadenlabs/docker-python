#
# Dockerfile for Python 3.8.0
#

FROM python:3.8.0

ENV LIBRARY_DEPS  \
  libbz2-dev \
  libsasl2-dev \
  libxml2-dev \
  libxmlsec1-dev \
  libxmlsec1-openssl \
  binutils \
  libproj-dev \
  gdal-bin \
  zlib1g-dev \
  libev-dev \
  libevdev2 \
  libgdal20

ENV RUNTIME_DEPS curl \
  git \
  gcc \
  python-pycurl

RUN apt-get update -y \
  && apt-get install -y --no-install-recommends $LIBRARY_DEPS $RUNTIME_DEPS \
  && apt-get clean \
  && apt-get purge -y \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /data

ENTRYPOINT ["python"]

CMD ["--help"]
