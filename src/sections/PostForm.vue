<template>
  <div class="grid gap-6 lg:grid-cols-12">
    <div class="space-y-6 lg:col-span-8 xl:grid-cols-9">
      <TextInput id="title" v-model="form.title" label="文章標題" />

      <!-- <TextareaInput id="content" v-model="form.content"
        label="文章內容" class="h-[200px]" /> -->
      <Editor label="文章內容" id="content" />
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

      <TextareaInput label="文章簡介" id="description" v-model="form.description" />

      <TagsInput label="標籤" id="tags" v-model="form.tags"
        :autocomplete-items="tagsAutocompleteItems" />
      <!-- 手機板 送出按鈕 -->
      <div class="grid grid-cols-2 gap-4 lg:hidden">
        <SecondaryButton @click="submitDraft">保存草稿</SecondaryButton>
        <PrimaryButton @click="submit">發布文章</PrimaryButton>
      </div>
    </div>
  </div>
</template>

<script>
import { useVModel } from '@vueuse/core'

export default {
  emit: ['update:modelValue', 'submit', 'submit-draft'],
  props: {
    modelValue: Object,
    tagsAutocompleteItems: Array,
  },
  setup (props, { emit }) {
    const form = useVModel(props)

    const submit = () => {
      emit('submit')
    }
    const submitDraft = () => {
      emit('submitDraft')
    }

    return { form, submit, submitDraft }
  }
}
</script>
