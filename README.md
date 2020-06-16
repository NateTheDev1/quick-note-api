# QuickNotes API
> https://quick-note-api.herokuapp.com/

The QuickNotes API Dependencies

- NodeJS
- Express
- Bcrypt
- JWT
- Mongoose for MongoDB

# New Features!

> Last Updated: 6/16/2020 2:14 PM

- V1: REST Routes and AUTH Routes

### Installation

Install the dependencies and start the server.

```sh
$ cd quick-note-api
$ npm install
$ npm run server
```

For production environments...

```sh
$ npm run start
```

### Routes

Current Routes Available.

| NAME                     | TYPE   | REQ                                   | RES                  | HEADER |
| ------------------------ | ------ | ------------------------------------- | -------------------- | ------ |
| /                        | GET    | N/A                                   | STRING               | N/A    |
| /api/user/register       | POST   | Object with name, email, and password | USER OBJECT          | N/A    |
| /api/user/login          | POST   | Object with email and password        | TOKEN                | N/A    |
| /api/user/notes          | GET    | N/A                                   | NOTES ARRAY          | TOKEN  |
| /api/user/notes/`noteId` | GET    | N/A                                   | SPECIFIED NOTE BY ID | TOKEN  |
| /api/user/notes          | POST   | Object with a title and content key   | CREATED NOTE         | TOKEN  |
| /api/user/notes/`noteId` | DELETE | N/A                                   | DELETION RECEIPT     | TOKEN  |
| /api/user/notes/`noteId` | PUT    | Object with a title and content key   | UPDATED NOTE         | TOKEN  |

### Example Requests

#### Auth

```js
axios.post("https://quick-note-api.herokuapp.com/api/user/register", { userInput }).then((res) => {
  // Returns {name: String, email: String, password: String}
  console.log(res.data);
});
```

```js
axios.post("https://quick-note-api.herokuapp.com/api/user/login", { userInput }).then((res) => {
  // Returns token; Example: asdhsakdjahu32b2404bd
  console.log(res.data);
});
```

#### Notes

> Required a unique token with all requests to /notes

```js
axios.get("https://quick-note-api.herokuapp.com/api/notes", {
  headers: {
    Authorization: TOKEN,
  },
});
```

### Development

Want to contribute? Great!

Fork this repository and make a pull request!
If you want to use this API as it is, it is located here: https://quick-note-api.herokuapp.com/

## License

MIT
