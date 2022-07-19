<template>
  <div class="mt">
    <div
      :class="{'open': open}"
      class="text"
    >
      <span
        :class="{'open-btn': open}"
        class="btn"
        @click="open = !open"
      >
        {{ open ? '收起' : '展开' }}
      </span>
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const open = ref(false);
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.mt {
  text-align: left;
  display: flex;
  font-size: 16px;
}
.text {
  line-height: 1.5;
  max-height: 3em;
  overflow: hidden;
  position: relative;
}

.text::before {
  content: '';
  float: right;
  width: 0;
  height: 100%;
  margin-bottom: -24px;
}
.text::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
}

.open::after {
    visibility: hidden;
}

.open{
  max-height: none;
}

/* .open + text::after {
  visibility: visible;
} */

.btn {
  float: right;
  background: lightblue;
  position: relative;
  clear: both;
  margin-left: 16px;
  border-radius: 4px;
  color: #fff;
}
.btn::before {
  content: '...';
  position: absolute;
  right: 100%;
  color: #000;
}

.open-btn::before {
  display: none;
}
</style>
