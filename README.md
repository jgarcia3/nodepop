#Arranca el servidor introduciendo
mpv run dev

#Arrancar la base de datos introduciendo (sustituir ./data/db por la localización donde instales mongod)
./bin/mongod --dbpath ./data/db --directoryperdb

#Una vez arrancado, aparecerán los productos disponibles en:
http://localhost:3000

#Posteriormente, acceder a la api a trevés del browser, donde aparecerán en json todos los productos:
http://localhost:3000/productos

#En el browser, a través de peticiones GET, se podrán realizar los filtros para obtener los productos necesarios
#Para realizar el primer filtro utiliza ?
#Si se quiere realizar más de un filtro, separar los filtros con un &
#Posteriormente introduce los elementos que deseas filtrar, atendiendo al siguiente criterio:
#Por producto, introducir producto=xxx
#Por precio, introducir precio=xxx
#Establecer número de elementos a visualizar, introducir limit=xxx
#Establecer la posición del elemento que se quiere visualizar, introducir skip=xxx
#Si se quiere ordenar la lista, introducir sort=xxx
#Si se quieren buscar los tags, introducir fields=xxx
#Si se quiere introducir un rango de precio, separar por -
#Si se quiere buscar un precio menor que una cantidad, escribir -xx
#Si se quiere buscar un precio mayor que una cantidad, escribir xx-
#Se puede buscar más de un parámetro separando por espacios
