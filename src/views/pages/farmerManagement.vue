<script setup>
import ToggleSwitch from 'primevue/toggleswitch';
import router from '@/router';
import ArrowBack from '../uikit/arrowBack.vue';
</script>

<style scoped>
table tbody tr:nth-child(odd) {
    @apply bg-blue-50;
}

table tbody tr:nth-child(even) {
    @apply bg-white;
}
</style>

<template>
    <div class="mx-auto">
        <!-- Table -->
        <div class="bg-white p-6">
            <div class="mb-4 lg:flex items-center gap-4 justify-between">
                <div class="flex items-center gap-4">
                    <ArrowBack />
                    <h5 class="font-bold text-xl">Farmer Management</h5>
                </div>
                <div class="lg:flex items-center gap-4">
                    <div class="relative my-4 lg:my-0">
                        <input v-model="searchQuery" type="text" class="border ps-8 py-2 rounded-lg w-full lg:w-[350px]" placeholder="Find farmer" />
                        <i class="pi pi-search absolute left-3 top-3.5"></i>
                    </div>
                    <button @click="showModal = true" class="btnSecondary lg:w-1/2 px-4 py-2 rounded-lg text-center w-full gap-2 items-center"><i class="pi pi-plus"></i> Add User</button>
                </div>
            </div>

            <div class="overflow-auto">
                <table class="min-w-full bg-white border-gray-300">
                    <thead>
                        <tr class="text-left text-gray-700">
                            <th class="px-6 py-3 border-b">No</th>
                            <th class="px-6 py-3 border-b">Farmer Name</th>
                            <th class="px-6 py-3 border-b">Farm Name</th>
                            <th class="px-6 py-3 border-b">Product</th>
                            <th class="px-6 py-3 border-b">Elevation (m)</th>
                            <th class="px-6 py-3 border-b">Coordinates X</th>
                            <th class="px-6 py-3 border-b">Coordinates Y</th>
                            <th class="px-6 py-3 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in paginatedUsers" :key="index" class="text-gray-600 border-b">
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">{{ user.name }}</td>
                            <td class="px-6 py-4">{{ user.farmName }}</td>
                            <td class="px-6 py-4">{{ user.product }}</td>
                            <td class="px-6 py-4">{{ user.elevationM }}</td>
                            <td class="px-6 py-4">{{ user.elevationX }}</td>
                            <td class="px-6 py-4">{{ user.elevationY }}</td>

                            <td class="px-6 py-4 relative">
                                <!-- 3-Dot Action Menu -->
                                <button @click="toggleActionMenu(index, $event)" class="p-2 focus:outline-none">
                                    &#x22EE;
                                    <!-- Vertical ellipsis (3 dots) -->
                                </button>
                                <!-- Pop-up Menu for Edit/Delete -->
                                <div v-if="activeMenuIndex === index" :id="'popupMenu-' + index" class="absolute z-50 right-0 mt-2 w-28 bg-white border border-gray-300 shadow-lg rounded-lg">
                                    <button @click="editUser(index)" class="block px-4 py-2 text-left w-full hover:bg-gray-100">Edit</button>
                                    <button @click="showDeleteUserModal(index)" class="block px-4 py-2 text-left w-full hover:bg-gray-100">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Paginator class="mt-12" :rows="rowsPerPage" :totalRecords="filteredUsers.length" :rowsPerPageOptions="[5, 10, 20]" @page="onPageChange"> </Paginator>

            <!-- Modal (Create User Form) -->
            <div v-if="showModal" class="fixed inset-0 z-10 flex items-center mt-12 justify-center bg-gray-900 bg-opacity-50">
                <div class="bg-white p-8 rounded-lg shadow-lg lg:w-1/3">
                    <h2 class="text-2xl mb-4">{{ editingIndex === null ? 'Create New User' : 'Edit User' }}</h2>

                    <!-- Form Fields -->
                    <div class="mb-4">
                        <label class="block text-gray-700">Farm Name</label>
                        <input v-model="newUser.name" type="text" class="w-full border px-4 py-2 rounded-lg" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Farmer Name</label>
                        <input v-model="newUser.farmName" type="text" required class="w-full border px-4 py-2 rounded-lg" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Product</label>
                        <input v-model="newUser.product" type="text" class="w-full border px-4 py-2 rounded-lg" />
                    </div>
                    <div class="flex items-center gap-4 w-full">
                        <div class="mb-4 w-full">
                            <label class="block text-gray-700">Koordinat (x)</label>
                            <input v-model="newUser.elevationX" type="number" class="w-full border px-4 py-2 rounded-lg" />
                        </div>

                        <div class="mb-4 w-full">
                            <label class="block text-gray-700">Koordinat (y)</label>
                            <input type="number" v-model="newUser.elevationY" class="w-full border px-4 py-2 rounded-lg" />
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Elevation (m)</label>
                        <input v-model="newUser.elevationM" type="number" class="w-full border px-4 py-2 rounded-lg" />
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex gap-4 pt-4">
                        <button @click="closeModal" class="btnSecondary px-6 z-50">Cancel</button>
                        <Button @click="showModal1 = true" class="p-button-success w-full !bg-Blue-Primary">
                            {{ editingIndex === null ? 'Create' : 'Update' }}
                        </Button>
                    </div>
                </div>
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
        <div v-if="selectedItem" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div class="bg-white p-6 rounded-lg">
                <h2 class="text-xl font-bold mb-4">{{ selectedItem }}</h2>
                <button @click="editItem(selectedItem)" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button>
                <button @click="deleteItem(selectedItem)" class="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                <button @click="closePopup" class="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
            </div>
        </div>
        <!-- Delete Confirmation Modal -->
        <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div class="relative z-10 bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center grid gap-y-8 pt-12">
                <h2 class="mb-4 text-2xl font-bold">Are you sure?</h2>
                <p class="mb-6">Are you sure you want to delete this user data?</p>

                <div class="flex justify-end space-x-4">
                    <button @click="cancelDeleteModal" class="btnSecondary rounded w-1/2">Cancel</button>
                    <button @click="confirmDelete" class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded w-1/2">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

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
                farmName: '',
                product: '',
                elevationM: '',
                elevationX: '',
                elevationY: ''
            },
            users: [
                {
                    name: 'Roberto',
                    farmName: 'Coffee Sunny',
                    product: 'Coffee',
                    elevationM: '132',
                    elevationX: '111',
                    elevationY: '452'
                },

                {
                    name: 'Carlos',
                    farmName: 'Coffee Sunny',
                    product: 'Coffee',
                    elevationM: '1231',
                    elevationX: '1233', // Default role
                    elevationY: '4121'
                },
                {
                    name: 'Raul',
                    farmName: 'Coffee Sunny',
                    product: 'Coffee',
                    elevationM: '4112',
                    elevationX: '2173', // Default role
                    elevationY: '4121'
                }
            ],
            searchQuery: '',
            activeMenuIndex: null,
            rowsPerPage: 8, // Rows per page
            currentPage: 0, // Current page index
            dropdownIndex: null, // To track the action dropdown
            showModal1: false, // Controls modal visibility
            showDeleteModal: false,
            deleteIndex: null
        };
    },
    computed: {
        filteredUsers() {
            // Filter users based on search query
            return this.users.filter((user) => {
                return user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.farmName.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.product.toLowerCase().includes(this.searchQuery.toLowerCase());
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

        // Method to close modal
        closeModal1() {
            this.showModal1 = false;
        },

        closeModal() {
            this.resetForm();
            this.showModal = false;
            this.editingIndex = null; // Ensure editingIndex is reset when closing modal
        },

        onPageChange(event) {
            this.currentPage = event.page;
        },

        addUser() {
            if (this.editingIndex === null) {
                // Add new user if not editing
                this.users.push({ ...this.newUser });
            } else {
                // Update user if editing
                this.users.splice(this.editingIndex, 1, { ...this.newUser });
                this.editingIndex = null; // Clear editing state
            }

            // Reset the form and close the modal
            this.resetForm();
            this.showModal = false;
            this.showModal1 = false;
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

        editUser(index) {
            // Logic to set the editing user
            this.editingIndex = index;
            this.newUser = { ...this.users[index] };
            this.showModal = true; // Show modal for editing
            this.modalType = 'edit'; // Define modal type to distinguish between edit and delete
            this.activeMenuIndex = null; // Close the menu after opening the modal
        },

        showDeleteUserModal(index) {
            this.deleteIndex = index;
            this.showDeleteModal = true; // Show delete confirmation modal
            this.activeMenuIndex = null;
        },

        // Cancel and close the delete modal
        cancelDeleteModal() {
            this.deleteIndex = null;
            this.showDeleteModal = false; // Close delete modal
            console.log('failed');
        },

        // Confirm deletion of user
        confirmDelete() {
            if (this.deleteIndex !== null) {
                this.users.splice(this.deleteIndex, 1); // Delete the user
                this.deleteIndex = null;
                this.showDeleteModal = false; // Hide delete modal
            }
        },

        // Cancel deletion or editing
        cancelModal() {
            this.deleteIndex = null; // Reset the index
            this.editingIndex = null; // Reset editing index
            this.showModal = false; // Close the modal
        },
        handleOutsideClick(event) {
            const popupMenu = document.querySelector(`#popupMenu-${this.activeMenuIndex}`);

            // If clicked outside the menu or any element inside, close it
            if (popupMenu && !popupMenu.contains(event.target)) {
                this.activeMenuIndex = null;
                document.removeEventListener('click', this.handleOutsideClick); // Remove listener
            }
        },

        beforeDestroy() {
            // Clean up event listener when the component is destroyed
            document.removeEventListener('click', this.handleOutsideClick);
        },
        resetForm() {
            // Clear the form fields
            this.newUser = {
                name: '',
                farmName: '',
                product: '',
                elevationM: '',
                elevationX: '',
                elevationY: ''
            };
        },

        onPageChange(event) {
            this.currentPage = event.page; // Update the current page index
        }
    }
};
</script>
