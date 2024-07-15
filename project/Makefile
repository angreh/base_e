.phony: build-types
build-types:
	cd ../api/internal/repositories && cp -R response_types ../../../project/mirror/internal/repositories
	cd mirror && go run cmd/main.go
	cd mirror && cp response_types.ts ../../web/src/types

