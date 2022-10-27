
# Api test - AWS NODE TS MONGODB

API REST DE GENRACION DE TOKENS POR TARJETA

## TECNOLOGIAS

* TYPESCRIPT
* MongoDB Atlas 
* Multi-environment  Serverless


### AMBIENTE LOCAL

* Ejecutar ```npm install``` para instalar todas las dependencias.
* Ejecutar ```npm run local``` para ejecutarlo en un ambiente local. 

### DESPLIEGUE EN AWS:
* Se debe considerar tener configurado AWS CLI con sus respectivas credenciales
```
$ npm run deploy

# or

$ serverless deploy
```

The expected result should be similar to:

```
✔ Service deployed to stack aws-node-rest-api-typescript-dev (642s)

endpoints:
  POST - https://n26bkckrc2.execute-api.us-east-1.amazonaws.com/dev/card
  GET - https://n26bkckrc2.execute-api.us-east-1.amazonaws.com/dev/card/{token}
functions:g (0s)
  create: aws-node-rest-api-typescript-dev-create (18 MB)
  findOne: aws-node-rest-api-typescript-dev-findOne (18 MB)
```

## PRUEBAS

Enviar peticiones mediante un cliente (Postman a las url expuestas)

```
https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/books
```

En el caso de prueba se publicaron en la siguientes direcciones

```
POST https://n26bkckrc2.execute-api.us-east-1.amazonaws.com/dev/card
GET https://n26bkckrc2.execute-api.us-east-1.amazonaws.com/dev/card/{token}

```

Tambien en el repositorio se encontrara un archivo de tipo postman collection con los request preparados para ser ejecutados una vez importados en su entorno

