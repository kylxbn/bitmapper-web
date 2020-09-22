<template>
  <q-page padding>
    <p>This is proof of concept. While the algorithm itself is done and working, this port is not.</p>
    <p>
      Choosing an audio file to play, this code will:
    </p>
    <ol>
      <li>Read the audio file</li>
      <li>Apply a 4000Hz low-pass filter</li>
      <li>Read the result bit-by-bit to add a small amount of white noise</li>
      <li>Read the output of the previous and output as audio</li>
    </ol>
    <p>This shows that what I want to do is technically possible, so development may continue.</p>

    <q-file filled bottom-slots v-model="audioFile" label="File to try playing" counter>
      <template v-slot:prepend>
        <q-icon name="cloud_upload" @click.stop />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click.stop="audioFile = null" class="cursor-pointer" />
      </template>

      <template v-slot:hint>
        Choose an audio file
      </template>
    </q-file>
    <q-btn label="Play" @click="play" color="primary" class="q-ma-sm" />
    <q-btn label="Stop" @click="pause" color="warning" class="q-ma-sm" /><br><br>

    <q-btn label="Create PNG" color="primary" @click="create" />
    <q-btn label="Download PNG" v-if="canvas1" color="positive" @click="download" />
  </q-page>
</template>

<script>
import { AudioGenerator } from '../libraries/generator.js'
import { BitmapEncoder } from '../libraries/encoder/encoder.js'

import download from 'downloadjs/download.js'

export default {
  name: 'PageIndex',
  data () {
    return {
      audioFile: null,
      audioGenerator: new AudioGenerator(),
      canvas1: null
    }
  },
  methods: {
    play () {
      this.audioGenerator.inputFile = this.audioFile
      this.audioGenerator.play()
    },
    pause () {
      this.audioGenerator.stop()
    },
    download () {
      var dataURL = this.canvas1.toDataURL('image/png')
      download(dataURL, 'image1.png', 'image/png')
    },
    create () {
      var encoder = new BitmapEncoder()
      this.canvas1 = encoder.encode()
    }
  }
}
</script>
