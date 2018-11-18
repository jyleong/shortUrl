# shortUrl React on Rails

Built using shakacode React on Rails:
[React on Rails](https://github.com/shakacode/react_on_rails)

Following tutorial to get the environment set up:
[Shakacode React on Rails tutorial](https://github.com/shakacode/react_on_rails/blob/master/docs/tutorial.md)


Nginx Configuration:

First check if you have nginx installed

Open up the nginx conf file, in mac its under
/usr/local/etc/nginx/nginx.conf

Edit this file, under the server block add:
```
location ~* "^/[0-9a-z@]{5,15}$"  {
        rewrite ^/(.*)$ http://localhost:3000/api/item/$1 redirect;
}
```
For the ability to proxy and forward requests to http://<homeurl>/<urlCode>
to the GET API
Save file and restart nginx

To run tests:

```
React component tests

> yarn test

Rails backend api tests

> rspec

Run backend tests in specific location

> rspec <directory location>
> rspec spec/models

```


Install React on Rails: rails generate react_on_rails:install or rails generate react_on_rails:install --redux. You need to first git commit your files before running the generator, or else it will generate an error.

```
> rails generate react_on_rails:install
> bundle && yarn
Then run server with static client side files:

> foreman start -f Procfile.dev
To run with the webpack-dev-server:

> foreman start -f Procfile.dev-server
```

View the app via http:localhost:3000