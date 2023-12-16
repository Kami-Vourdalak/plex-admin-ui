<script setup lang="ts">
import { ref } from "vue";
import { format } from "date-fns";
import AppButton from "./AppButton.vue";
import PillsList from "./PillsList.vue";

const users = ref([
  {
    id: "1",
    name: "Sergio Touset Lopez",
    memberFrom: format(new Date(), "dd/MM/yyyy"),
    expirationDate: format(new Date(), "dd/MM/yyyy"),
    libraries: [
      { id: "abc123", name: "Marvel" },
      { id: "def456", name: "Series españolas" },
      { id: "ghi789", name: "Disney" },
      { id: "jkl012", name: "dibujos" },
    ].map((l) => l.id),
  },
  {
    id: "1",
    name: "Carlos",
    memberFrom: format(new Date("01/01/2023"), "dd/MM/yyyy"),
    expirationDate: format(new Date("01/01/2027"), "dd/MM/yyyy"),
    libraries: [
      { id: "abc123", name: "Marvel" },
      { id: "ghi789", name: "Disney" },
      { id: "jkl012", name: "dibujos" },
    ].map((l) => l.id),
  },
]);

const libraries = ref([
  { id: "abc123", name: "Marvel" },
  { id: "def456", name: "Series españolas" },
  { id: "ghi789", name: "Disney" },
  { id: "jkl012", name: "dibujos" },
  { id: "ad3qer", name: "Japonesas" },
  { id: "ad21qr", name: "Coreanas" },
  { id: "kd2311", name: "Anime" },
  { id: "klaqa2", name: "Telenovelas" },
  { id: "p19msk", name: "Booliwood" },
  { id: "o19mxk", name: "Pelis malas" },
]);

function handleLibraryClick(libraryId: string, user: any) {
  if (user.libraries.includes(libraryId)) {
    user.libraries = user.libraries.filter((id: string) => id !== libraryId);
  } else {
    user.libraries.push(libraryId);
  }
}
</script>
<template>
  <section>
    <div class="relative overflow-x-auto">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">{{ $t("userList.name") }}</th>
            <th scope="col" class="px-6 py-3">
              {{ $t("userList.memberFrom") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("userList.expirationDate") }}
            </th>
            <th scope="col" class="px-6 py-3">
              {{ $t("userList.libraries") }}
            </th>
            <th scope="col" class="px-6 py-3">{{ $t("userList.manage") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ user.name }}
            </th>
            <td class="px-6 py-4">{{ user.memberFrom }}</td>
            <td class="px-6 py-4">{{ user.expirationDate }}</td>
            <td class="px-6 py-4">
              <pills-list
                :items="
                  libraries.map((library) => ({
                    ...library,
                    isDisabled: !user.libraries.includes(library.id),
                  }))
                "
                @toggle="handleLibraryClick($event, user)"
              />
            </td>
            <td class="px-6 py-4">
              <AppButton type="button">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z"
                  />
                  <path
                    d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z"
                  />
                </svg>
              </AppButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
