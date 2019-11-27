#
# See ./CONTRIBUTING.rst
#

test.help:
	@echo '    Test:'
	@echo ''
	@echo '        test                    Run all test'
	@echo '        test.run                Run test of test'
	@echo '        test.lint               Run all pre-commit'
	@echo '        test.syntax             Run all syntax in code'
	@echo ''

test:
	@echo $(MESSAGE) Running tests on the current Python interpreter with coverage $(END)
	@if [[ -z "${run}" ]]; then \
		$(docker-compose) -f ${PATH_DOCKER_COMPOSE}/test.yml run --rm \
			app bash -c "$(PIPENV_RUN) python setup.py test" ; \
	fi
	@if [[ -n "${run}" ]]; then \
		$(docker-compose) -f ${PATH_DOCKER_COMPOSE}/test.yml run --rm \
			app bash -c "$(PIPENV_RUN) pytest tests/${run}" ; \
	fi

test.lint:
	$(PIPENV_RUN) pre-commit run --all-files --verbose

test.syntax:
	@echo $(MESSAGE) Running tests $(END)
