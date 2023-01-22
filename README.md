# Nuxt.js Boilerplate

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/96ef5ef23a4442c2bf73762f46e52749)](https://www.codacy.com/gh/hugoRCD/nuxtjs-boilerplate/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hugoRCD/nuxtjs-boilerplate&amp;utm_campaign=Badge_Grade)

This is a fully functional Nuxt 3 template that includes features such as OAuth authentication with Google, translation with I18n, a dark and light theme and many more.
It is built with the latest version of Nuxt and uses pnpm for managing dependencies, which helps to keep the application lightweight and fast.

![Homepage](./public/homescreen.webp)

## Features

### Authentication
- OAuth authentication with multiple providers such as Google, GitHub, etc...
- Working forgot password feature
![login page](./public/login.webp)

### UI/UX
- Translation with I18n for multiple languages support
- Dark and light theme switchable by the user
- Fully responsive design using SCSS
- Admin Dashboard

### API
- Use [Supabase](https://supabase.io/) for real-time and powerful API
- Easy and secure way to connect your frontend to your database
- There is also a self api inside using the Nitro server built-in Nuxt

### Deployment
- Include [Docker](https://www.docker.com/)  configuration using a Dockerfile and Docker-compose
- Easily deploy the application in a container running on port 8080
- simply run `docker-compose up` to start the application

### Documentation
- Use [Retype](https://retype.js.org/) for documentation
- Automatic generation of documentation from your code

### Lint
- Eslint is configure on the boilerplate (configure for Typescript, with Prettier)

## Console

This application includes a powerful console that can be launched 
by using the shortcut `cmd + k`. This console can provide various 
features to facilitate development and management of the application but you
will need to develop your own commands. the console in the boilerplate
is just an example of what you can do with it.

## Getting Started

### Clone the repository:
```
git clone git@github.com:hugoRCD/nuxt3-boilerplate.git
```

### Install dependencies:
```
pnpm install
```
There is no need to use the --shamefully-hoist flag here 
because the dependencies the flag is set to true by default in the .npmrc file.

### Start the development server:
```
pnpm dev
```

Now you can open the app in your browser at http://localhost:3000 if you do not override the default port.

### Start the documentation
```
retype watch
```

You can access the live documentation at https://hugorcd.github.io/nuxtjs-boilerplate/

## Built With

- [Nuxt.js](https://nuxtjs.org/) - The Progressive JavaScript Framework
- [Supabase](https://supabase.io/) - Open-Source Firebase alternative
- [Retype](https://retype.js.org/) - The documentation engine
- [pnpm](https://pnpm.js.org/) - Fast and disk space efficient package manager

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
