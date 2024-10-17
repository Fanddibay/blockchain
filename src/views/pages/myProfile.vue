<script setup>
import InputText from 'primevue/inputtext';

import InputNumber from 'primevue/inputnumber';

import HeaderLayout from '../uikit/headerLayout.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

import { ref } from 'vue';

const value = ref(null);
</script>

<script>
export default {
    methods: {
        toggle() {
            this.$router.push('/editProfile'); // Navigasi ke '/newRegister'
        }
    }
};
</script>

<template>
    <HeaderLayout />
    <div class="mt-6 bg-white rounded-lg p-6">
        <div class="lg:flex items-center justify-between">
            <div class="flex items-center gap-4">
                <a href="/"><i class="pi pi-arrow-left"></i></a>
                <h5 class="font-medium text-2xl">Profile Settings</h5>
            </div>
            <Button type="button" @click="toggle" class="btnSecondary mt-4 w-full sm:w-1/6 text-center rounded-lg px-4 py-2 gap-2 items-center"><i class="pi pi-pencil"></i> Edit Profile</Button>
        </div>
        <div class="mt-6">
            <div class="grid lg:grid-cols-2 lg:gap-x-24 gap-y-6 items-center justify-between">
                <div class="flex flex-col gap-2">
                    <label for="username">Username</label>
                    <InputText id="username" v-model="value" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="City">City</label>
                    <InputText id="City" v-model="City" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="username">Farm Name</label>
                    <InputText id="Farm Name" v-model="Farm" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="username">Country</label>
                    <InputText id="Country" v-model="Country" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="username">Phone Number</label>
                    <InputNumber id="phone" v-model="phone" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="username">Time Zone</label>
                    <InputText id="Time" v-model="Time" aria-describedby="username-help" />
                    <small id="username-help">Current Time: 10:02pm</small>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="username">Email Address</label>
                    <InputText id="Email" v-model="Email" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="username">Farm Address</label>
                    <InputText id="Farm" v-model="Farm" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
input {
    @apply w-full;
}
</style>
