<script setup lang="ts">

const a = useLitlyx();

function sendEvent() {
  a.event('test', { a: 123 })
}

</script>


<template>
  <div>
    <button @click="sendEvent()"> </button>
  </div>
</template>
