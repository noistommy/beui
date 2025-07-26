<script setup>
import * as codes from '@/codes/card'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'

const lorem_text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quia quod magni.Repellendus numquam labore, aliquid voluptates dicta dignissimos beatae quidem repellat amet, vel fuga totam dolorum necessitatibus recusandae!'
</script>

<template>
  <div class="page-wrapper be container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <div class="desc">
            <div class="be-tag label lightblue">HTML</div>
          </div>
          <div class="contents-wrapper">
            <div class="be-card">
              <div class="contents">
                {{ lorem_text }}
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_html" lang="html"></CodeBlock>
        </section>
        <section>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeCard>{{ lorem_text }}</BeCard>
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #variants>
        <section>
          <h4>Title</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeCard title="TITLE">{{ lorem_text }}</BeCard>
          </div>
          <CodeBlock :code="codes.title" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Image</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeCard title="TITLE" image>
              <template #image>
                <img src="../assets/img/profile_img.png" alt="profile" />
              </template>
              <p>I`am Tommy</p>
            </BeCard>
          </div>
          <CodeBlock :code="codes.image" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Extra</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeCard title="TITLE" extra>
              {{ lorem_text }}
              <template #extra>Extra</template>
            </BeCard>
          </div>
          <CodeBlock :code="codes.extra" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Attached</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeCard title="TITLE" attached>
              <template #header>
                <div class="hd_content">
                  <div class="be-tag label red">HEAD</div>
                  <div class="be-button icon round small">
                    <div class="icon xi-close"></div>
                  </div>
                </div>
              </template>
              {{ lorem_text }}
              <template #footer>
                <div class="ft_content">
                  <button class="be-button">Detail</button>
                </div>
              </template>
            </BeCard>
          </div>
          <CodeBlock :code="codes.attached" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>border: false</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeCard title="TITLE" :border="false">
              {{ lorem_text }}
            </BeCard>
          </div>
          <CodeBlock :code="codes.border" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Float</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeCard title="TITLE" float>
              {{ lorem_text }}
            </BeCard>
          </div>
          <CodeBlock :code="codes.float" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Cards</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <div class="be-cards">
              <BeCard title="Card1">
                {{ lorem_text }}
              </BeCard>
              <BeCard title="Card2">
                {{ lorem_text }}
              </BeCard>
            </div>
          </div>
          <CodeBlock :code="codes.cards" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>

<style lang="scss">
.hd_content {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ft_content {
  padding: 5px;
  display: flex;
  justify-content: flex-end;
}
</style>
