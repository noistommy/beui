export const dataSet = `// buttons data set
// 버튼 레이블만 사용
const buttons = ['button 1', 'button 2', 'button 3', ...]
// 버튼 레이블 및 props 사용
const buttons = [
    { contentText: 'button 1', button props ...  }
    { contentText: 'button 2', button props ...  }
    { contentText: 'button 3', button props ...  }
    ... ...
]
// buttons[]의 구성요소가 string 이면, Button의 contentText로 사용 됩니다.
// buttons[]의 구성 요소를 버튼 컴포넌트의 props로 구성 할 수 있습니다.`
export const buttons = `<!-- html -->
<div class="buttons">
    <div class="be-button"></button>
    <div class="be-button"></button>
    ...
    <div class="be-button"></button>
</div>
<!-- component -->
<!-- const buttons = [] -->
<!-- const selected = ref() -->
<BeButtons :buttons v-model="selected"></BeButtons>`
export const buttons_round = `<div class="buttons round">
    <div class="be-button"></button>
    <div class="be-button"></button>
    ...
    <div class="be-button"></button>
</div>
<!-- component -->
<!-- const buttons = [] -->
<BeButtons :buttons round></BeButtons>`
export const buttons_border = `<div class="buttons border">
    <div class="be-button"></button>
    <div class="be-button"></button>
    ...
    <div class="be-button"></button>
</div>
<!-- component -->
<!-- const buttons = [] -->
<BeButtons :buttons border></BeButtons>`
