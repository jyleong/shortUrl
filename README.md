# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

To run tests:

```
react component tests

> yarn test

rails backend api tests

> rspec

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