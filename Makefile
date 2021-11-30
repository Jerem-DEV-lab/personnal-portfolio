install:
	npm i
	npm run build
	cd ./build && npm ci --production

restartApi:
	cd ./build && pm2 start server.js

deployDB:
	cd ./build && node ace migration:run --force
