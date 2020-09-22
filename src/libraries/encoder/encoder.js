class BitmapEncoder {
  encode () {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 20
    const ctx = canvas.getContext('2d')

    const pixel0 = ctx.createImageData(1, 1)
    const pixel0d = pixel0.data
    pixel0d[0] = 0
    pixel0d[1] = 0
    pixel0d[2] = 0
    pixel0d[3] = 255

    for (let x = 0; x < 1024; x++) {
      for (let y = 0; y < 20; y++) {
        if (Math.random() > 0.5) {
          ctx.putImageData(pixel0, x, y)
        }
      }
    }

    return canvas
  }
}

export { BitmapEncoder }
