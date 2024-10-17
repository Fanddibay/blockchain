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
                <h5 class="font-bold text-xl">Completed Task</h5>
            </div>
            <div class="lg:flex items-center gap-4">
                <div class="relative mt-4 lg:mt-0">
                    <input v-model="searchQuery" type="text" class="border ps-8 py-2 rounded-lg lg:w-[350px]" placeholder="Find task" />
                    <i class="pi pi-search absolute left-3 top-3.5"></i>
                </div>
            </div>
        </div>

        <div class="overflow-auto">
            <table class="min-w-full bg-white border-gray-300">
                <thead>
                    <tr class="text-left text-gray-700">
                        <th class="px-6 py-3 border-b">No</th>
                        <th class="px-6 py-3 border-b">PO List</th>
                        <th class="px-6 py-3 border-b">Participant</th>
                        <th class="px-6 py-3 border-b">Status</th>
                        <th class="px-6 py-3 border-b">Started</th>
                        <th class="px-6 py-3 border-b">Completed</th>
                        <th class="px-6 py-3 border-b">Transaction Hash</th>
                        <th class="px-6 py-3 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in paginatedUsers" :key="index" class="text-gray-600 border-b">
                        <td class="px-6 py-4">1</td>
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
                        <td class="px-6 py-4">12/12/2024</td>
                        <td class="px-6 py-4">12/12/2024</td>
                        <td class="px-6 py-4">HasHTranSaction</td>
                        <td class="px-6 py-4">
                            <Button @click="visible = true"> <i class="pi pi-eye"></i></Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Paginator class="mt-12" :rows="rowsPerPage" :totalRecords="filteredUsers.length" :rowsPerPageOptions="[5, 10, 20]" @page="onPageChange"> </Paginator>

        <!-- PrimeVue Dialog Modal -->
        <div class="card flex justify-center">
            <Dialog v-model:visible="visible" modal header="     " :style="{ width: '70%' }">
                <template #header> </template>
                <div class="items-center justify-center gap-2 text-center">
                    <h5 class="font-bold text-2xl text-center">View Task</h5>
                </div>
                <div class="mt-4 border-t py-4">
                    <ul class="grid gap-y-4" v-for="(user, index) in paginatedUsers" :key="index">
                        <li class="grid gap-y-1">
                            <h5>PO List</h5>
                            <p>{{ user.poList }}</p>
                        </li>
                        <li class="grid gap-y-1">
                            <h5>Participant</h5>
                            <AvatarGroup>
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="medium" shape="circle" />
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="medium" shape="circle" />
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="medium" shape="circle" />
                                <Avatar label="+2" shape="circle" size="medium" />
                            </AvatarGroup>
                        </li>
                        <li class="grid gap-y-1">
                            <h5>Status</h5>
                            <p>{{ user.status }}</p>
                        </li>
                        <li class="grid gap-y-1">
                            <h5>Started date</h5>
                            <p>12/12/2024</p>
                        </li>
                        <li class="grid gap-y-1">
                            <h5>Completed date</h5>
                            <p>12/12/2024</p>
                        </li>
                    </ul>
                </div>
                <template #footer>
                    <Button label="Done" class="w-full !text-white !bg-Blue-Primary" outlined severity="secondary" @click="visible = false" autofocus />
                </template>
            </Dialog>
        </div>
    </div>

    <!-- Pagination -->
    <div>
        <!-- Button to trigger modal -->
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
                poList: '',
                status: ''
            },
            users: [
                {
                    poList: 'PO_201',
                    status: 'On Progress'
                },
                {
                    poList: 'PO_201',
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
                return user.poList.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.status.toLowerCase().includes(this.searchQuery.toLowerCase());
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
