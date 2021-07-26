# Installation des dépendances

Lancer la commande `npm install` .

# Build avec Webpack

Lancer la commande `npm build` .

Le résultat sera dans le répertoire `build` .

# Lancement du site

Lancer la commande `npm start` pour lancer le serveur lite-server.

Le site s'ouvrira sur le port 3000 sur votre machine.

**OU**

Lancer la commande `npm run dev` pour lancer le serveur de développement de Webpack.

Le site s'ouvrire sur le port 8080 sur votre machine.

## Configuration des options

Le fichier `webpack.config.js` présente les options pour Webpack.

### Changement de mode de _bundle_

Lancer la commande `npm run build:prod` pour créer un bundle pour la production.

Si vous ouvrez `bundle.js`, vous vérez le code JS minifié. Même chose pour `index.html`

<br>
<br>
<br>

# Alternatives à WebPack

**NB** : Pour utiliser les scripts dans cette section, vous devez installer les librairies globalement avec l'option `-g` (ex : `npm install -g esbuild`) ou les installer localement au projet avec `-D` (ex : `npm install -D esbuild`)

## [ESbuild](https://esbuild.github.io/)

Bundler très rapide pour le JS. Par défaut, ne copie pas les fichiers HTML et nécessite plus de configuration et/ou des outils pour faire le tout en même temps.

`esbuild src/domHandler.js --bundle --minify --outfile=build/bundle.js`

## [Rollup](https://rollupjs.org/)

Outil très simple pour le bundling de JS. Ne minifie pas sans outils supplémentaires. Par défaut, ne copie pas les fichiers HTML et nécessite plus de configuration et/ou des outils pour faire le tout en même temps.

`rollup src/domHandler.js --file build/bundle.js --format iife`

## [Parcel](https://parceljs.org/)

Outil **"zéro configuration"** pour un bundle. Nécessite la présence d'une balise \<script> dans le HTML comme point d\'entrée

`parcel build src/index.html`

Génère les dépendances dans un répertoire `dist`, mais les développeurs n'ont pas le contrôle sur l'arborescence et la nommenclature exacte des fichiers.
