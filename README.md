entourage
=========

### Important

For every development that's made please use this procedure
```bash
$ git checkout development
$ git pull origin development
$ git checkout -b feature/example-issue
$ # do changes
$ git add .
$ git commit -m "Commit message"
$ git push origin feature/example-issue
```
After this create a [pull-request](https://github.com/sarbull/entourage/compare) selecting development and your feature branch. :+1:

It's like a ping-pong game, every developer sends the other one the code he delivered and the reviewer will merge it. This is for a better overview and to keep up with the changes.

### API Requirements
#### Memcache
```bash
$ memcached -p 11211 # lumen uses memcached for you kno.. caching
                     # a memcache server should be started
```
#### PHPUnit
```bash
$ phpunit # used for tests, yes, we now work with TDD Mihai.
```

#### Start API
```bash
$ cp .env.sample .env # and change to what you need
$ php artisan migrate:install
$ php artisan migrate
$ php artisan db:seed
$ memcached -p -d 11211
$ php artisan serve
```
