<script setup>
import { ref } from 'vue';

import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';

import Select from 'primevue/select';

import InputText from 'primevue/inputtext';

const selectedCity = ref();
const cities = ref([
    { name: 'Tengkulak', code: 'NY' },
    { name: 'Pengepul', code: 'RM' },
    { name: 'Petani', code: 'LDN' },
    { name: 'Investor', code: 'IST' }
]);

const selectedData = ref();
const dataAmount = ref([
    { name: '1', code: '1' },
    { name: '2', code: '2' },
    { name: '3', code: '3' },
    { name: '4', code: '4' }
]);
</script>

<template>
    <div class="card flex justify-center">
        <Stepper value="1" class="basis-[50rem]">
            <StepList>
                <div class="px-12 text-center mx-auto gap-12 flex">
                    <Step value="1">New Order</Step>
                    <Step value="2">Succeed</Step>
                </div>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <label for="step1"> Step 1 </label>
                    <h5 class="font-bold pb-4">General Info</h5>
                    <hr />
                    <div class="grid gap-y-4 mt-4">
                        <div class="lg:flex items-center gap-4 w-full">
                            <div class="flex flex-col gap-2 w-full">
                                <label for="username">First Name</label>
                                <InputText id="username" class="w-full" v-model="value" aria-describedby="username-help" />
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="username">Last Name</label>
                                <InputText class="w-full" id="username" v-model="value" aria-describedby="username-help" />
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 w-full">
                            <label for="username">Email</label>
                            <InputText class="w-full" id="username" v-model="value" aria-describedby="username-help" />
                        </div>
                        <div class="flex gap-4 items-end">
                            <div class="flex gap-2 flex-col justify-center w-full">
                                <label for="Farm">Farm</label>
                                <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" checkmark :highlightOnSelect="false" class="w-full px-0" />
                            </div>
                            <button class="border-2 border-Blue-Primary text-Blue-Primary py-2 px-2 rounded-lg w-1/6"><i class="pi pi-plus"> New</i></button>
                        </div>
                        <div class="flex gap-4 items-end">
                            <div class="flex gap-2 flex-col justify-center w-full">
                                <label for="Farm">Product type</label>
                                <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" checkmark :highlightOnSelect="false" class="w-full px-0" />
                            </div>
                            <button class="border-2 border-Blue-Primary text-Blue-Primary py-2 px-2 rounded-lg w-1/6"><i class="pi pi-plus"> New</i></button>
                        </div>
                        <div class="flex gap-4 items-end">
                            <div class="flex gap-2 flex-col justify-center w-full">
                                <label for="Farm">Product type</label>
                                <Select v-model="selectedData" :options="dataAmount" optionLabel="name" placeholder="e.g 10" checkmark :highlightOnSelect="false" class="w-full px-0" />
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="batch">Batch</label>
                                <InputText id="batch" placeholder="e.g Summer 2022" class="w-full" v-model="value" aria-describedby="username-help" />
                            </div>
                        </div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <Button label="Next" class="w-full !bg-Blue-Primary" iconPos="right" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <label for="step1"> Step 1 </label>
                    <h5 class="font-bold pb-4">General Info</h5>
                    <hr />
                    <div class="mt-12 mx-auto text-center mb-48">
                        <img src="/src/assets/images/Checklist.png" class="mx-auto" alt="" />
                        <div class="grid gap-y-2 mt-6">
                            <h5 class="font-bold text-3xl">Finish input new order</h5>
                            <p>
                                Get the process lorem ipsum dolor sit amet set started <br />
                                in less than 10 minutes. Let us handle the rest.
                            </p>
                        </div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <a class="w-full !bg-Blue-Primary text-white py-2 text-center rounded" href="/">Finish</a>
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
</template>
