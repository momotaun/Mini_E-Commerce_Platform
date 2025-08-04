FROM python:3.13-alpine3.21
LABEL maintainer="moeketsimotaung.me"

ENV PYTHONUNBUFFERED 1 \
    PATH="/opt/bin:$PATH"
    
RUN python -m venv /opt && \
    /opt/bin/pip install --upgrade pip

COPY ./requirements.txt requirements.txt

RUN /opt/bin/pip install -r /requirements.txt

COPY ./app /app

WORKDIR /

EXPOSE 8000

RUN adduser --disabled-password --no-create-home app

USER app