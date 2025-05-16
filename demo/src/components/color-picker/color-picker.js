// JavaScript Implementation
class MaterialColorPicker {
  constructor(containerId = 'material-color-picker') {
    // State variables
    this.color = '#15EF00'
    this.hslColor = {}
    this.hue = 120 // Green hue in degrees
    this.isDraggingHue = false
    this.isDraggingShade = false
    this.position = { x: 245, y: 30 }

    // DOM elements
    this.container = document.getElementById(containerId)

    if (!this.container) {
      console.error('Color picker container not found!')
      return
    }

    this.elements = {
      primaryStrip: this.container.querySelector('#primary-color-strip'),
      primaryIndicator: this.container.querySelector('#primary-indicator'),
      shadePicker: this.container.querySelector('#shade-picker'),
      shadePickerFill: this.container.querySelector('.shade-picker-fill'),
      shadePickersaturator: this.container.querySelector('.shade-picker-saturator'),
      shadePickerValue: this.container.querySelector('.shade-picker-value'),
      shadeIndicator: this.container.querySelector('#shade-indicator'),
      hueSlider: this.container.querySelector('#hue-slider'),
      hueIndicator: this.container.querySelector('#hue-indicator'),
      colorPreview: this.container.querySelector('#color-preview'),
      colorHex: this.container.querySelector('#color-hex'),
      colorHexInput: this.container.querySelector('#color-hex-input'),
    }

    // Initialize the picker
    this.init()
  }

  init() {
    // Set initial styles
    this.updateShadePickerBackground()
    this.updatePrimaryColorStrip()
    this.updateHueIndicator()
    this.updateShadeIndicator()
    this.updateColorPreview()

    // Add event listeners
    this.setupEventListeners()
  }

  setupEventListeners() {
    // Hue slider events
    this.elements.hueSlider.addEventListener('mousedown', this.handleHueMouseDown.bind(this))
    this.elements.hueSlider.addEventListener('touchstart', this.handleHueTouchStart.bind(this), {
      passive: false,
    })

    // Shade picker events
    this.elements.shadePicker.addEventListener('mousedown', this.handleShadeMouseDown.bind(this))
    this.elements.shadePicker.addEventListener(
      'touchstart',
      this.handleShadeTouchStart.bind(this),
      { passive: false },
    )

    // Global mouse/touch events
    document.addEventListener('mousemove', this.handleMouseMove.bind(this))
    document.addEventListener('mouseup', this.handleEnd.bind(this))
    document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false })
    document.addEventListener('touchend', this.handleEnd.bind(this))
  }

  // Update UI methods
  updateShadePickerBackground() {
    const hueColor = `hsl(${this.hue}, 100%, 50%)`
    this.elements.shadePickerFill.style.background = hueColor
    this.elements.shadePickersaturator.style.background =
      'linear-gradient(to right, #fff, rgba(0, 0, 0, 0))'
    this.elements.shadePickerValue.style.background =
      'linear-gradient(to top, #000, rgba(0, 0, 0, 0))'

    // this.elements.shadePicker.style.backgroundBlendMode = 'multiply'
  }

  updatePrimaryColorStrip() {
    this.elements.primaryStrip.style.background = `linear-gradient(to right, #000000, ${this.color}, #FFFFFF)`
  }

  updateHueIndicator() {
    const position = (this.hue / 360) * 100
    this.elements.hueIndicator.style.left = `${position}%`
  }

  updateShadeIndicator() {
    this.elements.shadeIndicator.style.left = `${this.position.x}px`
    this.elements.shadeIndicator.style.top = `${this.position.y}px`
  }

  updateColorPreview() {
    this.elements.colorPreview.style.backgroundColor = this.color
    // this.elements.colorHex.textContent = this.color
    this.elements.colorHexInput.value = this.color
  }

  // Event handlers
  handleHueMouseDown(e) {
    this.isDraggingHue = true
    this.handleHueChange(e)
    e.preventDefault()
  }

  handleHueTouchStart(e) {
    this.isDraggingHue = true
    this.handleHueTouchChange(e)
    e.preventDefault()
  }

  handleShadeMouseDown(e) {
    this.isDraggingShade = true
    this.handleShadeChange(e)
    e.preventDefault()
  }

  handleShadeTouchStart(e) {
    this.isDraggingShade = true
    this.handleShadeTouchChange(e)
    e.preventDefault()
  }

  handleMouseMove(e) {
    if (this.isDraggingHue) this.handleHueChange(e)
    if (this.isDraggingShade) this.handleShadeChange(e)
  }

  handleTouchMove(e) {
    if (this.isDraggingHue) this.handleHueTouchChange(e)
    if (this.isDraggingShade) this.handleShadeTouchChange(e)

    if (this.isDraggingHue || this.isDraggingShade) {
      e.preventDefault()
    }
  }

  handleEnd() {
    this.isDraggingHue = false
    this.isDraggingShade = false
  }

  handleHueChange(e) {
    if (!this.elements.hueSlider || !this.isDraggingHue) return

    const rect = this.elements.hueSlider.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width

    // Calculate hue from position (0-360)
    this.hue = Math.min(359, Math.max(0, Math.round((x / width) * 360)))

    this.updateHueIndicator()
    this.updateShadePickerBackground()
    this.calculateColor()
  }

  handleHueTouchChange(e) {
    if (!this.elements.hueSlider || !this.isDraggingHue) return

    const touch = e.touches[0]
    const rect = this.elements.hueSlider.getBoundingClientRect()
    const x = touch.clientX - rect.left
    const width = rect.width

    // Calculate hue from position (0-360)
    this.hue = Math.min(359, Math.max(0, Math.round((x / width) * 360)))

    this.updateHueIndicator()
    this.updateShadePickerBackground()
    this.calculateColor()
  }

  handleShadeChange(e) {
    if (!this.elements.shadePicker || !this.isDraggingShade) return

    const rect = this.elements.shadePicker.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const width = rect.width
    const height = rect.height

    // Constrain position within bounds
    this.position.x = Math.min(width, Math.max(0, x))
    this.position.y = Math.min(height, Math.max(0, y))

    this.updateShadeIndicator()
    this.calculateColor()
  }

  handleShadeTouchChange(e) {
    if (!this.elements.shadePicker || !this.isDraggingShade) return

    const touch = e.touches[0]
    const rect = this.elements.shadePicker.getBoundingClientRect()
    const x = touch.clientX - rect.left
    const y = touch.clientY - rect.top
    const width = rect.width
    const height = rect.height

    // Constrain position within bounds
    this.position.x = Math.min(width, Math.max(0, x))
    this.position.y = Math.min(height, Math.max(0, y))

    this.updateShadeIndicator()
    this.calculateColor()
  }

  // Color calculation methods
  calculateColor() {
    if (!this.elements.shadePicker) return

    const width = this.elements.shadePicker.clientWidth
    const height = this.elements.shadePicker.clientHeight

    // Calculate saturation and value (brightness)
    const saturation = Math.min(1, Math.max(0, this.position.x / width))
    const value = Math.min(1, Math.max(0, 1 - this.position.y / height))

    console.log('saturator:', saturation)
    console.log('value:', value)
    // Convert HSV to RGB and then to hex
    const rgb = this.hsvToRgb(this.hue, saturation, value)
    this.color = this.rgbToHex(rgb.r, rgb.g, rgb.b)

    this.updatePrimaryColorStrip()
    this.updateColorPreview()
  }

  hsvToRgb(h, s, v) {
    h = h / 360
    let r, g, b

    const i = Math.floor(h * 6)
    const f = h * 6 - i
    const p = v * (1 - s)
    const q = v * (1 - f * s)
    const t = v * (1 - (1 - f) * s)

    switch (i % 6) {
      case 0:
        r = v
        g = t
        b = p
        break
      case 1:
        r = q
        g = v
        b = p
        break
      case 2:
        r = p
        g = v
        b = t
        break
      case 3:
        r = p
        g = q
        b = v
        break
      case 4:
        r = t
        g = p
        b = v
        break
      case 5:
        r = v
        g = p
        b = q
        break
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    }
  }

  rgbToHex(r, g, b) {
    const toHex = (c) => {
      const hex = c.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
  }

  // Public methods
  getColor() {
    return this.color
  }

  setColor(hexColor) {
    if (!hexColor || typeof hexColor !== 'string') return

    // Check if it's a valid hex color
    const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(hexColor)
    if (!isValidHex) {
      console.error('Invalid hex color format')
      return
    }

    // Convert hex to RGB
    let r, g, b
    if (hexColor.length === 4) {
      // Convert shorthand (#RGB) to full form (#RRGGBB)
      r = parseInt(hexColor[1] + hexColor[1], 16)
      g = parseInt(hexColor[2] + hexColor[2], 16)
      b = parseInt(hexColor[3] + hexColor[3], 16)
    } else {
      r = parseInt(hexColor.slice(1, 3), 16)
      g = parseInt(hexColor.slice(3, 5), 16)
      b = parseInt(hexColor.slice(5, 7), 16)
    }

    // Convert RGB to HSV
    const hsv = this.rgbToHsv(r, g, b)

    // Update hue
    this.hue = hsv.h

    // Update shade picker position based on saturation and value
    if (this.elements.shadePicker) {
      const width = this.elements.shadePicker.clientWidth
      const height = this.elements.shadePicker.clientHeight

      this.position.x = hsv.s * width
      this.position.y = (1 - hsv.v) * height
    }

    // Update color
    this.color = hexColor.toUpperCase()

    // Update UI
    this.updateHueIndicator()
    this.updateShadePickerBackground()
    this.updateShadeIndicator()
    this.updatePrimaryColorStrip()
    this.updateColorPreview()
  }
  rgbToHsv(r, g, b) {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const delta = max - min

    let h, s, v

    // Calculate value (brightness)
    v = max

    // Calculate saturation
    s = max === 0 ? 0 : delta / max

    // Calculate hue
    if (delta === 0) {
      h = 0 // No saturation, so hue is undefined (default to 0)
    } else {
      if (max === r) {
        h = ((g - b) / delta) % 6
      } else if (max === g) {
        h = (b - r) / delta + 2
      } else {
        h = (r - g) / delta + 4
      }

      h *= 60 // Convert to degrees

      if (h < 0) {
        h += 360
      }
    }

    return { h, s, v }
  }
}

export default MaterialColorPicker
