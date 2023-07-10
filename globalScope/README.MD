## Implémentation naïve

## Portée globale

Dans cette version de base, le code est séparé dans 2 fichiers : [teams.js](./teams.js) et [domHandler.js](./domHandler.js) avec la fonction `getTeams()` de `teams.js` étant utilisée par le code dans `domHandler.js`.

À toutes fins pratiques, cette solution n'est pas différente de simplement mettre tout le code dans 1 seul fichier `.js` d'un coup.

Par défaut, tout code chargé dans une balise `<script>` est disponible dans la porte globale du contexte de la page. Dans ce projet, la variable `teams` et les fonctions `getTeams()` et `addTeamToDOM(team)` peuvent être appelées par n'importe qui après leur création (ex: dans la console du navigateur).

La fonctions `getTeams` est alors inutile puisque le script `domHandler.js` a accès à la variable `teams` directement.

## Ordre des scripts

L'ordre de chargement et exécutions des fichiers est important dans cette implémentation puisque `teams` et `getTeams` doivent exister avant leur utilisation lors de l'exécution de la ligne 17 dans `domHandler.js`.

Comme le chargement des balises `<script>` se fait de manière séquentielle, la balise `<script src="teams.js"></script>` doit être placée avant `<script src="domHandler.js"></script>`.

### Utilisation de l'attribut `defer`

Les 2 scripts sont chargés à la fin de la balise `<body>` puisque la ligne 9 de `domHandler.js` fait référence à un élément du DOM (le bouton `submit-btn`) qui doit exister pour être manipulé.

Une alternative serait de placer les 2 balises `<script>` dans `<head>` et utiliser l'attribut `defer` pour indiquer que le code doit être exécuté après le chargement du DOM:

```html
<head>
    <script src="teams.js"></script>
    <script src="domHandler.js" defer></script>
</head>
```
L'ordre de chargement peut être inversé tout en gardant le bon fonctionnement puisque `defer` repousse l'exécution et non le chargement des fichiers :

```html
<head>
    <script src="domHandler.js" defer></script>
    <script src="teams.js"></script>
</head>
```