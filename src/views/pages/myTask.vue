<script setup>
import Dialog from 'primevue/dialog';
import ArrowBack from '../uikit/arrowBack.vue';

import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
    <!-- Table -->
    <div class="bg-white p-12">
        <div class="mb-4 lg:flex items-center gap-4 w-full justify-between">
            <div class="flex items-center gap-4">
                <ArrowBack />
                <h5 class="font-bold text-xl">My Task</h5>
            </div>
            <div class="lg:flex items-center gap-4">
                <div class="relative lg:mt-0 mt-4">
                    <input v-model="searchQuery" type="text" class="border ps-8 py-2 rounded-lg lg:w-[350px]" placeholder="Find my task" />
                    <i class="pi pi-search absolute left-3 top-3.5"></i>
                </div>
            </div>
        </div>
        <div class="overflow-auto">
            <table class="min-w-full bg-white border-gray-300">
                <thead>
                    <tr class="text-left text-gray-700">
                        <th class="px-6 py-3 border-b">#</th>

                        <th class="px-6 py-3 border-b">Batch list</th>
                        <th class="px-6 py-3 border-b">PO List</th>
                        <th class="px-6 py-3 border-b">Participant</th>
                        <th class="px-6 py-3 border-b">Status</th>
                        <th class="px-6 py-3 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in paginatedUsers" :key="index" class="text-gray-600 border-b">
                        <td class="px-6 py-4">1</td>
                        <td class="px-6 py-4">{{ user.BatchList }}</td>
                        <td class="px-6 py-4">{{ user.poList }}</td>
                        <td class="px-6 py-4">
                            <AvatarGroup>
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="medium" shape="circle" />
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="medium" shape="circle" />
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="medium" shape="circle" />
                                <Avatar label="+2" shape="circle" size="medium" />
                            </AvatarGroup>
                        </td>
                        <td class="px-6 py-4">{{ user.status }}</td>
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                                <span class="cursor-pointer">
                                    <Button @click="visible = true"> <i class="pi pi-eye"></i></Button>
                                </span>
                                <span class="cursor-pointer">
                                    <Button @click="visible = true"> <i class="pi pi-check-circle"></i></Button>
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Paginator class="mt-12" :rows="rowsPerPage" :totalRecords="filteredUsers.length" :rowsPerPageOptions="[5, 10, 20]" @page="onPageChange"> </Paginator>

        <!-- Popup -->
        <div class="card flex justify-center">
            <Dialog v-model:visible="visible" modal header="     " :style="{ width: '25rem' }">
                <template #header> </template>
                <div class="items-center justify-center gap-2 text-center">
                    <h5 class="font-bold text-2xl text-center">Are you sure?</h5>
                    <span class="text-surface-500 dark:text-surface-400 block mb-8">Are you sure you want to claim this task ?</span>
                </div>

                <template #footer>
                    <Button label="Cancel" class="w-1/2" text severity="secondary" @click="visible = false" autofocus />
                    <Button label="Save" class="w-1/2 !text-white !bg-Blue-Primary" outlined severity="secondary" @click="visible = false" autofocus />
                </template>
            </Dialog>
        </div>
    </div>

    <!-- Pagination -->
    <div>
        <!-- Button to trigger modal -->

        <!-- PrimeVue Dialog Modal -->
        <Dialog header="" :visible="showModal1" modal style="width: 30vw" :closable="false" @hide="closeModal1">
            <div class="text-center">
                <h5 class="font-bold text-2xl mb-4 border-b pb-4">Are you sure?</h5>
                <h3 class="mt-3 mb-12">Are you sure you want to {{ editingIndex === null ? 'Create' : 'Update' }} this user data?</h3>

                <div class="flex justify-center gap-2">
                    <!-- Cancel button -->
                    <Button label="Cancel" class="!border w-1/2 !bg-transparent !text-Blue-Primary !border-Blue-Primary hover:!bg-Blue-Primary hover:!text-white" @click="closeModal1" />

                    <!-- Yes button -->
                    <button @click="addUser" class="btnPrimary w-1/2 py-3 rounded-lg mr-2 z-50">
                        {{ editingIndex === null ? 'Create' : 'Update' }}
                    </button>
                </div>
            </div>
        </Dialog>
    </div>
    <!-- Popup (Edit / Delete) -->
</template>

<style lang="scss" scoped></style>

<script>
export default {
    data() {
        return {
            showModal: false, // Modal visibility
            activeMenuIndex: null, // To track which action menu is open
            editingIndex: null, // To track if a user is being edited
            searchQuery: '', // For search input
            newUser: {
                name: '',
                BatchList: '',
                poList: '',
                status: ''
            },
            users: [
                {
                    name: 'John Doe',
                    BatchList: '+123456789',
                    poList: 'johndoe@example.com',
                    status: 'On Progress'
                },
                {
                    name: 'James Doe',
                    BatchList: '+123456789',
                    poList: 'johndoe@example.com',
                    status: 'Completed'
                }
            ],
            searchQuery: '',
            activeMenuIndex: null,
            rowsPerPage: 8, // Rows per page
            currentPage: 0 // Current page index
        };
    },
    computed: {
        filteredUsers() {
            // Filter users based on search query
            return this.users.filter((user) => {
                return user.BatchList.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.poList.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.status.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        },
        paginatedUsers() {
            // Apply pagination to filtered users
            const start = this.currentPage * this.rowsPerPage;
            const end = start + this.rowsPerPage;
            return this.filteredUsers.slice(start, end);
        }
    },
    methods: {
        confirmAction() {
            // Execute your addUser or editUser logic here
            console.log('Confirmed action!');
            this.closeModal(); // Close the modal after confirmation
        },

        onPageChange(event) {
            this.currentPage = event.page;
        },

        getStatusClass(status) {
            return {
                'text-blue-400 p-2.5 rounded-lg text-sm': status === 'Waiting',
                'p-2.5 text-blue-400 rounded-lg text-sm': status === 'Claim'
            };
        },

        toggleActionMenu(index, event) {
            event.stopPropagation(); // Prevent the click event from bubbling up
            if (this.activeMenuIndex === index) {
                this.activeMenuIndex = null; // Close if the same menu is clicked again
                document.removeEventListener('click', this.handleOutsideClick); // Remove listener
            } else {
                this.activeMenuIndex = index;
                document.addEventListener('click', this.handleOutsideClick); // Add listener for outside clicks
            }
        },

        // Confirm deletion of user
        confirmDelete() {
            if (this.deleteIndex !== null) {
                this.users.splice(this.deleteIndex, 1); // Delete the user
                this.deleteIndex = null;
                this.showDeleteModal = false; // Hide delete modal
            }
        },

        onPageChange(event) {
            this.currentPage = event.page; // Update the current page index
        }
    }
};
</script>
