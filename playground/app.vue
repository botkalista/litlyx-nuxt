<script setup lang="ts">

const { event } = useLitlyx();

function sendEvent() {
  event('test');
}

</script>

<template>
  <div>

    <button @click="sendEvent"> Test event </button>

  </div>
</template>
