FROM node:24.4

WORKDIR /app

COPY app/package.json app/package-lock.json* ./
RUN npm install styled-components @types/styled-components --save

RUN npm install

COPY app/ ./

CMD ["npm", "run", "dev", "--", "--host"]