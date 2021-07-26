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
