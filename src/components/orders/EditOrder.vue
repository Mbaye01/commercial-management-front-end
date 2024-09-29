<template>
    <div class="container mt-3">
      <h1 class="mt-5">Edit Order</h1>
      
      <form class="row g-3">
        <div class="btn-right-action mt-4 mb-4 d-flex justify-content-end">
          <RouterLink type="button" class="btn btn-secondary mx-4" :to="{ name: 'orders' }">
            Return to Orders List
          </RouterLink>
          <button type="button" class="btn btn-primary" @click="submitEdit">Submit</button>
        </div>
  
        <div class="col-md-6">
          <label for="date" class="form-label">Date</label>
          <input type="date" v-model="order.date" class="form-control" id="date" />
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Delivery Address</label>
          <input type="text" v-model="order.deliveryAddress" class="form-control" id="address" />
        </div>
        <div class="col-md-6">
          <label for="name" class="form-label">Customer Name</label>
          <input type="text" v-model="order.customerName" class="form-control" id="name" />
        </div>
        <div class="col-md-6">
          <label for="trackNumber" class="form-label">Tracking Number</label>
          <input type="text" v-model="order.trackNumber" class="form-control" id="trackNumber" />
        </div>
        <div class="col-md-6 offset-6">
          <label for="status" class="form-label">Order Status</label>
          <select v-model="order.status" class="form-select" id="status">
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </form>
  
      <div class="row mt-3 mx-1">
        <h2>Order Details</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in orderDetails" :key="index">
              <td>
                <select
                class="form-select"
                v-model="product"
                aria-label="Default select"
              >
                <option selected>{{ detail.product }}</option>
                <option value="1">Processing</option>
                <option value="2">Shipped</option>
                <option value="3">Delivered</option>
              </select>
              </td>
              <td>
                <input type="number" class="form-control" v-model="detail.quantity" />
              </td>
              <td>
                <input type="number" class="form-control" v-model="detail.price" />
              </td>
              <td>
                <button @click="removeDetail(index)" class="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <button @click="addDetail" class="btn btn-success">Add New Detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const orderId = ref(route.params.id);
  
  const order = ref({
    date: '',
    deliveryAddress: '',
    customerName: '',
    trackNumber: '',
    status: 'Processing',
  });
  
  const orderDetails = ref([{ product: 'Product 1', quantity: 1, price: 10 }]);
  
  const products = ref(['Product 1', 'Product 2', 'Product 3']);
  
  onMounted(() => {
    order.value = {
      date: '2024-09-15',
      deliveryAddress: '123 Main St',
      customerName: 'John Doe',
      trackNumber: 'TRK123456789',
      status: 'Processing',
    };
  });
  
  function submitEdit() {
    alert('Order updated!');
  }
  
  function addDetail() {
    orderDetails.value.push({ product: '', quantity: 1, price: 0 });
  }
  
  function removeDetail(index) {
    if (orderDetails.value.length > 1) {
      orderDetails.value.splice(index, 1);
    } else {
      alert("You cannot delete the last detail.");
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 1250px;
  margin: 0 auto;
  padding: 20px;
  }
  
  </style>
  