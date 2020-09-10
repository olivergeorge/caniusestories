
clean:
	$(MAKE) -C lib clean
	$(MAKE) -C app clean

setup:
	$(MAKE) -C lib setup
	$(MAKE) -C app setup


build:
	$(MAKE) -C lib setup build
	$(MAKE) -C app setup build

release:
	$(MAKE) -C lib setup build
	$(MAKE) -C app setup release

