<template>
  <Layout>
    <PageHeader>
      <template #title>個人資料</template>
    </PageHeader>

    <Card class="mt-6" stretch>
      <CardContent>
        <form @submit.prevent="submit">
          <div class="grid gap-6 md:grid-cols-12">
            <div class="space-y-6 md:col-span-9">
              <TextInput label="姓名" id="name" v-model="form.name" />
              <TextareaInput label="介紹" id="description" v-model="form.description"
                class="h-28" />
            </div>

            <div class="text-center order-first md:col-span-3 md:order-none">
            <ImageUpload id="avatar" v-model="form.avatar" :default-image="defaultAvatar"
              image-class="aspect-w-1 aspect-h-1 rounded-full"
              image-wrapper-class="w-32 mx-auto" />
            </div>

            <div class="md:col-span-6">
              <TextInput label="E-mail" type="email" id="email" v-model="form.email" />
            </div>

            <div class="md:col-span-6">
              <TextInput label="密碼" type="password" id="password" v-model="form.password" />
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <PrimaryButton type="submit" class="w-full md:w-auto">
              儲存設定
            </PrimaryButton>
          </div>
        </form>
      </CardContent>
      <Loading  :show="loading" text="保存中..." />
    </Card>
  </Layout>
</template>

<script>
import { ref, reactive } from 'vue'
import { promiseTimeout } from '@vueuse/core'
import Loading from '@/components/Loading.vue'
import { successNotify } from '@/composables/useNotification'

export default {
  components: { Loading },
  setup () {
    const loading = ref(false)

    const form = reactive({
      name: 'HuaNan',
      description: '安安',
      avatar: null,
      email: 'test@gmail.com',
      password: '',
    })

    const defaultAvatar = ref('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hzKxc4X2Wcrc8GIG_o3yBsppm4STeoWMGQ&usqp=CAU')

    const submit = async () => {
      loading.value = true
      await promiseTimeout(1000)
      loading.value = false

      successNotify('個人資料保存成功')
    }

    return { loading, form, defaultAvatar, submit }
  }
}
</script>
