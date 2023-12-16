<script setup lang="ts">
import { withDefaults } from "vue";

type Props = {
  items: { id: string; name: string; isDisabled: boolean }[];
};
const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<{
  toggle: [id: string];
}>();

const colors = ["blue", "red", "green", "yellow", "indigo", "purple", "pink"];

const getColor = (idx: number) => {
  const index = idx >= colors.length ? idx - colors.length : idx;
  return colors[index];
};
</script>
<template>
  <button
    v-for="(item, idx) in props.items"
    id="badge-dismiss-default"
    :key="item.id"
    :class="[
      `inline-flex items-center px-2 py-1 me-2 my-1 text-sm font-medium`,
      `text-${getColor(idx)}-800  bg-${getColor(idx)}-100`,
      `rounded dark:bg-${getColor(idx)}-900 dark:text-${getColor(idx)}-300`,
      item.isDisabled && 'opacity-30',
    ]"
    data-dismiss-target="#badge-dismiss-default"
    aria-label="Remove"
    @click="emit('toggle', item.id)"
  >
    {{ item.name }}
  </button>
  <div v-show="false">
    <span
      id="badge-dismiss-default"
      class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
    >
      Default
      <button
        type="button"
        class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
        data-dismiss-target="#badge-dismiss-default"
        aria-label="Remove"
      >
        <svg
          class="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
    <span
      id="badge-dismiss-red"
      class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-300"
    >
      Red
      <button
        type="button"
        class="inline-flex items-center p-1 ms-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300"
        data-dismiss-target="#badge-dismiss-red"
        aria-label="Remove"
      >
        <svg
          class="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
    <span
      id="badge-dismiss-green"
      class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300"
    >
      Green
      <button
        type="button"
        class="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300"
        data-dismiss-target="#badge-dismiss-green"
        aria-label="Remove"
      >
        <svg
          class="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
    <span
      id="badge-dismiss-yellow"
      class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300"
    >
      Yellow
      <button
        type="button"
        class="inline-flex items-center p-1 ms-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300"
        data-dismiss-target="#badge-dismiss-yellow"
        aria-label="Remove"
      >
        <svg
          class="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
    <span
      id="badge-dismiss-indigo"
      class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-900 dark:text-indigo-300"
    >
      Indigo
      <button
        type="button"
        class="inline-flex items-center p-1 ms-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300"
        data-dismiss-target="#badge-dismiss-indigo"
        aria-label="Remove"
      >
        <svg
          class="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
    <span
      id="badge-dismiss-purple"
      class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-300"
    >
      Purple
      <button
        type="button"
        class="inline-flex items-center p-1 ms-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300"
        data-dismiss-target="#badge-dismiss-purple"
        aria-label="Remove"
      >
        <svg
          class="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
    <span
      id="badge-dismiss-pink"
      class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-pink-800 bg-pink-100 rounded dark:bg-pink-900 dark:text-pink-300"
    >
      Pink
      <button
        type="button"
        class="inline-flex items-center p-1 ms-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300"
        data-dismiss-target="#badge-dismiss-pink"
        aria-label="Remove"
      >
        <svg
          class="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
  </div>
</template>
