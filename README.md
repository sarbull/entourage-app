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

### Start app
```bash
$ ./documents/launch.sh # starts memcached, api, web-app
```
