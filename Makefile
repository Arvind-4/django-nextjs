run:
	python manage.py runserver & pnpm dev

frontend:
	pnpm dev

backend:
	python manage.py runserver

format:
	pnpm format
	bash commands/format.sh

export:
	bash commands/export.sh