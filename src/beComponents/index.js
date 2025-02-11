import BeButton from './beButton/BeButton.vue'
import BeInput from './beInput/BeInput.vue'
import BeCheckBox from './beCheckBox/BeCheckBox.vue'
import BeSwitch from './beSwitch/BeSwitch.vue'
import BePagination from './bePagination/BePagination.vue'
// import BeSelectBox from './selectbox/BeSelectBox.vue'

const be_ui = [
  { name: 'BeButton', comp: BeButton },
  { name: 'BeInput', comp: BeInput },
  { name: 'BeCheckBox', comp: BeCheckBox },
  { name: 'BeSwitch', comp: BeSwitch },
  { name: 'BePagination', comp: BePagination },
  // { name: 'BeSelectBox', comp: BeSelectBox },
]
const install = (app) => {
  be_ui.forEach((comp) => {
    app.component(comp.name, comp.comp)
  })
}

export default {
  install,
  BeButton,
  BeInput,
  BeCheckBox,
  BeSwitch,
  BePagination,
}
