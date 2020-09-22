class AudioGenerator {
  constructor () {
    this.inputFile = null
    this.generator = null
  }

  async play () {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)()

    const reader = new FileReader()
    reader.onload = (e) => {
      const audio = document.createElement('audio')
      audio.src = e.target.result
      const source = this.audioCtx.createMediaElementSource(audio)

      // Create a gain node
      const gainNode = this.audioCtx.createBiquadFilter()
      gainNode.type = 'lowpass'
      gainNode.frequency.setValueAtTime(0, 4000)

      const processor = this.audioCtx.createScriptProcessor(8192, 2, 2)
      this.processor = processor
      processor.onaudioprocess = (e) => {
        const ib = e.inputBuffer
        const ob = e.outputBuffer

        for (let channel = 0; channel < ob.numberOfChannels; channel++) {
          const inputData = ib.getChannelData(channel)
          const outputData = ob.getChannelData(channel)

          // Loop through the 4096 samples
          for (let sample = 0; sample < ib.length; sample++) {
            // make output equal to the same as the input
            outputData[sample] = inputData[sample] * 1.5

            // add noise to each output sample
            outputData[sample] += ((Math.random() * 2) - 1) * 0.05
          }
        }
      }
      // connect the AudioBufferSourceNode to the gainNode
      // and the gainNode to the destination, so we can play the
      // music and adjust the volume using the mouse cursor
      this.source = source
      source.connect(gainNode)
      this.gainNode = gainNode
      gainNode.connect(processor)
      this.processor = processor
      processor.connect(this.audioCtx.destination)
      audio.play()
    }
    reader.readAsDataURL(this.inputFile)
  }

  stop () {
    this.processor.disconnect()
    this.gainNode.disconnect()
    this.source.disconnect()
  }
}

export { AudioGenerator }
