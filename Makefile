PRETTIER_FILES_PATTERN = '{src,scripts}/**/*.{js,ts,tsx,css,scss,json}' '**/*.md'
SCRIPTS_PATTERN = 'src/**/*.{js,ts,tsx}'

.PHONY: run
run: ## Run main app
	expo start --tunnel

.PHONY: install
install: ## Install dependencies
	yarn install

.PHONY: format
format: ## Format code using eslint and prettier
	yarn prettier --write $(PRETTIER_FILES_PATTERN)
	yarn eslint --fix $(SCRIPTS_PATTERN)

.PHONY: check
check: ## Checks code format issues
	yarn prettier --check $(PRETTIER_FILES_PATTERN)