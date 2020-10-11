# Initial Vue

This Vue project will later be used as the place for user to choose the sign in method to give us the necessary permission to interact with Youtube.

## Prerequisite

- [Node.js](https://nodejs.org/en/) version >= 10 (my recommended version is the latest 12.x)
- [Yarn classic](https://classic.yarnpkg.com/lang/en/) version >= 1.22.x
- [Vue CLI](https://cli.vuejs.org/guide/installation.html) version >= 4.5.x

## Generate Vue project in current Firebase directory

Open your favorite console inside the previously generated Firebase project

```bash
vue create .
```

```text
Generate project in current directory? (Y/n) Y
```

Choose project configurations. Below is what I chose in this project

```text
? Please pick a preset: Manually select features
? Check the features needed for your project:
Choose Vue version, Babel, Router, Vuex, CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router?
(Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor
(PostCSS, Autoprefixer and CSS Modules are supported by default):
Sass/SCSS (with node-sass)
? Pick a inter / formatter config: Airbnb
? Pick additional lint features: Lint on save, Lint and fix on commit
? Pick a unit testing solution: Jest
? Pick an E2E testing solution: Cypress
? Where do you prefer placing config for Babel, ESLint, etc.?
In dedicated config files
? Save this as a preset for future projects? (y/N) N
```

Essential configurations are

```text
? Please pick a preset: Manually select features
? Check the features needed for your project:
Choose Vue version, Babel, Router
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router?
(Requires proper server setup for index fallback in production) Yes
? Where do you prefer placing config for Babel, ESLint, etc.?
In dedicated config files
? Save this as a preset for future projects? (y/N) N
```

Now you have a successfully created Vue project inside previously created Firebase project.
