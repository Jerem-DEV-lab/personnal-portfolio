install:
	npm i
	npm run build
	cd ./build && npm ci --production

restartApi:
	cd ./build && pm2 restart 0

deployDB:
	cd ./build && node ace migration:run --force
