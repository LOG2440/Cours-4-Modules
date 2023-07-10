## Implémentation avec ESM

## Modules ECMAScript

Les modules ECMAScript (_ESM_) introduites par ES2015 permettent un système de modules similiare à `CJS`, supporté nativement par les navigateurs. Le fonctionnement est similaire à CJS où on importe des modules pour former une arborescence de modules.

Il n'est plus nécessaire d'inclure tous les fichiers utilisés avec une balise `<script>` séparée. Il suffit d'insérer le fichier du plus haut niveau de l'arborescence des modules avec l'attribut `type="module` :

```html
<script src="domHandler.js" type="module"></script>
```

Tous les fichiers de l'arborescence seront récupérés par le navigateur à travers des requêtes `GET` une fois la racine chargée. Il n'y a pas de _bundling_ par défaut avec ESM: chaque fichier nécessite une requête différente.

**Note** : les ESM doivent être chargés par HTTP pour être exécutés. Il n'est donc pas possible d'ouvrir un fichier `.html` directement à partir du système de fichiers puisque ceci utilisera le protocole `file://`.

### Définir un module

Tout comme CJS, chaque fichier `.js` devient un module séparé et le code n'est pas disponible à l'extérieur à moins d'être explicitement exporté.

### Exporter un module

ESM permet d'exporter plusieurs éléments : fonctions, variables, définitions de classes, etc.

Un élément exporté doit être précédé du mot clé `export`. Chaque module peut avoir, optionnellement, un élément exporté par défaut qui est précédé de `export default`. Dans l'exemple suivant, le module exporte 2 fonctions avec la 2e étant l'export par défaut :

```js
export function splitBySpace(word) { }

export default function capitalizeInput(word) { }
```

### Importer des modules

Pour importer les éléments d'un module à l'autre, il faut utiliser la syntaxe suivante :
```js
import X from "Y";
``` 

`Y` représente le chemin relatif vers le fichier à importer (ne pas oublier l'extension `.js`). Si on veut importer plusieurs éléments du même fichier, on n'a qu'à le spécifier dans `X` et définir `Y` une seule fois.

`X` représente les éléments à importer. Il existe 3 manières différentes de définir quoi et comment l'importer.

1. Importer l'export par défaut. Note : il faut que le module ait un `export default` pour cette syntaxe :
   ```js
   import getTeams from "./teams.js"; 
   ```
2. Importer plusieurs éléments (syntaxe `{ }`). À noter que le module peut exporter plus de choses qu'on veut importer :
   ```js
   import capitalizeInput, { splitBySpace } from "./stringModifier.js";
   ```
3. Importer tous les éléments dans un objet :
   ```js
    import * as utils from "./utils.js"; 
    utils.printToConsole(x);

    /// équivalent à
    import {printToConsole, isInRangeOf} from "./utils.js";
    printToConsole(x);
   ```

Les éléments importés peuvent être rennommés lors de leur chargement. Ceci est fait automatiquement pour l'export par défaut et doit être explicité pour le reste :
```js
// export
export function splitBySpace(word) { }
export default function capitalizeInput(word) { }

// import et utilisation
import capitalize, { splitBySpace as splice } from "./stringModifier.js";
const value = capitalize(input.value);
const splitValue = splice(input.value);

```

### NodeJS

ESM est supporté par NodeJS qui utilise CJS nativement. 

Afin de pouvoir utiliser ESM avec du code écrit pour NodeJS, il faut utiliser l'extension `.mjs` ou configurer `type` à `ESM` dans `package.json`.