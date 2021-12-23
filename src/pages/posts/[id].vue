<template>
  <Layout>
    <PageHeader>
      <template #title>
        <RouterLink to="/posts" class="link">文章</RouterLink>
        / 編輯文章
      </template>
    </PageHeader>

    <Card class="mt-6" stretch>
      <PostForm class="p-4" v-model="form"
        :tagsAutocompleteItems="tagsAutocompleteItems"
        @submit="submit" @submit-draft="submitDraft" />
      
      <Loading  :show="loading" text="保存中..." />
    </Card>
  </Layout>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { promiseTimeout } from '@vueuse/shared'
import { successNotify } from '@/composables/useNotification'

export default {
  setup () {
    const router = useRouter()

    const loading = ref(false)

    const tagsAutocompleteItems = ref([ 'Vue2', 'Vue3', 'JavaScript', 'TailwindCSS'])

    const form = reactive({
      title: '...',
      content: `安安`,
      image: null,
      description: 'tt',
      tags: ['123'],
    })

    const submit = async () => {
      loading.value = true
      await promiseTimeout(1000)
      loading.value = false

      router.push('/posts').then(() => {
        successNotify('文章發布成功')
      })
    }
    const submitDraft = async () => {
      loading.value = true
      await promiseTimeout(1000)
      loading.value = false

      router.push('/posts').then(() => {
        successNotify('草稿保存成功')
      })
    }

    return { form, submitDraft, submit, tagsAutocompleteItems, loading }
  }
}
</script>
