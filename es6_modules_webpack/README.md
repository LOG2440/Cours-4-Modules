# Installation des dépendances

Lancer la commande `npm ci` . Celle-ci va installer les dépendances définies dans [package.json](./package.json) avec les versions exactes définies dans [package-lock.json](./package-lock.json). Pour ce projet, les dépendances sont majoritairement des librairies de l'écosystème de `Webpack`.

# Build avec Webpack

Lancer la commande `npm build` .

Le résultat final sera généré dans le répertoire `build` .

# Lancement du site

Lancer la commande `npm start` pour lancer le serveur `http-server`.

Le site s'ouvrira sur le port 3000 sur votre machine.

## Configuration des options

Le fichier `webpack.config.js` présente les options pour Webpack.

### Changement de mode de _bundle_

Par défaut, WebPack est configuré pour produire un _bundle_ en mode `development` : le code final n'est pas minifé et prend environ `5 KiB` d'espace.

Il est possible de produire un _bundle_ en mode `production` où le code sera minifié et le fichier généré sera plus petit : environ `0.42 KiB`. Pour ce faire, lancez la commande `npm run build:prod`.

Si vous ouvrez `bundle.js`, vous vérez le code JS minifié. Même chose pour `index.html`

# Alternatives à WebPack

**NB** : Pour utiliser les scripts dans cette section, vous devez installer les librairies globalement avec l'option `-g` (ex : `npm install -g esbuild`) ou les installer localement au projet avec `-D` (ex : `npm install -D esbuild`)

## [ESbuild](https://esbuild.github.io/)

Bundler très rapide pour le code JS. Par défaut, ne copie pas les fichiers HTML et nécessite plus de configuration et/ou des outils pour faire le tout en même temps.

`esbuild src/domHandler.js --bundle --minify --outfile=build/bundle.js`

ESbuild est écrit en `Go` et est généralement plus rapide que WebPack. Il est possible de combiner l'écosystème de WebPack avec ESbuild également.

## [Parcel](https://parceljs.org/)

Outil **"zéro configuration"** pour un bundle. 

Nécessite la présence d'une balise \<script> dans le HTML comme point d\'entrée : n'oubliez pas d'ajouter la référence vers `domHandler.js`

`parcel build src/index.html`

Génère les dépendances dans un répertoire `dist`, mais les développeurs n'ont pas le contrôle sur l'arborescence et la nommenclature exacte des fichiers.

Parcel utilise [SWC](https://swc.rs/), un compilateur très rapide écrit en `Rust`.

## [Rollup](https://rollupjs.org/)

Outil très simple pour le bundling de JS. Ne minifie pas sans outils supplémentaires. Par défaut, ne copie pas les fichiers HTML et nécessite plus de configuration et/ou des outils pour faire le tout en même temps.

`rollup src/domHandler.js --file build/bundle.js --format iife`