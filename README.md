# Pokedex Challenge 👾
Este challenge consiste en crear una app que consuma una API y pueda mostrar la informacion obtenida en una lista.

Para que este resuelto correctamente es *necesario* que:
- Se cree un componente Button y que al apretarlo se dispare la llamada al endpoint de la API
- Crear y conectar un Loading que se va a mostrar durante todo el tiempo que la API este "cargando"
- Crear un componente de ListPokemons que reciba la informacion obtenida por el endpoint y dibuje una lista con todos los pokemons adentro + un scrollbar

![Esqueleto](https://i.imgur.com/xKOXY2n.png)

La API a consumir es la siguiente: [Pokeapi](https://pokeapi.co/)
La URL seria => `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`

# Informacion adicional
Un pokedex es un objecto ficticio que lista informacion de todos los Pokemons. Un Pokemon es un "animal/mounstro" chiquitito que pelea en batallas contra otros Pokemons. [Pokemon game serires](https://en.wikipedia.org/wiki/Pok%C3%A9mon_(video_game_series)).

## Puntos Extra

- Responsive
- Error handling
- Usar Context o Redux para el consumo de la API
- Paginación

# Informacion del proyecto base

Este proyecto fue creado usando:
- Node 16
- React 18
- Bootstrap 5

## Consideraciones

Se va a analizar la arquitectura de la aplicación, el consumo de informacion dinamica y la prolijidad al desarrollar.
Es muy importante que la aplicación cumpla con el listado de items y funcionalidades necesarias provisto arriba.

## Scripts

Para instalar todas las dependencias necesarias:
### `npm install`

Para prender el proyecto en modo dev
### `npm start`

## Entrega
El proyecto tiene que ser clonado usando el comando `git clone`.
Cada desarrollador debera crear un repositorio en su cuenta de github y subir el proyecto ahi dentro.
Dejandolo publico para que luego alguien del equipo lo pueda analizar como corresponda.

(PD: Se puede cambiar el Remote del repositorio si sabe usar `git` correctamente)

