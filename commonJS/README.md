# CommonJS et WebPack

## CommonJS
Les modules `CommonJS` (CJS) sont le système utilisé par défaut par `NodeJS`. Ceux-ci ne sont pas supportés par les navigateurs puisque leur chargement est synchrone, c.à.d il faut lire chaque fichier au complet avant de charger le prochain.

Par défaut, chaque fichier `.js` devient un module séparé.

Pour _exporter_ des éléments d'un module, il suffit de les rajouter sur l'objet `exports` du module :
```js
module.exports = {
  getTeams: getTeams,
};
```

Pour _importer_ des éléments dans un module, il suffit de faire référence au fichier du module externe avec la fonction `require` qui retourne l'objet `exports` du module:

```js
const getTeams = require("./teams").getTeams;
```


## WebPack

Afin de pouvoir utiliser du code écrit avec `CommonJS`, il faut le transformer en code lisible par un navigateur.

Ceci est possible grâce à des _bundlers_ comme `WebPack` qui permettent de traduire du code `CJS` pour un navigateur et produire 1 seul fichier JS afin de minimiser le coût de transfert sur le réseau lorsqu'on récupère le code source d'un site web.

L'outil `WebPack` offre plusieurs autres avantages qui permettent de minimiser la taille des fichiers transmis sur le réseau :
    - Minification : la réduction du code à sa plus petite représentation. (le code n'est plus facilement lisible pour un humain)
    - _Tree shaking_ : retrait du code JS non-utilisé par le programme.

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

Par défaut, WebPack est configuré pour produire un _bundle_ en mode `development` : le code final n'est pas minifé et prend environ `3.4 KiB` d'espace. Même si elle n'est jamais utilisée, la fonction `uselessFunction` est quand même présente dans le fichier `bundle.js`.

Il est possible de produire un _bundle_ en mode `production` où le code sera minifié et le fichier généré sera plus petit : environ `0.63 KiB`. Pour ce faire, lancez la commande `npm run build:prod`.

Si vous ouvrez `bundle.js`, vous vérez le code JS minifié. Même chose pour `index.html`.\
Vous pouvez noter que dans cette version, la fonction `uselessFunction` n'est plus présente dans `bundle.js`. Ceci est dû au _tree shaking_ effectué par WebPack.