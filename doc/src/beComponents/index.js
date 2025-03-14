import BeButton from './button/BeButton.vue'
import BeInput from './input/BeInput.vue'
import BeInputNumber from './input/BeInputNumber.vue'
import BeCheckBox from './checkbox/BeCheckBox.vue'
import BeRadio from './checkbox/BeRadio.vue'
import BeCheckBoxGroup from './checkbox/BeCheckBoxGroup.vue'
import BeSwitch from './switch/BeSwitch.vue'
import BePagination from './pagination/BePagination.vue'
import BeSelectBox from './selectbox/BeSelectBox.vue'
import BeList from './list/BeList.vue'
import BeMessage from './message/BeMessage.vue'
import BeTable from './table/BeTable.vue'
import BePanel from './panel/BePanel.vue'

const be_ui = [
  { name: 'BeButton', comp: BeButton },
  { name: 'BeInput', comp: BeInput },
  { name: 'BeInputNumber', comp: BeInputNumber },
  { name: 'BeCheckBox', comp: BeCheckBox },
  { name: 'BeRadio', comp: BeRadio },
  { name: 'BeCheckBoxGroup', comp: BeCheckBoxGroup },
  { name: 'BeSwitch', comp: BeSwitch },
  { name: 'BePagination', comp: BePagination },
  { name: 'BeSelectBox', comp: BeSelectBox },
  { name: 'BeList', comp: BeList },
  { name: 'BeMessage', comp: BeMessage },
  { name: 'BeTable', comp: BeTable },
  { name: 'BePanel', comp: BePanel },
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
  BeInputNumber,
  BeCheckBox,
  BeRadio,
  BeCheckBoxGroup,
  BeSwitch,
  BePagination,
  BeSelectBox,
  BeList,
  BeMessage,
  BeTable,
  BePanel,
}
