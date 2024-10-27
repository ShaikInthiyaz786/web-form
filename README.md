## Start the Backend Server:
```bash
cd backend
node server.js
```

## In a New Terminal, Start the React Development Server:
```bash
cd frontend
npm start
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application.

Use the form to register users. The data will be sent to the backend and stored in the SQLite database.

---

## To Test the API Independently:

1. Use Postman or any API testing tool.
2. Send a `POST` request to [http://localhost:3001/register](http://localhost:3001/register) with a JSON body:

```json
{
  "name": "John Doe",
  "address": "123 Main St, Anytown, USA"
}
```

You should receive a success message if the user is registered successfully.