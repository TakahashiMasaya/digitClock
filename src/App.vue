<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'

const hour = useDateFormat(useNow(), 'HH')
const min = useDateFormat(useNow(), 'mm')
const sec = useDateFormat(useNow(), 'ss')
</script>

<template>
  <div class="frame">
    <div class="frame__inner">
      <div class="frame___digit">
        <div
          :class="{
            display: true,
            [`d${hour.split('')[0] === '0' ? '-blank' : hour.split('')[0]}`]: true
          }"
        ></div>
        <div
          :class="{
            display: true,
            [`d${hour.split('')[1]}`]: true
          }"
        ></div>
        <div class="colon"></div>
        <div
          :class="{
            display: true,
            [`d${min.split('')[0]}`]: true
          }"
        ></div>
        <div
          :class="{
            display: true,
            [`d${min.split('')[1]}`]: true
          }"
        ></div>
        <div class="colon"></div>
        <div
          :class="{
            display: true,
            [`d${sec.split('')[0]}`]: true
          }"
        ></div>
        <div
          :class="{
            display: true,
            [`d${sec.split('')[1]}`]: true
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$digital-color: #eee;
$digital-empty-color: #111;
$digital-bgcolor: #333;

.frame {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  transform-origin: center;
  transform: scale(1.5);
}

.frame__inner {
  position: relative;
  padding: 20px;
  background-color: $digital-bgcolor;
  &::before {
    content: '';
    box-shadow: inset 0px 0px 10px 1px $digital-color;
    border-radius: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 30px 10px $digital-color;
    z-index: 3;
  }
}

.frame___digit {
  transform: skew(-10deg);
}

.colon {
  display: inline-block;
  width: 30px;
  height: 100px;
  position: relative;
  box-sizing: border-box;
}

.colon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: $digital-color;
  transform: translate(-50%, -200%);
  border-radius: 50%;
}

.colon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: $digital-color;
  transform: translate(-50%, 100%);
  border-radius: 50%;
}

.frame__inner * {
  box-sizing: initial;
  &::before,
  &::after {
    box-sizing: initial;
  }
}

.display {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 100px;
  border: solid 5px $digital-bgcolor;
  background-color: $digital-bgcolor;
  overflow: hidden;
}

.display::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 28px;
  height: 28px;
  transform: translate(-50%, -50%) rotate(45deg);
}

.display::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 12px;
  border-top: solid 30px $digital-bgcolor;
  border-bottom: solid 30px $digital-bgcolor;
  transform: translate(-50%, -50%);
}

.d-blank::before {
  background-color: $digital-empty-color;
  box-shadow:
    -30px -30px $digital-empty-color,
    0px -30px $digital-empty-color,
    -30px 0px $digital-empty-color,
    0px 30px $digital-empty-color,
    30px 0px $digital-empty-color,
    30px 30px $digital-empty-color;
}
.d0::before {
  background-color: $digital-empty-color;
  box-shadow:
    -30px -30px $digital-color,
    0px -30px $digital-color,
    -30px 0px $digital-color,
    0px 30px $digital-color,
    30px 0px $digital-color,
    30px 30px $digital-color;
}
.d1::before {
  background-color: $digital-empty-color;
  box-shadow:
    -30px -30px $digital-empty-color,
    0px -30px $digital-color,
    -30px 0px $digital-empty-color,
    0px 30px $digital-empty-color,
    30px 0px $digital-color,
    30px 30px $digital-empty-color;
}
.d2::before {
  background-color: $digital-color;
  box-shadow:
    -30px -30px $digital-color,
    0px -30px $digital-color,
    -30px 0px $digital-empty-color,
    0px 30px $digital-color,
    30px 0px $digital-empty-color,
    30px 30px $digital-color;
}
.d3::before {
  background-color: $digital-color;
  box-shadow:
    -30px -30px $digital-color,
    0px -30px $digital-color,
    -30px 0px $digital-empty-color,
    0px 30px $digital-empty-color,
    30px 0px $digital-color,
    30px 30px $digital-color;
}
.d4::before {
  background-color: $digital-color;
  box-shadow:
    -30px -30px $digital-empty-color,
    0px -30px $digital-color,
    -30px 0px $digital-color,
    0px 30px $digital-empty-color,
    30px 0px $digital-color,
    30px 30px $digital-empty-color;
}
.d5::before {
  background-color: $digital-color;
  box-shadow:
    -30px -30px $digital-color,
    0px -30px $digital-empty-color,
    -30px 0px $digital-color,
    0px 30px $digital-empty-color,
    30px 0px $digital-color,
    30px 30px $digital-color;
}
.d6::before {
  background-color: $digital-color;
  box-shadow:
    -30px -30px $digital-color,
    0px -30px $digital-empty-color,
    -30px 0px $digital-color,
    0px 30px $digital-color,
    30px 0px $digital-color,
    30px 30px $digital-color;
}
.d7::before {
  background-color: $digital-empty-color;
  box-shadow:
    -30px -30px $digital-color,
    0px -30px $digital-color,
    -30px 0px $digital-color,
    0px 30px $digital-empty-color,
    30px 0px $digital-color,
    30px 30px $digital-empty-color;
}
.d8::before {
  filter: blur(2);
  background-color: $digital-color;
  box-shadow:
    -30px -30px $digital-color,
    0px -30px $digital-color,
    -30px 0px $digital-color,
    0px 30px $digital-color,
    30px 0px $digital-color,
    30px 30px $digital-color;
}
.d9::before {
  background-color: $digital-color;
  box-shadow:
    -30px -30px $digital-color,
    0px -30px $digital-color,
    -30px 0px $digital-color,
    0px 30px $digital-empty-color,
    30px 0px $digital-color,
    30px 30px $digital-color;
}
</style>
