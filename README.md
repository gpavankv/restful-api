# RESTful API using Node.js, Express, MongoDB.

A RESTful API created using [Node.js](https://github.com/nodejs/node), [Express](https://github.com/expressjs/express), [MongoDB](https://www.mongodb.com/)
along with [bcryptjs](https://www.npmjs.com/package/bcryptjs) and [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) to implement security features for hashing and authenticaion.

## Getting Started
Download the zip file or clone using `git clone https://github.com/gpavankv/olarm-api.git`.

### Prerequisites

Just run `npm install` in your command prompt or terminal

```
$user npm install
```
or

```
folder\AnotherFolder> npm install
```

### Run App

Use commands `npm run start` or `nodemon` to run the app. For now there are only three routes.

1. Basic test route make a get request to `http://localhost:3050/api/test`, the server will return
a message.
```
{
    "message": "Test Successful!"
}
```

2. A POST request to `http://localhost:3050/api/createuser` with
```
{
    "firstName": "John",
    "lastName": "Doe",
    "email":"john@doe.com",
    "password": "johndoe123"
}
```
as body of the request, the server will return a message

```
{
    "message": "User created"
}
```
and the mongodb users collection should have some thing like this

```
{
    "_id" : ObjectId("5a53096475c0fa5c78858427"),
    "firstName" : "John",
    "lastName" : "Doe",
    "email" : "john@doe.com",
    "password" : "$2a$16$fRSD9aXXSzhc9dQl5JUIB.RG8aV1bIk6sG8HLwYTCdjHS.scBq16i",
    "__v" : 0
}
```

3. A POST request to `http://localhost:3050/api/verifyuser` with
```
{
    "email":"john@doe.com",
    "password": "johndoe123"
}
```
as body of the request, the server will return a message

```
{
    "message": "John Doe",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVhNTNkMWVkNmNkM2ZmMjBmMDM5MjM0MSIsImZpcnN0TmFtZSI6IkpvaG4iLCJsYXN0TmFtZSI6IkRvZSIsImVtYWlsIjoiam9obkBkb2UuY29tIiwicGFzc3dvcmQiOiIkMmEkMTYkOG85LlY1aC9iQmRoUS9IclhFNXhLdVAwcjk4MzJyRlBpU01oY2VWUE9EZFRzTmVGenE5LlciLCJfX3YiOjB9LCJpYXQiOjE1MTU0NDI3MDV9.G3odkBj9sCxftx2QFKLym3m_pTSQ7ejVcp6uE__Zx7c"
}
```
and from here on you can persist this token and use it for subsequent requests.

## Running the tests

`npm run test`

## Authors

* **[Pavan Kumar](https://github.com/gpavankv)**

## License

This project is licensed under the MIT License.

## Acknowledgments

* [Stephen Grider](https://www.udemy.com/user/sgslo/) for his course on MongoDB, file structure and some app components have been taken from his muber app.
* Referred some videos on authenication from [Traversy Media](https://www.youtube.com/user/TechGuyWeb).
* [Maximilian Schwarzmuller](https://www.udemy.com/user/maximilian-schwarzmuller/) for his courses on MEAN stack and Angular 5.
