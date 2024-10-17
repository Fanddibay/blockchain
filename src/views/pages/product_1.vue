<script setup>
import Card from 'primevue/card';
import HeaderLayout from '../uikit/headerLayout.vue';
</script>

<template>
    <HeaderLayout />

    <div class="bg-white rounded-lg px-8 py-12 w-full">
        <div class="flex items-center gap-4">
            <a href="/" class="flex items-center gap-4 hover:text-Blue-Primary hover:underline"><i class="pi pi-arrow-left"></i></a>
            <h6 class="text-xl">Detail Product</h6>
        </div>
        <div class="mt-8 lg:flex items-start gap-6">
            <img src="/src/assets/images/productDetail.jpg" class="w-[364px] h-[340px]" alt="" />
            <div class="grid gap-y-4 w-full">
                <h5 class="font-bold text-lg uppercase">arabica coffee</h5>
                <ul class="grid gap-y-2">
                    <li>Asal : Sumatera</li>
                    <li>Petani : Anne Farmer</li>
                    <li>Ketersediaan : -</li>
                </ul>
                <ul class="grid gap-y-2 list-disc list-inside">
                    <li>Kopi arabika kadar kafeinnya lebih rendah dibandingkan kopi robusta</li>
                    <li>Dikenal dengan karakter rasa yang kompleks</li>
                    <li>Kadar kafein kopi arabika 2x lebih rendah dibandingkan kopi robusta</li>
                    <li>Kandungan acidity kopi arabika lebih tinggi dibandingkan kopi robusta</li>
                    <li>Proses Pascapanen Metode Fermentasi</li>
                </ul>
                <div class="justify-end text-end ml-auto mt-4">
                    <p>1 ETH</p>
                    <div class="flex gap-4 mt-2">
                        <a href="#" class="btnSecondary px-6 py-2">Wishlist</a>
                        <a href="#" class="btnPrimary px-6 py-2">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
