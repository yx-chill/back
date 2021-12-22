<template>
  <div class="flex items-center">
    <div class="flex flex-grow shadow rounded-md md:flex-grow-0">
      <Popover class="relative flex-shrink-0 -mr-px focus:z-[1]">
        <PopoverButton class="form-select pl-4 text-gray-600 rounded-r-none">
          篩選
        </PopoverButton>

        <TransitionZoom>
          <PopoverPanel class="absolute z-10 origin-top-left"
            v-slot="{ close }">
            <div class="mt-1 p-4 w-[270px] bg-white border border-gray-200
              rounded-md shadow-lg space-y-4">
              <div>
                <label class="text-gray-400 text-sm">建立日期</label>
                <div class="mt-1 flex">
                  <select v-model="form.created_date_compare"
                    class="form-select form-select-sm w-[100px] -mr-px focus:z-[1] rounded-r-none">
                    <option value="before">之前</option>
                    <option value="after">之後</option>
                  </select>
                  <input v-model="form.created_date_value"
                    type="date" class="form-input form-input-sm focus:z-[1] rounded-l-none">
                </div>
              </div>

              <div>
                <label class="text-gray-400 text-sm">瀏覽次數</label>
                <div class="mt-1 flex">
                  <select v-model="form.visits_compare"
                    class="form-select form-select-sm w-[100px] -mr-px focus:z-[1] rounded-r-none">
                    <option value="gt">大於</option>
                    <option value="lt">小於</option>
                  </select>
                  <input v-model="form.visits_count"
                    type="number" class="form-input form-input-sm focus:z-[1] rounded-l-none">
                </div>
              </div>

              <div>
                <label class="text-gray-400 text-sm">標籤</label>
                <div class="mt-1">
                  <label v-for="tag in tagOptions" :key="tag"
                    class="flex items-center">
                    <input v-model="form.tags" :value="tag"
                      type="checkbox" class="form-checkbox mr-1">
                    <span>{{ tag }}</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="text-gray-400 text-sm">軟刪除</label>
                <div class="mt-1">
                  <label class="flex items-center">
                    <input v-model="form.soft_delete" value="default"
                      type="radio" class="form-radio mr-1">
                    <span>默認</span>
                  </label>
                  <label class="flex items-center">
                    <input v-model="form.soft_delete" value="contains"
                      type="radio" class="form-radio mr-1">
                    <span>包含軟刪除</span>
                  </label>
                  <label class="flex items-center">
                    <input v-model="form.soft_delete" value="only"
                      type="radio" class="form-radio mr-1">
                    <span>只有軟刪除</span>
                  </label>
                </div>
              </div>

              <div class="flex justify-end space-x-2">
                <SecondaryButton class="btn-sm" @click="close">
                  取消
                </SecondaryButton>
                <PrimaryButton class="btn-sm" @click="submit(close)">
                  確定
                </PrimaryButton>
              </div>
            </div>
          </PopoverPanel>
        </TransitionZoom>

      </Popover>

      <input type="text" placeholder="搜尋..."
        class="form-input placeholder-gray-400 focus:z-[1] rounded-l-none
          md:max-w-[200px]" v-model="search" @keyup.enter="submitSearch">
    </div>

    <button type="button" @click="reset"
      class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500
        transition-colors duration-100">
      清除
    </button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  emits: ['filter', 'search', 'reset'],
  setup (props, { emit }) {
    const tagOptions = ref([
      '標籤一', '標籤二'
    ])
    const form = reactive({
      created_date_compare: null,
      created_date_value: null,
      visits_compare: null,
      visits_count: null,
      tags: [],
      soft_delete: 'default',
    })

    const search = ref('')

    const submit = (close) => {
      emit('filter', { ...form })
      close()
    }

    const submitSearch = () => {
      emit('search', search.value)
    }

    const reset = () => {
      form.created_date_compare = null
      form.created_date_value = null
      form.visits_compare = null
      form.visits_count = null
      form.tags = []
      form.soft_delete = 'default'
      search.value = ''
    }

    return { tagOptions, form, search, submit, submitSearch, reset }
  }
}
</script>
