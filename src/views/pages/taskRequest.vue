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
                <h5 class="font-bold text-xl">Task Request</h5>
            </div>
            <div class="lg:flex mt-4 lg:mt-0 items-center gap-4">
                <div class="relative lg:mt-0">
                    <input v-model="searchQuery" type="text" class="border ps-8 py-2 rounded-lg w-full lg:w-[350px]" placeholder="Find task" />
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
                        <th class="px-6 py-3 border-b">Status</th>
                        <th class="px-6 py-3 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in paginatedUsers" :key="index" class="text-gray-600 border-b">
                        <td class="px-6 py-4">1</td>
                        <td class="px-6 py-4">{{ user.BatchList }}</td>
                        <td class="px-6 py-4">{{ user.poList }}</td>
                        <td class="px-6 py-4">{{ user.status }}</td>
                        <td class="px-6 py-4">
                            <Button @click="visible = true"> <i class="pi pi-exclamation-circle"></i></Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Paginator class="mt-12" :rows="rowsPerPage" :totalRecords="filteredUsers.length" :rowsPerPageOptions="[5, 10, 20]" @page="onPageChange"> </Paginator>

        <!-- Modal (Create User Form) -->
        <div v-if="showModal" class="fixed inset-0 z-10 flex items-center mt-12 justify-center bg-gray-900 bg-opacity-50">
            <div class="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/3">
                <h2 class="text-2xl mb-4">{{ editingIndex === null ? 'Create New User' : 'Edit User' }}</h2>

                <!-- Form Fields -->
                <div class="mb-4">
                    <label class="block text-gray-700">Name</label>
                    <input v-model="newUser.name" type="text" class="w-full border px-4 py-2 rounded-lg" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Username</label>
                    <input v-model="newUser.username" type="text" required class="w-full border px-4 py-2 rounded-lg" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Phone Number</label>
                    <input v-model="newUser.phone" type="tel" class="w-full border px-4 py-2 rounded-lg" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Email</label>
                    <input v-model="newUser.email" type="email" class="w-full border px-4 py-2 rounded-lg" />
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700">Role</label>
                    <select v-model="newUser.role" class="w-full border px-4 py-2 rounded-lg">
                        <option value="Admin">Admin</option>
                        <option value="Collector">Collector</option>
                        <option value="Processor">Processor</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Passwrod</label>
                    <input v-model="newUser.password" type="password" class="w-full border px-4 py-2 rounded-lg" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Role</label>
                    <select v-model="newUser.status" class="w-full border px-4 py-2 rounded-lg">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <!-- Pagination -->

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
                    status: 'Waiting'
                },
                {
                    name: 'James Doe',
                    BatchList: '+123456789',
                    poList: 'johndoe@example.com',
                    status: 'Claim'
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
