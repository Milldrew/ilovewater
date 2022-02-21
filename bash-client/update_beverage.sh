curl -X PATCH -v -d '{"name": "foo", "brand": "bar", "flavors": ["qux"]}' -H 'Content-Type: application/json' http://localhost:$PORT/beverages/$1
