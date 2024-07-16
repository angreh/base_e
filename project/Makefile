.phony: build-types
build-types:
	@echo "Building types"
	@cd ../api/internal/repositories && cp -R shared_types ../../../project/mirror/internal/repositories
	@cd mirror && go run cmd/main.go
	@cd mirror && cp shared_types.ts ../../web/src/types
	@echo "Done"

.phony: dev
dev: build-types
	@docker compose up -d
	@cd ../api && air > ../project/logs/api.log /dev/null 2>&1 & echo $$! > /tmp/null
	@echo "Started air"
	@cd ../web && npm run dev

.phony: stop
stop:
	@docker compose down
	@ps aux | grep "air" | grep -v grep | awk '{print $$2}' | xargs -I {} sh -c "kill -9 {}"
	@rm -f logs/api.log
	@echo "Stopped air"

.phony: log
log:
	tail -f logs/api.log
