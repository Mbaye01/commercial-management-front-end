<template>
  <div class="container mt-5">
    <h1 class="mb-4 custom-margin-top">List of Products</h1>
    <div class="d-flex justify-content-end mb-3">
      <button class="btn btn-primary" @click="openAddProductModal">
        Add New Product
      </button>
    </div>

    <!-- Products Table -->
    <table class="table table-striped table-hover table-bordered">
      <thead class="table-light">
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Barcode</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.barcode }}</td>
          <td>{{ product.status }}</td>
          <td class="text-center">
            <button class="btn btn-outline-info btn-sm me-2" @click="viewProduct(product)">
              <i class="fas fa-eye"></i>
</button>

<button class="btn btn-outline-warning btn-sm me-2" @click="openEditProductModal(product)">
  <i class="fas fa-edit"></i>
</button>

            <button class="btn btn-outline-danger btn-sm" @click="confirmDeleteProduct(product.id)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>


    
    <!-- Add Product Modal -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg custom-modal-width">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Create New Product</h5>
            <button type="button" class="btn-close" @click="closeAddProductModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProduct">
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="productName" class="form-label">Product Name</label>
                  <input type="text" class="form-control" id="productName" v-model="newProduct.name" required>
                </div>
                <div class="col-md-6">
                  <label for="productCategory" class="form-label">Category</label>
                  <input type="text" class="form-control" id="productCategory" v-model="newProduct.category" required>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="productPrice" class="form-label">Price</label>
                  <input type="number" class="form-control" id="productPrice" v-model="newProduct.price" min="0" step="0.01" required>
                </div>
                <div class="col-md-6">
                  <label for="productStock" class="form-label">Stock Quantity</label>
                  <input type="number" class="form-control" id="productStock" v-model="newProduct.stock" min="0" required>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="productBarcode" class="form-label">Barcode</label>
                  <input type="text" class="form-control" id="productBarcode" v-model="newProduct.barcode" required>
                </div>
                <div class="col-md-6">
                  <label for="productStatus" class="form-label">Status</label>
                  <select class="form-select" id="productStatus" v-model="newProduct.status" required>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label for="productDescription" class="form-label">Description</label>
                <textarea class="form-control" id="productDescription" v-model="newProduct.description" rows="3" required></textarea>
              </div>
              <div class="text-end">
                <button type="button" class="btn btn-secondary me-2" @click="closeAddProductModal">Close</button>
                <button type="submit" class="btn btn-primary">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
 
<!-- View Product Modal -->
<div class="modal fade" id="viewProductModal" tabindex="-1" aria-labelledby="viewProductModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="viewProductModalLabel">View Product</h5>
        <button type="button" class="btn-close" @click="closeViewProductModal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Product Name</label>
            <input type="text" class="form-control" v-model="selectedProduct.name" disabled>
          </div>
          <div class="col-md-6">
            <label class="form-label">Category</label>
            <input type="text" class="form-control" v-model="selectedProduct.category" disabled>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Price</label>
            <input type="text" class="form-control" v-model="selectedProduct.price" disabled>
          </div>
          <div class="col-md-6">
            <label class="form-label">Stock Quantity</label>
            <input type="text" class="form-control" v-model="selectedProduct.stock" disabled>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Barcode</label>
            <input type="text" class="form-control" v-model="selectedProduct.barcode" disabled>
          </div>
          <div class="col-md-6">
            <label class="form-label">Status</label>
            <input type="text" class="form-control" v-model="selectedProduct.status" disabled>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea class="form-control" v-model="selectedProduct.description" rows="4" disabled></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeViewProductModal">Close</button>
      </div>
    </div>
  </div>
</div>

 <!-- Edit Product Modal -->
<div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
        <button type="button" class="btn-close" @click="closeEditProductModal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Product Name</label>
            <input type="text" class="form-control" v-model="selectedProduct.name" disabled>
          </div>
          <div class="col-md-6">
            <label class="form-label">Category</label>
            <input type="text" class="form-control" v-model="selectedProduct.category">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Price</label>
            <input type="number" class="form-control" v-model="selectedProduct.price">
          </div>
          <div class="col-md-6">
            <label class="form-label">Stock Quantity</label>
            <input type="number" class="form-control" v-model="selectedProduct.stock">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Barcode</label>
            <input type="text" class="form-control" v-model="selectedProduct.barcode">
          </div>
          <div class="col-md-6">
            <label class="form-label">Status</label>
            <select class="form-select" v-model="selectedProduct.status">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea class="form-control" v-model="selectedProduct.description" rows="4"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeEditProductModal">Close</button>
        <button type="button" class="btn btn-primary" @click="editProduct">Confirm</button>
      </div>
    </div>
  </div>
</div>


</div>
</template>
<script setup>
import { ref } from 'vue';
import { Modal } from 'bootstrap';

// Liste des produits
const products = ref([
  { id: 1, name: 'Product 001', description: 'High-quality product.', price: 100, stock: 50, category: 'Electronics', barcode: '123456789012', status: 'Active' },
  { id: 2, name: 'Product 002', description: 'Affordable product.', price: 50, stock: 100, category: 'Home Appliances', barcode: '987654321098', status: 'Inactive' },
  { id: 3, name: 'Product 003', description: 'Durable product.', price: 75, stock: 75, category: 'Sports', barcode: '234567890123', status: 'Active' }
]);

// Formulaire d'ajout de produit
const newProduct = ref({
  name: '',
  description: '',
  price: 0,
  stock: 0,
  category: '',
  barcode: '',
  status: 'Active'
});

// Gestion du modal "Add Product"
const addProductModal = ref(null);
const editProductModal = ref(null);
const openAddProductModal = () => {
  addProductModal.value = new Modal(document.getElementById('addProductModal'));
  addProductModal.value.show();
};

const closeAddProductModal = () => {
  addProductModal.value.hide();
  resetNewProductForm();
};

const resetNewProductForm = () => {
  newProduct.value = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    barcode: '',
    status: 'Active'
  };
};

// Ajouter un nouveau produit
const addProduct = () => {
  // Génère un nouvel ID et ajoute le produit à la liste
  newProduct.value.id = products.value.length + 1;
  products.value.push({ ...newProduct.value });
  closeAddProductModal();
};

// Produit sélectionné pour la vue
const selectedProduct = ref({
  name: '',
  description: '',
  price: '',
  stock: '',
  category: '',
  barcode: '',
  status: ''
});

// Gestion du modal "View Product"
const viewProductModal = ref(null);

const openViewProductModal = () => {
  viewProductModal.value = new Modal(document.getElementById('viewProductModal'));
  viewProductModal.value.show();
};

const closeViewProductModal = () => {
  viewProductModal.value.hide();
};

// Afficher les détails d'un produit
const viewProduct = (product) => {
  selectedProduct.value = { ...product }; // Copier les détails du produit sélectionné
  openViewProductModal(); // Ouvrir le modal pour voir les détails
};



const openEditProductModal = (product) => {
  selectedProduct.value = { ...product }; // Charger le produit sélectionné
  editProductModal.value = new Modal(document.getElementById('editProductModal'));
  editProductModal.value.show();
};

const closeEditProductModal = () => {
  editProductModal.value.hide();
};

// Fonction pour confirmer l'édition
const editProduct = () => {
  // Rechercher l'index du produit à modifier
  const index = products.value.findIndex(p => p.id === selectedProduct.value.id);
  
  // Mettre à jour le produit dans la liste
  if (index !== -1) {
    products.value[index] = { ...selectedProduct.value };
  }
  
  // Fermer le modal
  closeEditProductModal();
};
// Supprimer un produit
const confirmDeleteProduct = (productId) => {
  if (confirm('Are you sure you want to delete this  product?')) {
    deleteProduct(productId);
  }
};

// Function to delete product by id
const deleteProduct = (productId) => {
  products.value = products.value.filter(product => product.id !== productId);
  
};
</script>

<style scoped>
.custom-margin-top {
  margin-top: 20px; 

}
.container{
  max-width: 1250px;
  margin: 0 auto;
  padding: 20px;
}
</style>