# Bitmapper (bitmapper)

Generic image file container / codec, ported for the web

More explanation to come soon

## Current stage

This is proof of concept. While the algorithm itself is done and working, this port is not.

Choosing an audio file to play, this code will:

* Read the audio file
* Apply a 4000Hz low-pass filter
* Read the result bit-by-bit to add a small amount of white noise
* Read the output of the previous and output as audio

This shows that what I want to do is technically possible, so development may continue.</p>

## Building

* Install the dependencies
```bash
yarn
```

* Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

* Lint the files
```bash
yarn run lint
```

* Build the app for production
```bash
quasar build
```
