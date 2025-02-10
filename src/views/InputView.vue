<script setup>
const placeholder = '입력하세요'
</script>
<template>
  <div class="page-wrapper be-container">
    <div class="summary">
      <div class="be-message info">
        @baseFont 14px
      </div>
    </div>
    <section>
      <h4 class="title">Base</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input">
          <input type="text" :placeholder="placeholder" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Disabled</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input disabled">
          <input type="text" :placeholder="placeholder" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Readonly</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input readonly">
          <input type="text" :placeholder="placeholder" />
        </div>
        <div class="be-input">
          <input type="text" readonly :placeholder="placeholder" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Underline</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input underline">
          <input type="text" :placeholder="placeholder" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Transparent</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input transparent">
          <input type="text" :placeholder="placeholder" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Compact</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input compact">
          <input type="text" :placeholder="placeholder" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Edit</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input edit">
          <input type="text" placeholder="일반 모드" />
        </div>
        <div class="be-input edit editable">
          <input type="text" placeholder="수정 모드" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Status</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input success">
          <input type="text" placeholder="success mode" />
        </div>
        <div class="be-input danger">
          <input type="text" placeholder="danger mode" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Fluid</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input fluid">
          <input type="text" :placeholder="placeholder" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Unit</h4>
      <div class="desc">1글자 unit만 적용 (대, 개, 월, 일, 명, 년...)</div>
      <div class="contents-wrapper">
        <div class="be-input unit" data-unit="대">
          <input type="text" :placeholder="placeholder" class="align-right" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Icon</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input icon left">
          <i class="icon xi-search"></i>
          <input type="text" :placeholder="placeholder" />
        </div>
        <div class="be-input icon right">
          <input type="text" :placeholder="placeholder" />
          <i class="icon xi-close"></i>
        </div>
        <div class="be-input icon both">
          <i class="icon xi-search"></i>
          <input type="text" :placeholder="placeholder" />
          <i class="icon xi-close"></i>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Badge</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input badge">
          <input type="text" :placeholder="placeholder" />
          <span class="be-badge red">R</span>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Label</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input labeled right">
          <input type="text" :placeholder="placeholder" />
          <label>$</label>
        </div>
        <div class="be-input labeled left">
          <input type="text" :placeholder="placeholder" />
          <label>Name</label>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Button</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input button left">
          <input type="text" :placeholder="placeholder" />
          <button class="be-button primary">Save</button>
        </div>
        <div class="be-input button right">
          <input type="text" :placeholder="placeholder" />
          <button class="be-button icon"><i class="ixon xi-upload"></i></button>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Textarea</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-input fluid">
          <textarea type="text" :placeholder="placeholder" ></textarea>
        </div>
        <div class="be-input fluid short">
          <textarea type="text" :placeholder="placeholder" ></textarea>
        </div>
      </div>
    </section>
  </div>
</template>
