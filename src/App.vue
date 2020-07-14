<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      // Prevent insertion of 'webflow' badge
      document.addEventListener("DOMNodeInserted", function (e) {
        if(e.srcElement.className == 'w-webflow-badge') {
          e.srcElement.parentElement.removeChild(e.srcElement);
        }
      });
    }
  }
</script>