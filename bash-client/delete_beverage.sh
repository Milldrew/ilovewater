echo 'http://localhost:'$PORT'/beverages/'$1
curl -X DELETE http://localhost:$PORT/beverages/$1
