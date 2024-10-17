<script>
export default {
    data() {
        return {
            likedProducts: [], // Array to track liked status for each product
            products: [
                {
                    name: 'Omar Farmer',
                    description: 'Arabica / Gayo Aceh',
                    price: 1,
                    image: '/src/assets/images/product1.png',
                    link: 'pages/product_1'
                },
                {
                    name: 'Omar Farmer',
                    description: 'Arabica / Gayo Aceh',
                    price: 1,
                    image: '/src/assets/images/product2.png',
                    link: 'pages/product_1'
                },
                {
                    name: 'Omar Farmer',
                    description: 'Arabica / Gayo Aceh',
                    price: 1,
                    image: '/src/assets/images/product3.png',
                    link: 'pages/product_1'
                },
                {
                    name: 'Omar Farmer',
                    description: 'Arabica / Gayo Aceh',
                    price: 1,
                    image: '/src/assets/images/product4.png',
                    link: 'pages/product_1'
                },
                {
                    name: 'Omar Farmer',
                    description: 'Arabica / Gayo Aceh',
                    price: 1,
                    image: '/src/assets/images/product5.png',
                    link: 'pages/product_1'
                },
                {
                    name: 'Omar Farmer',
                    description: 'Arabica / Gayo Aceh',
                    price: 1,
                    image: '/src/assets/images/product6.png',
                    link: 'pages/product_1'
                },
                {
                    name: 'Omar Farmer',
                    description: 'Arabica / Gayo Aceh',
                    price: 1,
                    image: '/src/assets/images/product7.png',
                    link: 'pages/product_1'
                },
                {
                    name: 'Omar Farmer',
                    description: 'Arabica / Gayo Aceh',
                    price: 1,
                    image: '/src/assets/images/product8.png',
                    link: 'pages/product_1'
                }
            ]
        };
    },
    created() {
        // Initialize likedProducts array with "false" (not liked) for each product
        this.likedProducts = this.products.map(() => false);
    },
    methods: {
        toggleLike(index) {
            // Toggle the liked state for the clicked product
            this.likedProducts[index] = !this.likedProducts[index];
        }
    }
};
</script>

<template>
    <div class="bg-white lg:p-6 p-3 mt-6 w-full">
        <div class="sm:card p-4 lg:p-0">
            <Tabs value="0">
                <div class="lg:flex items-center justify-between">
                    <TabList>
                        <Tab value="0">All</Tab>
                        <Tab value="1">Robusta</Tab>
                        <Tab value="2">Arabica</Tab>
                        <Tab value="3">Others</Tab>
                    </TabList>
                    <div class="sm:card lg:flex gap-4 mt-6 lg:mt-0 justify-center items-center">
                        <!-- MultiSelect -->
                        <MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" filter optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Search and Filters" class="w-full md:w-80">
                            <template #optiongroup="slotProps">
                                <div class="flex items-center">
                                    <div>{{ slotProps.option.label }}</div>
                                </div>
                            </template>
                        </MultiSelect>

                        <!-- Tombol Clear -->
                        <button @click="clearSelection" class="p-button p-component w-full lg:w-1/3 mt-4 lg:mt-0"><i class="pi pi-times"></i> Clear</button>
                    </div>
                </div>
                <TabPanels>
                    <TabPanel value="0">
                        <div class="grid grid-cols lg:grid-cols-4 gap-2 relative">
                            <div v-for="(product, index) in products" :key="index" class="relative">
                                <div class="absolute top-0 right-0 bg-red-400 z-50">
                                    <i :class="likedProducts[index] ? 'pi pi-heart-fill' : 'pi pi-heart'" class="cursor-pointer text-white absolute right-7 top-5" style="font-size: 18px" @click="toggleLike(index)"></i>
                                </div>
                                <a class="imgProduct relative" :href="product.link">
                                    <img :src="product.image" alt="" />

                                    <div class="flex items-end gap-24 bottom-5 left-3 px-2.5 absolute">
                                        <div class="grid gap-y-1">
                                            <p class="text-sm font-light text-white">{{ product.description }}</p>
                                            <h5 class="font-bold text-lg text-white">{{ product.name }}</h5>
                                        </div>
                                        <p class="text-white font-light">{{ product.price }} <span class="font-bold text-white">ETH</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="card">
                            <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
                        </div>
                    </TabPanel>
                    <TabPanel value="1">
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel value="2">
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                    <TabPanel value="3">
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { ref } from 'vue';

const selectedCities = ref();
const groupedCities = ref([
    {
        label: 'Jenis',
        code: '',
        items: [
            { label: 'Arabica', value: 'Berlin' },
            { label: 'Robusta', value: 'Frankfurt' },
            { label: 'Gayo', value: 'Hamburg' }
        ]
    },
    {
        label: 'Asal',
        code: '',
        items: [
            { label: 'Aceh', value: 'Chicago' },
            { label: 'Ambon', value: 'Los Angeles' },
            { label: 'Banten', value: 'New York' },
            { label: 'Bengkulu', value: 'San Francisco' }
        ]
    }
]);

// Fungsi untuk mengosongkan pilihan
const clearSelection = () => {
    selectedCities.value = [];
};
</script>
