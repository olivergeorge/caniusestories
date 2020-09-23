
This is an experiment of using pure React UI components developed leveraging storybook for use in a Clojurescript Reagent app.

## Developing UI components

The `lib` directory is a React project setup with storybook for development and babel to compile files for reuse.

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

Our source code uses JSX and newer JS language features which constrain who can use our library.

We could help consumers in two ways
1. Use Babel to compile files down to a backwards compatible version of javascript
2. Use Webpack to bundle our code up as a single file library

In this case we're not bundling.  Individual files will allow us to consume specific components with less overhead.

To update the library

* Edit or add code in the [`src`](./lib/src) directory
* Update [`src/index.js`](./lib/src/index.js) to include any new components
* Recompile with `yarn run build`

Alternatively, `yarn run watch` will process files as they change.

## Using components from ClojureScript Reagent app

The [`app`](./app) directory includes a simple CLJS app based on the [CLJS webpack tutorial](https://clojurescript.org/guides/webpack).  

Our UI lib is just another dep.  The `package.json` includes a dependency on the `../lib` dir since it's all in one repo.

By default, `node_modules` is a copy of the lib so we need a way to keep it fresh.  Two options

1. Use `yarn link` which puts a symlink in place of the copied files.  `make setup` in the root directory does this for you.
1. `rm -fR node_modules; yarn` to copy the files

To use components, either:

1. Require `caniusestories` in your namespace and refer to the exported components.  You'll see an example of this in [`app.core`](./app/src/app/core.cljs) namespace.
2. Require specific source files if you prefer, e.g. `["caniusestories/lib/stories/Button" :as Button]`

Rebuild your project, run the REPL:

```clj -m cljs.main -co build.edn -v -c -r```

Or prepare a release using advanced build:

```clj -m cljs.main -co build.edn -O advanced -v -c -s```

The `-s` flag starts a http server, browse to [http://localhost:9000](http://localhost:9000) to see the app running. 

## What about styles?

We're spoilt for choice here.  I'm not clear on the best approach.

Currently Webpack is setup to inline CSS when it sees import statements.

## Outstanding

[Sensible webpack config](https://ask.clojure.org/index.php/9602/recommended-webpack-config-for-clojurescript-bundle-target)

yarn link vs multiple copies of react - do we really need to modify webpack.config.js to include an alias?
