<template>
  <notifications>
    <template #body="{ item, close }">
      <div class="notification relative mx-4 mb-4 bg-white rounded-lg shadow-lg overflow-hidden"
        :class="`notification-${ item.type || 'default' }`">
        <div class="notification-inner flex p-3 border-l-4">
          <div>
            <heroicons-outline-check-circle v-if="item.type === 'success'"
              class="notification-icon"/>
            <heroicons-outline-information-circle v-else-if="item.type === 'warn'"
              class="notification-icon"/>
            <heroicons-outline-x-circle v-else-if="item.type === 'error'"
              class="notification-icon"/>
            <heroicons-outline-information-circle v-else class="notification-icon"/>

          </div>
          <div class="ml-2">
            <div class="mt-0.5 text-gray-600 font-normal tracking-wide">{{ item.title }}</div>
            <div v-if="item.text" class="mt-0.5 text-gray-400 text-sm">{{ item.text }}</div>

            <button class="absolute top-2 right-2 w-6 h-6 flex justify-center items-center text-gray-400
              hover:text-gray-500 transition-colors duration-100"
              :class="item.text ? 'top-2' : 'top-4'"
              type="button" @click="close">
              <heroicons-outline-x class="w-4 h-4"/>
            </button>
          </div>
        </div>
      </div>
    </template>
  </notifications>
</template>
