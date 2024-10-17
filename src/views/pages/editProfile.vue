<script setup>
import InputText from 'primevue/inputtext';

import HeaderLayout from '../uikit/headerLayout.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

import { ref } from 'vue';
</script>

<template>
    <HeaderLayout />
    <div class="mt-6 bg-white rounded-lg p-6">
        <div class="lg:flex items-center justify-between">
            <div class="flex items-center gap-4">
                <routerLink to="/myProfile"><i class="pi pi-arrow-left"></i></routerLink>
                <h5 class="font-medium text-2xl">Profile Settings</h5>
            </div>
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
        <div class="justify-end text-end mt-8">
            <div class="flex items-center text-end justify-end gap-4">
                <router-link to="/myProfile"><p class="btnSecondary py-2 px-4 rounded-lg">Cancel</p></router-link>
                <router-link to="/myProfile"><p class="btnPrimary py-2 px-4 rounded-lg">Save Changes</p></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
