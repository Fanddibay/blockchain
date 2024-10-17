<script setup>
import HeaderLayout from '../uikit/headerLayout.vue';
import OrderCard from '../uikit/orderCard.vue';

import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import MultiSelect from 'primevue/multiselect';
</script>

<template>
    <header-layout />
    <div class="bg-white rounded-lg p-4">
        <Tabs value="0">
            <div class="lg:flex items-center justify-between">
                <TabList>
                    <div class="lg:flex">
                        <Tab value="0">All</Tab>
                        <Tab value="1">In Progress</Tab>
                        <Tab value="2">Completed</Tab>
                        <Tab value="3">Cancelled</Tab>
                    </div>
                </TabList>
                <IconField class="mt-4 lg:mt-0">
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="value1" placeholder="Search" />
                </IconField>
            </div>
            <TabPanels>
                <TabPanel value="0">
                    <div class="grid gap-y-4 lg:grid-cols-3 items-start overflow-auto w-full">
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                    </div>
                    <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
                </TabPanel>
                <TabPanel value="1">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel value="2">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
                <TabPanel value="3">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<style scoped></style>
