# QuickNotes API

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

| NAME               | TYPE | REQ                                   | RES         | HEADER |
| ------------------ | ---- | ------------------------------------- | ----------- | ------ |
| /                  | GET  | N/A                                   | STRING      | N/A    |
| /api/user/register | POST | Object with name, email, and password | USER OBJECT | N/A    |
| /api/user/login    | POST | Object with email and password        | TOKEN       | N/A    |
| /api/user/notes    | GET  | N/A                                   | NOTES ARRAY | TOKEN  |

### Example Requests

#### Auth

```js
axios.post("https://URL.COM/api/user/register", { userInput }).then((res) => {
  // Returns {name: String, email: String, password: String}
  console.log(res.data);
});
```

```js
axios.post("https://URL.COM/api/user/login", { userInput }).then((res) => {
  // Returns token; Example: asdhsakdjahu32b2404bd
  console.log(res.data);
});
```

#### Notes

> Required a unique token with all requests to /notes

```js
axios.get("https://URL.COM/api/notes", {
  headers: {
    Authorization: TOKEN,
  },
});
```

### Development

Want to contribute? Great!

Fork this repository and make a pull request!
If you want to use this API as it is, it is located here: https://NOTDEPLOYEDYET.com

## License

MIT
