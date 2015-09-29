## Table of contents
* [Token](#token)
  * [POST /auth](#post-auth)
  * [Authorized request example](#authorized-request-example)
* [Users](#users)
  * [GET /users](#get-users)
  * [GET /users/:id](#get-users-id)
  * [POST /users](#post-users)

## Token
### POST auth
##### Url
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
### Authorized request example
##### Url
```
GET /test/auth
```
##### Headers
| Name                     | Type      | Description |
| ----                     | ----      | ----------- |
| Authorization: Bearer    | __TOKEN__ |             |
##### Response 
```json
{
  "id" : 1,
  "created_at" : "2015-09-28 22:53:59",
  "username" : "test",
  "email" : "test@test.com",
  "updated_at" : "2015-09-28 22:53:59"
}
```
![Authorized request example](https://raw.githubusercontent.com/sarbull/entourage/master/documents/auth.png?token=ABxxsLmu_stwBwdtDF8YrjhzNBZx7zIgks5WEw9mwA%3D%3D "Authorized request example")
[Top](#table-of-contents)
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
