
This is an experiment of using pure react ui components developed leveraging storybook and used by a clojurescript reagent app.

## Developing UI components

The lib directory is a react project setup with webpack for publishing and storybook for development.

To get started

# `yarn` to install deps
# `yarn run storybook` to boot up a development environment

There are some example components and associated story files which demonstrate how you can hook them up in storybook.

Core storybook allows for

* Displaying components in different states
* Adding controls to change props and see what happens
* Logging events

Additionally, the storybook can be published as a static webapp.

## Publishing UI component library

To publish new components

# update `src/index.js` to include new components
# `yarn run build` to generate a new dist/main.js

## Using components from Clojurescript reagent app

The `app` directory includes a simple CLJS app based on the CLJS webpack tutorial.  The `package.json` includes a dependency on the `../lib` dir.

To update the lib

# `rm -fR node_modules; yarn` will recopy the lib over.  (you could just copy the dist/main.js file over really)
# To use the lib require `caniusestories` and refer to the exported components.

You'll see an example of this in `app.core`

Rebuild your project, run the REPL:

```clj -m cljs.main -co build.edn -v -c -r```

To verify that externs inference allows advanced compilation to work, let’s make an advanced build. REPLs don’t work under advanced compilation so you’ll have to manually open http://localhost:9000:

```clj -m cljs.main -co build.edn -O advanced -v -c -s```

