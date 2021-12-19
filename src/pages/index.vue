<template>
  <Layout>
   <div class="p-4">
     <PrimaryButton @click="open">顯示ㄊㄓ</PrimaryButton>

   </div>
  </Layout>
</template>

<script>
import { notify, errorNotify } from '@/composables/useNotification'

export default {
  setup () {
    const open = () => {
     errorNotify('更新成功')
    }
    return { open }
  },
}
</script>
