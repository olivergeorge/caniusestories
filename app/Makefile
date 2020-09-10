
clean:
	rm -fR out node_modules

setup:
	yarn
	yarn link caniusestories-lib

build:
	clj -m cljs.main -co build.edn -v -c -r

release:
	clj -m cljs.main -co build.edn -O advanced -v -c -s

