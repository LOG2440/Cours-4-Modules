# Notions de modularisation en JavaScript

Cet entrepôt contient un exemple de plusieurs stratégies de mettre en place un système de modules en JavaScript.

Chaque exemple ajoute des éléments supplémentaires par rapport à la stratégie précédante.

## Fonctionnalité du projet

L'exemple utilisé est une application très rudimentaire qui permet de charger une liste initiale d'équipes de hocket dans des balises `<li>` au chargement de la page.

Par la suite, l'utilisateur peut entrer, dans un champ de saisie, un nouveau nom qui sera ajouté à la liste affichée à travers un bouton "Ajouter".

Tous les exemples implémentent la même fonctionnalité, à l'exception de [es6_modules](./es6_modules/README.MD) qui possède une fonctionnalité supplémentaire afin d'illustrer le fonctionnement des modules ES : les noms entrés dans le champ de saisie sont ajoutés avec la 1re lettre de chaque mot transformée en majuscule. Ex : "las vegas knights" deviendra "Las Vegas Knights".

## Version déployée

La version du projet `es6_modules` est déployée sur la [page GitHub de l'entrepôt](https://log2440.github.io/Cours-4-Modules/).

## Liste des stratégies

Chaque répertoire contient une stratégie différente pour implémenter des modules en JS.

- [`globalScope`](./globalScope/README.MD) : implémentation naïve des modules
- [`iife_modules`](./iife_modules/README.MD) : implémentation des modules avec des _IIFE_
- [`commonJS`](./commonJS/README.md) : utilisation du système CommonJS (_CJS_)
- [`es6_modules`](./es6_modules/README.MD) : utilisation du système ESM
- [`es6_modules_webpack`](./es6_modules_webpack/README.md) : utilisation d'un bundler avec le système ESM

Notez que les exemples `commonJS` et `es6_modules_webpack` nécessitent l'utilisation de librairies supplémentaires. Consultez le fichier `README` du répertoire pour comprendre comment installer les dépendances nécessaires et lancer les exemples.