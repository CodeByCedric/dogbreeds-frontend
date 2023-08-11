# client

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


# Vereisten en opmerkingen:
## Vereisten:
### Front
- login page: ok
- registration page: ok
- front page that can be seen when not authenticated: ok
- shows a list of entries in one language: ok
- shows an option to switch to another language: ok

### Back-Office
- shows a list of entries: ok
- has the functionality to search the list: 
- has the functionality to filter the list: ok
- has the functionality to add an entry: ok
- has the functionality to update an entry: 
- has the functionality to delete an entry: ok
- as a user, you should be authenticated to access it: ok, in die mate dat je moet ingelogd zijn om het dashboard te raadplegen. Er is geen extra authenticatie die controleert of ingelogde users aan het dashboard moeten kunnen. 



## Opmerkingen:
De inhoud (omschrijvingen e.d.) zijn gegenereerd via ChatGPT

Home en dashboard bestaan uit een groot deel uit duplicate code
Clickable deel van de dashboarddogcard verwijderd, maar ook de css moet nog worden aangepast (de transform en pointer impliceren dat het nog steeds clickable is)
-> om ambiguity te vermijden tussen naar details gaan, edit, en delete

Deleting a dog should probably have a confirmation to protect against accidentaly deleting them