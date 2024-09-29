<template>
  <div class="container mt-5">
    <h1 class="mb-4 custom-margin-top">List of Customers</h1>
    <div class="d-flex justify-content-end mb-3">
      <button class="btn btn-primary" @click="openAddCustomerModal">
        Add New Customer
      </button>
    </div>

    <!-- Customers Table -->
    <table class="table table-striped table-hover table-bordered">
      <thead class="table-light">
        <tr>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
          
          <td class="text-center">
            <button class="btn btn-outline-info btn-sm me-2" @click="viewCustomer(customer)">
              <i class="fas fa-eye"></i>
            </button>
            <button class="btn btn-outline-warning btn-sm me-2" @click="openEditCustomerModal(customer)">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="confirmDeleteCustomer(customer.id)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Customer Modal -->
    <div class="modal fade" id="addCustomerModal" tabindex="-1" aria-labelledby="addCustomerModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg custom-modal-width">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addCustomerModalLabel">Create New Customer</h5>
            <button type="button" class="btn-close" @click="closeAddCustomerModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addCustomer">
              <div class="mb-3">
                  <label for="customerName" class="form-label">Customer Name</label>
                  <input type="text" v-model="newCustomer.name" class="form-control" id="customerName" required />
                </div>
                <div class="mb-3">
                  <label for="customerAddress" class="form-label">Address</label>
                  <textarea v-model="newCustomer.address" class="form-control" id="customerAddress" required></textarea>
                </div>
                <div class="mb-3">
                  <label for="customerEmail" class="form-label">Email</label>
                  <input type="email" v-model="newCustomer.email" class="form-control" id="customerEmail" required />
                </div>
                <div class="mb-3">
                  <label for="customerPhone" class="form-label">Phone</label>
                  <input type="text" v-model="newCustomer.phone" class="form-control" id="customerPhone" required />
                </div>
              
              <div class="text-end">
                <button type="button" class="btn btn-secondary me-2" @click="closeAddCustomerModal">Close</button>
                <button type="submit" class="btn btn-primary">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- View Customer Modal -->
    <div class="modal fade" id="viewCustomerModal" tabindex="-1" aria-labelledby="viewCustomerModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="viewCustomerModalLabel">View Customer</h5>
        <button type="button" class="btn-close" @click="closeViewCustomerModal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label">Customer Name</label>
          <input type="text" class="form-control" v-model="selectedCustomer.name" disabled>
        </div>
        <div class="mb-3">
          <label class="form-label">Address</label>
          <textarea class="form-control" v-model="selectedCustomer.address" rows="2" disabled></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="text" class="form-control" v-model="selectedCustomer.email" disabled>
        </div>
        <div class="mb-3">
          <label class="form-label">Phone</label>
          <input type="text" class="form-control" v-model="selectedCustomer.phone" disabled>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeViewCustomerModal">Close</button>
      </div>
    </div>
  </div>
</div>

    <!-- Edit Customer Modal -->
    <div class="modal fade" id="editCustomerModal" tabindex="-1" aria-labelledby="editCustomerModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editCustomerModalLabel">Edit customer</h5>
        <button type="button" class="btn-close" @click="closeEditCustomerModal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label">Customer Name</label>
          <input type="text" class="form-control" v-model="selectedCustomer.name" disabled>
        </div>
        <div class="mb-3">
          <label class="form-label">Address</label>
          <textarea class="form-control" v-model="selectedCustomer.address" rows="2"></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="selectedCustomer.email">
        </div>
        <div class="mb-3">
          <label class="form-label">Phone</label>
          <input type="text" class="form-control" v-model="selectedCustomer.phone">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeEditCustomerModal">Close</button>
        <button type="button" class="btn btn-primary" @click="editCustomer">Confirm</button>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Modal } from 'bootstrap';

// Liste des clients
const customers = ref([
    { id: 1, name: 'John Doe', address: '123 Main St, NY', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', address: '456 Oak St, CA', email: 'jane@example.com', phone: '098-765-4321' },
    { id: 3, name: 'Alice Martin', address: '789 Pine St, IL', email: 'alice@example.com', phone: '234-567-8901' },
    { id: 4, name: 'David Brown', address: '101 Maple Ave, TX', email: 'david@example.com', phone: '345-678-9012' },
    { id: 5, name: 'Michael Johnson', address: '202 Elm St, AZ', email: 'michael@example.com', phone: '456-789-0123' },
]);

// Nouveau client
const newCustomer = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  registeredDate: new Date().toISOString().split('   ')[0],
  status: 'Active',
});

// Fonctions pour les Modals et la gestion des clients
const openAddCustomerModal = () => {
  const modal = new Modal(document.getElementById('addCustomerModal'));
  modal.show();
};

const closeAddCustomerModal = () => {
  const modal = Modal.getInstance(document.getElementById('addCustomerModal'));
  modal.hide();
};

const addCustomer = () => {
  customers.value.push({ id: customers.value.length + 1, ...newCustomer.value });
  closeAddCustomerModal();
  resetNewCustomer();
};

const resetNewCustomer = () => {
  newCustomer.value = {
    name: '',
    email: '',
    phone: '',
    address: '',
    registeredDate: new Date().toISOString().split('T')[0],
    status: 'Active',
  };
};



// Client sélectionné pour affichage ou modification
const selectedCustomer = ref({});

const openEditCustomerModal = (customer) => {
  selectedCustomer.value = { ...customer };
  const modal = new Modal(document.getElementById('editCustomerModal'));
  modal.show();
};

const closeEditCustomerModal = () => {
  const modal = Modal.getInstance(document.getElementById('editCustomerModal'));
  modal.hide();
};

const editCustomer = () => {
  const index = customers.value.findIndex(c => c.id === selectedCustomer.value.id);
  if (index !== -1) {
    customers.value[index] = { ...selectedCustomer.value };
  }
  closeEditCustomerModal();
};

const confirmDeleteCustomer = (customerId) => {
  const confirmed = window.confirm('Are you sure you want to delete this customer?');
  if (confirmed) {
    customers.value = customers.value.filter(customer => customer.id !== customerId);
  }
};

const viewCustomer = (customer) => {
  selectedCustomer.value = { ...customer };
  const modal = new Modal(document.getElementById('viewCustomerModal'));
  modal.show();
};

const closeViewCustomerModal = () => {
  const modal = Modal.getInstance(document.getElementById('viewCustomerModal'));
  modal.hide();
};
</script>

<style scoped>
  .custom-margin-top {
    margin-top: 20px;
 
  }

.container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 20px;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th, .table td {
    padding: 15px;
    text-align: left;
  }
  
  .text-center {
    text-align: center;
  }

  
/* .custom-modal-width {
  max-width: 800px;
} */
/* .custom-modal-height .modal-content {
    max-height: 500px; 
    overflow-y: auto; 
  } */
</style>
