
clean:
	# Fresh start
	rm -fR lib/lib lib/node_modules app/out app/node_modules

setup:
	# Fetch deps
	cd lib; yarn
	cd app; yarn

link:
	# Seem lib changes immediately by using a symlink for app/node_modules/caniusestories
	cd lib; yarn link
	cd app; yarn link caniusestories

build:
	cd lib; yarn; yarn run build
	cd app; yarn; clj -m cljs.main -co build.edn -v -c

release:
	cd lib; yarn; yarn run build
	cd app; yarn; clj -m cljs.main -co build.edn -O advanced -v -c

