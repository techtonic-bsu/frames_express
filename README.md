
# FRAMES express backend

This is for backend, still on experimentation


## Tech used

**Server:** Mongoose, MongoDB, Express, JWT, Helmet

## Quick Start

Clone the project:
```
git clone https://github.com/techtonic-bsu/frames_express
```
Run the project:
```
npm start
```



## API Reference
You can use either local and prod api endpoints:

For local: `API_URL: http://localhost:4000/api/v1/`

For prod: `API_URL: https://frames-express.onrender.com/api/v1`

#### Register an account with encodings

```http
  POST /api/v1/signup
```
Make sure to include api key on header for authorization.

