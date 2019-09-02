FROM python:3.7.4-alpine

RUN mkdir -p /home/app
WORKDIR /home/app
COPY . /home/app
RUN pip install --no-cache-dir -r requipments/production.txt

