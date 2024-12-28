# UberClone

## User Routes

### POST RegisterUser

`https://uber-clone-backend-theta.vercel.app/user/register`

**Body (urlencoded)**

- `firstName`: Farhan
- `lastName`: Khalid
- `email`: farhan8@email.com
- `password`: Farhan_123

**Example Request**

```bash
curl --location 'https://uber-clone-backend-theta.vercel.app/user/register' \
--data-urlencode 'firstName=Farhan' \
--data-urlencode 'lastName=Khalid' \
--data-urlencode 'email=farhan8@email.com' \
--data-urlencode 'password=Farhan_123'
```

**Response**

```json
{
  "user": {
    "firstName": "Farhan",
    "lastName": "Khalid",
    "email": "farhan8@email.com",
    "password": "$2a$10$Y/Fq.wAN5lhkffRD2y2Zfe6B9653Z.96kbatDJgMLlGJcg5QSrEHe",
    "_id": "676fff6fcf199af2dc05d334",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmZmZjZmY2YxOTlhZjJkYzA1ZDMzNCIsImlhdCI6MTczNTM5MzEzNiwiZXhwIjoxNzM1NDc5NTM2fQ.2qCrwU2aHSvgXgvezFSdVGomutSVgAWYEmXlNZWAuHc"
}
```

### POST LoginUser

`https://uber-clone-backend-theta.vercel.app/user/login`

**Body (urlencoded)**

- `email`: farhan@email.com
- `password`: Farhan_123

**Example Request**

```bash
curl --location 'https://uber-clone-backend-theta.vercel.app/user/login' \
--data-urlencode 'email=farhan@email.com' \
--data-urlencode 'password=Farhan_123'
```

**Response**

```json
{
  "user": {
    "_id": "676fe7c8acecf0c3c1aa5361",
    "firstName": "Farhan",
    "lastName": "Khalid",
    "email": "farhan@email.com",
    "password": "$2a$10$V9XZk7sYoKzxSAk9p8rHbeQp0421TixbZeW6d2rtVOdfrjbvrnlAy",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmZlN2M4YWNlY2YwYzNjMWFhNTM2MSIsImlhdCI6MTczNTM5NjQ4NiwiZXhwIjoxNzM1NDgyODg2fQ.eNODKqyCSGlozPcPa9WiPXe8FiyQw937XG5gyj_enX8"
}
```

### GET userProfile

`https://uber-clone-backend-theta.vercel.app/user/me`

**Authorization**

- Bearer Token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmZlN2M4YWNlY2YwYzNjMWFhNTM2MSIsImlhdCI6MTczNTM5NjU4NCwiZXhwIjoxNzM1NDgyOTg0fQ.QEoR7or0q10Gv8HkYcJ-BppxXYtLc4F36STg1VMBSDw`

**Example Request**

```bash
curl --location 'https://uber-clone-backend-theta.vercel.app/user/me'
```

**Response**

```json
{
  "_id": "676fe7c8acecf0c3c1aa5361",
  "firstName": "Farhan",
  "lastName": "Khalid",
  "email": "farhan@email.com",
  "__v": 0
}
```

### POST Logout

`https://uber-clone-backend-theta.vercel.app/user/logout`

**Authorization**

- Bearer Token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmZlN2M4YWNlY2YwYzNjMWFhNTM2MSIsImlhdCI6MTczNTM5NjU4NCwiZXhwIjoxNzM1NDgyOTg0fQ.QEoR7or0q10Gv8HkYcJ-BppxXYtLc4F36STg1VMBSDw`

**Example Request**

```bash
curl --location --request POST 'https://uber-clone-backend-theta.vercel.app/user/logout'
```

**Response**

```json
{
  "message": "Logout successful"
}
```
