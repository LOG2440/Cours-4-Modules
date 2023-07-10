## Implémentation avec IIFE

## Modules IIFE

Le concept d'**IIFE** (_Immediately Invoked Function Expression_) permet un système simple de modularisation.

Le code dans l'IIFE peut être exécuté sans être accessible à l'extérieur à moins d'avoir une référence retournée par l'IIFE. Cette référence est alors la seule chose qui a accès à cet environnement lexical (notion de Fermetures). L'IIFE dans `teams.js` retourne la fonction `getTeams`, mais pas la variable `teams` qui n'est plus disponible dans la portée globale, mais seulement à travers la référence vers la fonction retournée. 

L'IIFE dans `domHandler.js` ne retourne rien, donc la fonction interne `addTeamToDOM` n'est plus accessible après son exécution. Il est quand même possible d'exécuter `addTeamToDOM` à travers le bouton `submit-btn` grâce aux fermetures.


## Objets partagés

Cette implémentation n'est pas encore basée 100% sur des fichiers séparés. On peut obtenir le même comportement si les 3 scripts sont placés dans le même fichier et dans le même ordre.

L'implémentation utilise l'objet `TEAM_APP` pour partager la fonction `getTeams` entre les 2 IIFE. Ceci pose quelques contraintes :
- L'objet doit exister avant d'être utilisé, donc l'ordre des scripts est toujours limité.
- L'objet est disponible dans la portée globale et donc accessible par tout le code disponible sur la page.
- L'objet a un nom qui peut potentiellement rentrer en collision avec un autre objet déjà existant ou créé plus tard.

## IIFE et code généré

L'utilisation des IIFE pour des modules directement par les développeurs est plutôt rare avec l'existance de systèmes comme `CJS` et `ESM`. Cependant, le code généré par des outils comme `WebPack`, `ESBuild`, etc. utilise souvent les IIFE.

Consultez la section de mode production dans le [README](../es6_modules_webpack/README.md#changement-de-mode-de-bundle) du projet `es6_modules_webpack` pour créer un `bundle` en mode `production` qui utilisera des IIFEs pour le code généré.