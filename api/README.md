## Table of contents
* [Token](#token)
  * [POST /auth](#post-auth)
  * [Auth request example](#auth-request-example)
* [Users](#users)
  * [GET /users](#get-users)
  * [GET /users/:id](#get-users-id)
  * [POST /users](#post-users)

## Token
### POST auth
```
POST /auth
```
##### Parameters
| Name     | Type   | Description |
| ----     | ----   | ----------- |
| email    | string |  |
| password | string |  |
##### Response 
```json
{
  "token" : "...."
}
```
[Top](#table-of-contents)
### Example
![Example authorized request](http://github.com/sarbull/entourage/documents/auth.png "Example authorized request")

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
