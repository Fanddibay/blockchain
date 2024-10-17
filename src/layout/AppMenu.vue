<script setup>
import { ref } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import AppConfigurator from './AppConfigurator.vue';
import { useRouter } from 'vue-router';
import Menu from 'primevue/menu';

import AppMenuItem from './AppMenuItem.vue';

import Tooltip from 'primevue/tooltip';
import { computed } from 'vue';
const { onMenuToggle, toggleDarkMode, isDarkTheme } = useLayout();
const menu = ref();

// State to track menu toggle status
const isMenuOpen = ref(true);

// Computed class for the icon, switching between arrow-right and arrow-left
const iconClass = computed(() => {
    return isMenuOpen.value ? 'pi pi-arrow-circle-left' : 'pi pi-arrow-circle-right';
});

// Function to toggle the menu
const onMenuToggles = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const model = ref([
    {
        label: 'Product',
        items: [
            { label: 'My Product', icon: 'pi pi-fw pi-shopping-bag', to: '/myProduct' },
            { label: 'Whistlist', icon: 'pi pi-fw pi-heart-fill', to: '/whistlist' }
        ]
    },
    {
        label: 'Task',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
            {
                label: 'Task Request',
                icon: 'pi pi-fw pi-file-word',
                to: '/taskRequest'
            },
            {
                label: 'My Task',
                icon: 'pi pi-fw pi-file',
                to: '/myTask'
            },
            {
                label: 'Completed Task',
                icon: 'pi pi-fw pi-file-edit',
                to: '/completedTask'
            }
        ]
    },
    {
        label: 'Tracking',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
            {
                label: 'Tracking Order',
                icon: 'pi pi-fw pi-map-marker',
                to: '/trackingOrders'
            }
        ]
    },
    {
        label: 'Management',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
            {
                label: 'User Management',
                icon: 'pi pi-fw pi-users',
                to: '/userManagement'
            },
            {
                label: 'Farmer Management',
                icon: 'pi pi-fw pi-truck',
                to: '/farmerManagement'
            }
        ]
    }
]);

const router = useRouter();

const items = ref([
    {
        label: 'New Form',
        items: [
            {
                label: 'New Register',
                icon: 'pi pi-plus',
                command: () => {
                    router.push('/newRegister'); // Navigate to New Register page
                }
            },
            {
                label: 'New Batch',
                icon: 'pi pi-user-plus',
                command: () => {
                    router.push('/newBatch'); // Navigate to New Batch page
                }
            }
        ]
    }
]);
</script>

<script>
export default {
    methods: {
        toggle() {
            this.$router.push('/newRegister'); // Navigasi ke '/newRegister'
        }
    }
};
</script>

<template>
    <div class="ml-24 justify-end text-end mb-6">
        <button class="layout-menu-button btnArrow layout-topbar-action text-white" @click="onMenuToggle">
            <!-- Conditional rendering for the icon -->
            <i :class="iconClass" style="font-size: 28px" @click="onMenuToggles"></i>
        </button>
    </div>
    <ul class="layout-menu">
        <div class="flex justify-center relative">
            <Button type="button" class="!bg-white rounded px-12 py-4 text-center w-full btnAddNew !text-Blue-Primary" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"> <i class="pi pi-plus"></i> <span>New Register</span> </Button>
        </div>

        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator" v-tooltip.right="items.label"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped>
ul.p-menu-list li.p-menu-submenu-label {
    display: none !important;
    overflow: hidden !important;
}
</style>
