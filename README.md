# entourage
Table of contents
=================

* [Users](#users)
  * [GET /users](#get-users)
  * [GET /users/:id](#get-users-id)
  * [POST /users/:id](#post-users)

# Users
## Get users
```
GET /users
```
##### Parameters
None
##### Response 
```json
[
  {
    "id": 123,
    "username": "email1",
    "email": "email1@test.com"
  },
  {
    "id": 124,
    "username": "email2",
    "email": "email2@test.com"
  }
]
```
## Get users id
```
GET /users/:id
```
##### Parameters
| Name | Type    | Description |
| ---- | ----    | ----------- |
| id   | integer | lorem ipsum |
##### Response 
```json
{
  "id": 123,
  "username": "email1",
  "email": "email1@test.com"
}
```
## Post users
```
POST /users
```
##### Parameters
| Name     | Type    | Description |
| ----     | ----    | ----------- |
| username | string  | lorem ipsum |
| email    | string  | lorem ipsum |
##### Response 
```json
{
  "id": 125,
  "username": "email3",
  "email": "email3@test.com"
}
```
