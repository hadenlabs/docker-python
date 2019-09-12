# hub
.PHONY: hub.help

hub: hub.help

hub.help:
	@echo '    Hub:'
	@echo ''
	@echo '        hub.build         build {image}, one example: make hub.build image={{3.7.3-slim}}'
	@echo '        hub.push          push image to docker hub, example make hub.push image={{3.7.3.slim}}'
	@echo ''

hub.build: clean
	@echo " =====> Building $(IMAGE):${version}..."
	@if [ -z ${version} ]; then \
		$(docker-build) $(IMAGE):latest ;\
	else \
		$(docker-build) $(IMAGE):${version} images/${version} ;\
	fi

hub.push: clean
	@echo " =====> Push $(IMAGE):${version}..."
	@if [ -z ${version} ]; then \
		$(docker-push) $(IMAGE):latest ;\
	else \
		$(docker-push) $(IMAGE):${version} ;\
	fi

