<template>
  <Layout>
   <div class="p-4">
     <PrimaryButton @click="showModal = true">開啟視窗</PrimaryButton>
     <Modal v-model="showModal">
     <!-- v-bind:model-value="showModal" @update:model-value="" -->
        <template #title>
          安安
        </template>
        <template #content>
          內容
        </template>
     </Modal>
   </div>
  </Layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const showModal = ref(true)

    return { showModal }
  },
}
</script>