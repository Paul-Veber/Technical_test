# Test technique

## démarrage
create data folder in project root and put hn_log.tsv in it (too heavy for github)
npm -i
npm run dev

## conception

 J’ai pris du temps au début pour essayer de chercher d’autres structures de données qui pourrait être plus adaptée et qui aurait une plus faible complexité. j’ai regardé les structures en arbre mais cela ne correspondait pas vraiment à la tâche.

Pour essayer de gagner du temps et éviter d’avoir à tout charger dans la mémoire au lancement du serveur j’ai créé un service qui parse le fichier tsv en JSON. Mais l’écriture sur le disque était trop longue et même si le serveur ne générait un fichier JSON que si il n’y en avait pas, la lecture du fichier JSON restait relativement lente. 

J’ai donc décidé de parse le fichier au lancement du serveur et de le garder en mémoire. J’ai vu que plusieurs librairies pouvaient aider dans la tâche pour notamment streamer le fichier et ne pas avoir l’intégralité du document en mémoire. 
J’ai parse les données de manières à avoir un array composé d’arrays avec la date de la query et son contenus  

Après avoir créé la base du serveur avec Express je me suis occupé du service qui allait s’occuper de filtrer les queries. Pour cela j’ai utilisé filter avec la date sur le jeu de donnée en ne vérifiant que les timestamps des queries ( il y’a des dates dans le contenu des queries).

Pour un peu de sécurité j’ai créé un service qui vérifie que le paramètre passé dans l’url est du bon format. Si le format n’est pas valide un message est retourné.

Je pensais avoir finis mais après vérification des résultats je me suis rendu compte que je n’avais pas les bons: il fallait aussi supprimés les recherches avec le même contenu… 

Pour ça j’ai modifié le service qui s’occupe de filtrer et j’ai rajouté des opérations:
	-un map pour qu’il ne reste que le contenus des queries
	-un Set pour retirer toutes les valeurs en doubles dans l’array

Ce n’est sans doute pas la solution la plus efficace mais elle est propre en termes de code et au vu du jeu de donnés la vitesse reste acceptable. 
