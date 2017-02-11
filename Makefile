port=8080
NPM_BIN=./node_modules/.bin

server_auto_reload=$(NPM_BIN)/nodemon --ignore '/client/*.jsx' --ignore '__tests__/**/*' ./server/server.js --inspect --host localhost --port $(port)

.PHONY: dev

build:
	NODE_ENV=production $(NPM_BIN)/webpack

clean:
	rm -rf ./server/static

ci-lint:
	@npm run ci:lint

dist: ci-lint test
	NODE_ENV=production `npm bin`/webpack

start:
	NODE_ENV=production node ./server/server.js

dev:
	NODE_ENV=development $(server_auto_reload)

scm-source.json:
	$(NPM_BIN)/scm-source > scm-source.json

dev-noinspect:
	NODE_ENV=development node ./server/server.js
