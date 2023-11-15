EXTENSION_NAME = ttr-wiki-redirector
VERSION = 1.0
SOURCE_DIR = src
BUILD_DIR = build
OUTPUT_DIR = build/out
XPI_FILE = $(EXTENSION_NAME)_$(VERSION).xpi

ZIP = zip -r

all: build

build:
	rm -rf $(BUILD_DIR)
	mkdir -p $(BUILD_DIR)

	cp -r $(SOURCE_DIR)/* $(BUILD_DIR)
	cp manifest.json $(BUILD_DIR)
	sed -i 's/src\///g' $(BUILD_DIR)/manifest.json

	cd $(BUILD_DIR)/ && $(ZIP) $(XPI_FILE) *
	mkdir -p $(OUTPUT_DIR)
	mv $(BUILD_DIR)/$(XPI_FILE) $(OUTPUT_DIR)

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR)