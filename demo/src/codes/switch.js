export const base_a =
  `<!-- html -->\n` +
  `<div class="be-switch slide">\n` +
  `   <input type="checkbox" />\n` +
  `   <span class="switch"></span>\n` +
  `</div>\n` +
  `<!-- component -->\n` +
  `<BeSwitch type="slide" v-model="switchValue"></BeSwitch>`
export const base_b =
  `<!-- html -->\n` +
  `<div class="be-switch slide inside">\n` +
  `   <input type="checkbox" />\n` +
  `   <span class="switch"></span>\n` +
  `</div>\n` +
  `<!-- component -->\n` +
  `<BeSwitch type="slide" :inside="true" v-model="switchValue"></BeSwitch>`
export const button =
  `<!-- html -->\n` +
  `<div class="be-switch button">\n` +
  `   <input type="checkbox" />\n` +
  `   <span class="on active"></span>\n` +
  `   <span class="off"></span>\n` +
  `</div>\n` +
  `<!-- component -->\n` +
  `<BeSwitch type="button" on-text="A" off-text="B"></BeSwitch>`
export const round =
  `<!-- html -->\n` +
  `<div class="be-switch slide round">\n` +
  `   <input type="checkbox" />\n` +
  `   <span class="switch"></span>\n` +
  `</div>\n` +
  `<!-- component -->\n` +
  `<BeSwitch type="slide" round></BeSwitch>`
export const colors =
  `<!-- html -->\n` +
  `<div class="be-switch slide {color}">\n` +
  `   <input type="checkbox" />\n` +
  `   <span class="switch"></span>\n` +
  `</div>\n` +
  `<!-- component -->\n` +
  `<BeSwitch type="slide" color="{color}"></BeSwitch>`
