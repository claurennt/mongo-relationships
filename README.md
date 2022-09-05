# 🔁   mongo-relationships 🔁  

Thir repo contains the live coding done during the small session about relationships in Mongoose/MongoDB done with batch 29!

Endpoints:

### /movies
GET-> retrieves all the movies

POST-> creates a new movie. Expects body values for title (String) and year (Number)

PATCH 
**/movies/:id/actor** -> updates actor field in movie document. Expects body with actor_id(ObjectId)
PATCH 
**/movies/:id/director** -> updates director field in movie document. Expects body with director_id(ObjectId)
PATCH 
**/movies/:id/rating** -> creates a new rating document and then updates rating field in movie document. Expects body with "rating:{ source:String, value:Number }"

### /actors
GET-> retrieves all the actors

POST-> creates a new actor. Expects body values for title (String) and year (Number)

PATCH 
**/actors/:id/movie** -> updates movie field in actor document. Expects body with movie_id(ObjectId)

### /directors
GET-> retrieves all the directors

POST-> creates a new director. Expects body values for name (String),surname(String) and country(String)
