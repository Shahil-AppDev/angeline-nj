-- Script de création de la base de données MySQL pour Angeline NJ
-- Exécutez ce script dans MySQL Workbench ou en ligne de commande

-- Créer la base de données
CREATE DATABASE IF NOT EXISTS angeline_nj 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

-- Utiliser la base de données
USE angeline_nj;

-- Vérifier que la base de données est créée
SELECT 'Base de données angeline_nj créée avec succès!' AS message;

-- Afficher les informations
SHOW DATABASES LIKE 'angeline_nj';
