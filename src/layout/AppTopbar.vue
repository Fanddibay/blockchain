<script setup>
import { useLayout } from '@/layout/composables/layout';
import AppConfigurator from './AppConfigurator.vue';
import { ref, computed } from 'vue';

import Toast from 'primevue/toast';

const { onMenuToggle, toggleDarkMode, isDarkTheme } = useLayout();
// State to track menu toggle status
</script>

<template>
    <div class="layout-topbar !bg-[#046378] !text-white">
        <div class="layout-topbar-logo-container">
            <div class="lg:hidden block">
                <button class="layout-menu-button layout-topbar-action text-white pr-4" @click="onMenuToggle">
                    <!-- Conditional rendering for the icon -->
                    <i class="pi pi-arrow-circle-right" style="font-size: 20px"></i>
                </button>
            </div>
            <router-link to="/" class="layout-topbar-logo">
                <img src="/src/assets/images/Logo.png" alt="" />
            </router-link>
        </div>

        <div class="layout-topbar-actions flex items-center">
            <!-- <button
                class="layout-topbar-menu-button layout-topbar-action"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
            >
                <i class="pi pi-notification"></i>
            </button> -->

            <div class="">
                <div class="flex gap-4 items-center">
                    <div class="relative">
                        <!-- Notification Button -->
                        <button type="button" class="mt-1" @click="showNotification">
                            <div class="">
                                <i class="pi pi-bell" style="font-size: 18px"></i>

                                <!-- Red dot indicator -->
                            </div>
                        </button>

                        <!-- PrimeVue Toast for notifications -->
                        <Toast ref="toast" position="top-right" />
                    </div>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-cog"></i>
                        <span>Messages</span>
                    </button>
                    <routerLink to="/myProfile">
                        <img src="/src/assets/images/Avatar.png" alt="" />
                    </routerLink>
                    <router-link to="auth/Login">Logout</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Toast
    },
    data() {
        return {
            showRedDot: true // Controls the visibility of the red dot
        };
    },
    methods: {
        showNotification() {
            // Hide the red dot when the notification button is clicked
            this.showRedDot = false;

            // Show the toast notification
            this.$refs.toast.add({
                severity: 'info',
                summary: this.renderToastHeader(),
                detail: this.renderToastDetail(),
                life: 5000,
                closable: true,
                class: 'custom-toast' // Custom class for further styling
            });
        },
        renderToastHeader() {
            return `
        <div class="flex items-center space-x-3">
          <img src="https://via.placeholder.com/40" alt="Avatar" class="rounded-full w-10 h-10">
          <div>
            <h4 class="text-sm font-semibold text-gray-900">New Notification</h4>
            <small class="text-xs text-gray-500">Just now</small>
          </div>
        </div>
      `;
        },
        renderToastDetail() {
            return `
        <div class="mt-2">
          <h5 class="text-base font-semibold text-gray-800">Notification Title</h5>
          <p class="text-sm text-gray-600">This is a short description of the notification, providing more details to the user.</p>
        </div>
      `;
        }
    }
};
</script>
<style scoped>
/* Custom styling for the toast using TailwindCSS */
</style>
