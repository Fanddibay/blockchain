<script>
export default {
    methods: {
        toggleStatus() {
            const containerStatus = document.getElementById('statusCompleted');
            containerStatus.classList.toggle('hidden');
        }
    }
};
</script>

<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import MultiSelect from 'primevue/multiselect';
import Wishlist from './uikit/wishlist.vue';
</script>

<template>
    <!-- header -->
    <h3 class="text-2xl font-bold mb-4">Dashboard</h3>
    <img src="/src/assets/images/hero.png" class="w-full" alt="" />
    <div class="bg-white px-6 py-4 rounded-b-2">
        <div class="lg:flex items-center justify-between">
            <div class="flex items-center gap-2">
                <img src="/src/assets/images/shapeAvatars.png" alt="" />
                <div class="grid gap-y-2">
                    <div class="flex items-center gap-2">
                        <a href="/myProfile" class="text-2xl font-bold">Frank Ribery</a>
                        <span><i class="pi pi-verified bg-blue-400 rounded-full text-white"></i></span>
                    </div>
                    <div class="flex items-center gap-2">
                        <h5>Tengkulak Farmer</h5>
                        <i class="pi pi-sm pi-circle-fill text-gray-400" style="font-size: 5px"></i>
                        <p>Collector</p>
                    </div>
                </div>
            </div>
            <div class="grid gap-y-2 mt-4 lg:mt-0">
                <div @click="toggleStatus" class="border rounded-xl py-3 pl-4 pr-12 lg:w-[300px] cursor-pointer lg:flex items-center gap-4">
                    <p class="text-Blue-Primary text-sm font-medium">Status :</p>
                    <span class="text-green-400 text-sm font-medium">Completed</span>
                </div>
            </div>
        </div>
    </div>
    <!-- end header -->

    <div class="bg-white rounded-xl absolute hidden z-50 justify-end w-[350px] lg:end-10 mt-4 h-[300px] overflow-y-auto" id="statusCompleted">
        <div class="bg-[#F2F7F8] p-4 flex items-start justify-between">
            <div class="grid gap-y-1">
                <h6 class="text-lg font-bold">#BAT_201</h6>
                <p class="text-sm text-gray-600">Batch Details</p>
            </div>
            <a href="#">
                <i class="pi pi-times-circle"></i>
            </a>
        </div>
        <div class="p-4">
            <div class="grid gap-y-3">
                <div class="flex justify-between items-center">
                    <div class="grid gap-y-1">
                        <p class="text-gray-300">Created at</p>
                        <h5>July 22, 2024 at 10:00 pm</h5>
                    </div>
                    <div class="grid gap-y-1">
                        <p class="text-gray-300">Status</p>
                        <h5 class="text-green-400">Completed</h5>
                    </div>
                </div>
                <hr />
            </div>
            <div class="mt-4">
                <div class="mt-6 grow sm:mt-8 lg:mt-0">
                    <div class="space-y-6 rounded-lg bg-white p-4 dark:bg-gray-800">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Order history</h3>

                        <ol class="relative ms-3 border-s border-gray-200 dark:border-gray-700">
                            <li class="mb-10 ms-6">
                                <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                                    <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                                    </svg>
                                </span>
                                <h4 class="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">Estimated delivery in 24 Nov 2023</h4>
                                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Products delivered</p>
                            </li>

                            <li class="mb-10 ms-6">
                                <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                                    <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                                        />
                                    </svg>
                                </span>
                                <h4 class="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">Today</h4>
                                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Products being delivered</p>
                            </li>

                            <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                                <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                    </svg>
                                </span>
                                <h4 class="mb-0.5 font-semibold">23 Nov 2023, 15:15</h4>
                                <p class="text-sm">Products in the courier's warehouse</p>
                            </li>

                            <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                                <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                    </svg>
                                </span>
                                <h4 class="mb-0.5 text-base font-semibold">22 Nov 2023, 12:27</h4>
                                <p class="text-sm">Products delivered to the courier - DHL Express</p>
                            </li>

                            <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                                <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                    </svg>
                                </span>
                                <h4 class="mb-0.5 font-semibold">19 Nov 2023, 10:47</h4>
                                <p class="text-sm">Payment accepted - VISA Credit Card</p>
                            </li>

                            <li class="ms-6 text-primary-700 dark:text-primary-500">
                                <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                    </svg>
                                </span>
                                <div>
                                    <h4 class="mb-0.5 font-semibold">19 Nov 2023, 10:45</h4>
                                    <a href="#" class="text-sm font-medium hover:underline">Order placed - Receipt #647563</a>
                                </div>
                            </li>
                        </ol>

                        <div class="mt-4 pt-4 border-t border-gray-400">
                            <h5 class="text-sm text-gray-500 mb-4">Items</h5>
                            <div class="gap-4 sm:flex sm:items-center justify-between">
                                <img src="/src/assets/images/productName.png" alt="" />
                                <div class="grid gap-y-1">
                                    <h5 class="font-bold">Product Name</h5>
                                    <p class="text-xs text-gray-400">&lt;Type Product&gt;&lt;Asal Product&gt;</p>
                                </div>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Wishlist />
</template>

<style scoped></style>
