entourage
=========

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
