install:
	npm i
	npm run build
	cd ./build && npm ci --production

restart:
	cd ./build && pm2 start server.js

deployDB:
	cd ./build && node ace migration:run --force
