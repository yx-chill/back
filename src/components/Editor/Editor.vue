<template>
  <div :class="wrapperClass">
    <label :for="id" class="form-label">{{ label }}</label>
    <EditorContent :editor="editor" />
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    id: String,
    modelValue: String,
    label: String,
    error: String,
    wrapperClass: [String, Array, Object],
  },

  setup() {
    const editor = useEditor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [StarterKit],
    });

    return { editor };
  },
};
</script>