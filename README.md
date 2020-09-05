
This is an experiment of using pure React UI components developed leveraging storybook for use in a Clojurescript Reagent app.

## Developing UI components

The `lib` directory is a React project setup with webpack for publishing and storybook for development.

To get started

* `yarn` to install deps
* `yarn run storybook` to boot up a development environment

There are some [example components and associated stories files](./lib/src/stories) which demonstrate how you can hook them up in storybook.

Core storybook features allow for:

* Displaying components in different states
* Adding controls to set props and see what happens
* Observing events

Additionally, the storybook can be published as a static webapp with `yarn run build-storybook`.  

View the static site locally with `cd storybook-static; python -m SimpleHTTPServer`

## Publishing UI component library

To publish new components

* update [`src/index.js`](./lib/src/index.js) to include new components
* `yarn run build` to generate a new `dist/main.js` which you could publish to npm

## Using components from Clojurescript Reagent app

The `app` directory includes a simple CLJS app based on the [CLJS webpack tutorial](https://clojurescript.org/guides/webpack).  

Our UI lib is just another dep.  The `package.json` includes a dependency on the `../lib` dir since it's all in one repo.

To update the lib

* `rm -fR node_modules; yarn` will ensure node_modules is fresh.  Note: you could just copy the dist/main.js file over.
* To use the lib require `caniusestories` in your namespace and refer to the exported components.

You'll see an example of this in [`app.core`](./app/src/app/core.cljs) namespace.

Rebuild your project, run the REPL:

```clj -m cljs.main -co build.edn -v -c -r```

Or prepare a release using advanced build:

```clj -m cljs.main -co build.edn -O advanced -v -c -s```

The `-s` flag starts a http server, browse to [http://localhost:9000](http://localhost:9000) to see the app running. 
