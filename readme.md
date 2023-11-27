### Projet : Mini-ERP pour HBJO

#### Objectif
Développer une version simplifiée d'un ERP (Enterprise Resource Planning) spécifique au secteur de la bijouterie, de l'horlogerie et de la joaillerie. Ce mini-ERP permettra de gérer les aspects fondamentaux comme les inventaires de produits, les commandes clients, et les fournisseurs.

#### Fonctionnalités Clés
1. **Gestion de l'Inventaire** : Permettre de lister, ajouter, modifier et supprimer des produits (bijoux, montres, etc.).
2. **Gestion des Commandes Clients** : Enregistrer les commandes, les associer à des clients, et suivre leur statut (nouvelle, en traitement, expédiée).
3. **Gestion des Fournisseurs** : Permettre de gérer les informations sur les fournisseurs, y compris l'ajout et la mise à jour de leurs détails.

#### Technologies
- **Backend** : Node.js avec TypeScript.
- **Base de Données** : Utiliser des fichiers JSON pour stocker des données de manière simplifiée (pas de base de données relationnelle ou NoSQL pour ce test).

#### Défis Techniques
- **Architecture Modulaire** : Concevoir l'application de manière à ce que chaque fonctionnalité (inventaire, commandes, fournisseurs) soit un module distinct. Cela démontrera votre capacité à penser en termes d'architecture logicielle.
- **Gestion des Données** : Puisque vous utiliserez des fichiers JSON, une attention particulière doit être portée sur la façon dont les données sont lues, écrites et mises à jour de manière efficace.
- **API RESTful** : Créer des endpoints API clairs et bien structurés pour chaque fonctionnalité.

#### Tests et Documentation
- **Tests Unitaires et d'Intégration** : Écrire des tests pour chaque fonctionnalité afin de prouver la robustesse de votre code.
- **Documentation** : Rédiger une documentation claire sur l'utilisation de l'API, y compris des exemples de requêtes et de réponses.

#### Livrable Final
Un dépôt GitHub contenant :
- Le code source de l'application.
- Une documentation README expliquant comment configurer et lancer l'application.
- Un dossier de tests avec les tests unitaires et d'intégration.

Votre proposition d'architecture pour le projet Mini-ERP pour HBJO semble bien organisée et adaptée aux besoins du projet. Voici une brève explication de chaque composant de l'architecture et leur rôle :

___

### /HBJO-backend/

#### /data/
- **products.json** : Stocke les détails des produits.
- **orders.json** : Contient les informations sur les commandes clients.
- **suppliers.json** : Détails des fournisseurs.

#### /src/
- **/controllers/**
  - **ProductController.ts** : Gère les requêtes liées aux produits.
  - **OrderController.ts** : Traite les requêtes pour les commandes.
  - **SupplierController.ts** : Contrôleur pour les opérations liées aux fournisseurs.

- **/models/**
  - **Product.ts** : Classe ou interface TypeScript pour le modèle de produit.
  - **Order.ts** : Classe ou interface pour le modèle de commande.
  - **Supplier.ts** : Classe ou interface pour le modèle de fournisseur.

- **/routes/**
  - **productRoutes.ts** : Définit les routes API pour les opérations liées aux produits.
  - **orderRoutes.ts** : Routes pour la gestion des commandes.
  - **supplierRoutes.ts** : Routes pour les opérations liées aux fournisseurs.

- **/services/**
  - **ProductService.ts** : Services pour la gestion des produits.
  - **OrderService.ts** : Services liés à la gestion et au traitement des commandes.
  - **SupplierService.ts** : Services pour la gestion des fournisseurs.

- **/utils/**
  - **fileHelper.ts** : Fonctions utilitaires pour lire et écrire des fichiers JSON.
  - **validationHelper.ts** : Fonctions pour la validation des données d'entrée.

- **/types/** : (Optionnel)
  - **product.d.ts**, **order.d.ts**, **supplier.d.ts** : Déclarations TypeScript pour les types et interfaces utilisés dans l'application.

#### /tests/
- **productController.test.ts** : Tests pour le ProductController.
- **orderController.test.ts** : Tests pour le OrderController.
- **supplierController.test.ts** : Tests pour le SupplierController.
- Autres fichiers de test pour les modèles et services.

#### Racine du projet
- **app.ts** : Initialise et lance l'application, configure les routes, les middleware, etc.
- **tsconfig.json** : Configuration pour le compilateur TypeScript.
___

Pour lancer les tests et l'application dans un projet Node.js avec TypeScript, vous devez configurer des scripts dans votre fichier `package.json`. Ces scripts définiront les commandes pour démarrer l'application et exécuter les tests.

### Configuration des Scripts dans package.json

Ouvrez votre fichier `package.json` et ajoutez des scripts dans la section `scripts`. Voici un exemple de ce à quoi cela pourrait ressembler :

```json
{
  "name": "votre-projet",
  "version": "1.0.0",
  "scripts": {
    "start": "ts-node src/app.ts",
    "dev": "nodemon src/app.ts",
    "build": "tsc",
    "test": "jest"
  },
  // ... autres configurations
}
```

### Explication des Scripts

- **start** : Lance l'application en utilisant `ts-node` qui permet d'exécuter directement TypeScript sans avoir besoin de le compiler au préalable. `src/app.ts` est le point d'entrée de votre application.
- **dev** : Utilise `nodemon` pour redémarrer automatiquement votre serveur à chaque fois qu'un fichier est modifié. C'est utile en développement.
- **build** : Compile le code TypeScript en JavaScript en utilisant le compilateur TypeScript (`tsc`). Le code compilé est généralement placé dans le répertoire `dist`.
- **test** : Exécute les tests à l'aide de Jest.

### Lancement de l'Application

Pour lancer l'application, ouvrez votre terminal et exécutez :

```bash
npm start
```

Si vous êtes en mode de développement et que vous souhaitez que l'application redémarre automatiquement à chaque modification, utilisez :

```bash
npm run dev
```

### Exécution des Tests

Pour exécuter les tests, utilisez la commande suivante dans votre terminal :

```bash
npm test
```

### Avant de Lancer

Assurez-vous que toutes les dépendances nécessaires sont installées en exécutant `npm install` dans votre projet. Vérifiez également que votre `tsconfig.json` et éventuellement `jest.config.js` sont correctement configurés. Pour les tests, assurez-vous que Jest est configuré pour fonctionner avec TypeScript (si vous utilisez `ts-jest`, cette configuration est généralement automatique).