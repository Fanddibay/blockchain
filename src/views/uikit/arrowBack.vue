<template>
    <i @click="toggle"> <i class="pi pi-arrow-left"></i></i>
</template>

<script>
export default {
    methods: {
        toggle() {
            this.$router.push('/'); // Navigasi ke '/newRegister'
        }
    }
};
</script>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
