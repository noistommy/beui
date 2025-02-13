import Tooltip from './tooltip'
import './tooltip.css'
const defaultOpt = {
  trigger: 'hover', // click | hover
  maxWidth: 200,
  size: 'normal',
  theme: 'dark', // light | dark
  direction: 'top', // top | bottom | left | right
  align: 'center', // start | center | end
  transition: 'linear',
  textAlign: 'left',
  offset: 10,
  customClass: 'be-tooltip',
  isUse: true,
}

export default {
  install(app, options = {}) {
    const extendOption = { ...defaultOpt, ...options }
    app.directive('be-tooltip', Tooltip(extendOption))
  },
}
