## Table of contents
* [Users](#users)
  * [GET /users](#get-users)
  * [GET /users/:id](#get-users-id)
  * [POST /users](#post-users)

## Users
### Get users
##### URL
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
[Top](#table-of-contents)
### Get users id
##### URL
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
[Top](#table-of-contents)
### Post users
##### URL
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
[Top](#table-of-contents)
