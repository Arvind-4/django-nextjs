# Django with Next.js

A Simple Django backend deployed along side with a Nextjs frontend.

## Stack

- [Nextjs](https://reactjs.org/) - The React Framework for the Web.
- [Django](https://www.djangoproject.com/) - Django makes it easier to build better web apps more quickly and with less code.
- [Tailwind css](https://vitejs.dev/) - Rapidly build modern websites without ever leaving your HTML.
- [Typescript](https://www.typescriptlang.org/) - JavaScript with syntax for types.

## Deployed Routes:
- [Home Route](https://django-nextjs-pi.vercel.app/) - "/"
- [Date Route](https://django-nextjs-pi.vercel.app/api/date/) - "/api/date/"
- [Django Template](https://django-nextjs-pi.vercel.app/api/sample/) - "/api/sample/"
- [Hello](https://django-nextjs-pi.vercel.app/api/hello/) - "/api/hello/"

## Project structure

```
$PROJECT_ROOT
│   
├── backend,api # django files
│   
├── src, public # nextjs files
│   
├── templates # django templates
│   
├── static # django static files
```
---

### Get the Code

#### For Backend

- Clone Repo

```bash
mkdir django-nextjs
cd django-nextjs
git clone https://github.com/Arvind-4/django-nextjs.git .
```
- Create Virtual Environment for Python

```bash
python3.10 -m pip install virtualenv
python3.10 -m virtualenv .
```

- Activate Virtual Environment

```bash
source bin/activate
```

- Install Dependencies (Via **pip**)

```bash
pip install -r requirements.txt
```

- Install Dependencies (Via **Poetry**)

```bash
pip install poetry
poetry install
```

- Make Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```
- Run Server

```bash
python manage.py runserver
```

####  For Frontend

- Install Dependencies

```bash
pnpm i
```
- Run Frontend

```bash
pnpm dev
```
