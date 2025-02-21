import BeButton from './button/BeButton.vue'
import BeInput from './input/BeInput.vue'
import BeCheckBox from './checkbox/BeCheckBox.vue'
import BeSwitch from './switch/BeSwitch.vue'
import BePagination from './pagination/BePagination.vue'
import BeSelectBox from './selectbox/BeSelectBox.vue'
import BeList from './list/BeList.vue'

const be_ui = [
  { name: 'BeButton', comp: BeButton },
  { name: 'BeInput', comp: BeInput },
  { name: 'BeCheckBox', comp: BeCheckBox },
  { name: 'BeSwitch', comp: BeSwitch },
  { name: 'BePagination', comp: BePagination },
  { name: 'BeSelectBox', comp: BeSelectBox },
  { name: 'BeList', comp: BeList },
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
  BeSelectBox,
  BeList,
}
