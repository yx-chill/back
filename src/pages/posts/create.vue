<template>
  <Layout>
    <PageHeader>
      <template #title>
        <RouterLink to="/posts" class="link">文章</RouterLink>
        / 新增文章
      </template>
    </PageHeader>

    <Card class="mt-6" stretch>
      <div class="p-4 grid gap-6 lg:grid-cols-12">
        <div class="space-y-6 lg:col-span-8 xl:grid-cols-9">
          <TextInput id="title" v-model="form.title" label="文章標題" />

          <TextareaInput id="content" v-model="form.content"
            label="文章內容" class="h-[200px]" />
          <!-- 電腦板 送出按鈕 -->
          <div class="hidden lg:flex lg:justify-end lg:items-center lg:space-x-4">
            <SecondaryButton @click="submitDraft">保存草稿</SecondaryButton>
            <PrimaryButton @click="submit">發布文章</PrimaryButton>
          </div>
        </div>

        <div class="space-y-6 lg:col-span-4 xl:col-span-3">
          <ImageUpload label="縮圖" id="image" v-model="form.image"
             />
            <!-- default-image="https://picsum.photos/800/450" -->

          <TextareaInput id="description" v-model="form.description" label="文章簡介" />
          <div>
            <label for="tags" class="form-label">標籤</label>
            <input type="text" class="form-input" id="tags" v-model="form.tags">
            <div class="form-error">請輸入標題</div>
          </div>
          <!-- 手機板 送出按鈕 -->
          <div class="grid grid-cols-2 gap-4 lg:hidden">
            <SecondaryButton @click="submitDraft">保存草稿</SecondaryButton>
            <PrimaryButton @click="submit">發布文章</PrimaryButton>
          </div>
        </div>
      </div>
    </Card>
  </Layout>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { successNotify } from '@/composables/useNotification'

export default {
  setup () {
    const router = useRouter()

    const form = reactive({
      title: '',
      content: `安安`,
      image: null,
      description: '',
      tags: '',
    })

    const submit = () => {
      router.push('/posts').then(() => {
        successNotify('文章發布成功')
      })
    }
    const submitDraft = () => {
      router.push('/posts').then(() => {
        successNotify('草稿保存成功')
      })
    }

    return { form, submitDraft, submit }
  }
}
</script>
