FROM python:3.13-alpine3.21
LABEL maintainer="moeketsimotaung.me"

ENV PYTHONUNBUFFERED=1 \
    PATH="/opt/bin:$PATH"

# Install build dependencies only if needed (uncomment if you add packages that require compilation)
# RUN apk add --no-cache build-base postgresql-dev

RUN python -m venv /opt && \
    /opt/bin/pip install --upgrade pip

COPY ./requirements.txt /requirements.txt

RUN /opt/bin/pip install -r /requirements.txt

COPY ./app /app

WORKDIR /app

EXPOSE 8000

RUN adduser --disabled-password --no-create-home app

USER app

# .dockerignore should be used to avoid copying unnecessary files (ensure it's present in your