<template>
    <div class="container">
      <h1 class="mt-5">Show order</h1>
      <form class="row g-3" @submit.prevent="submitOrder">
        <div class="btn-right-action mt-5 mb-4 d-flex justify-content-end margin-btn">
          <RouterLink type="button" class="btn btn-secondary mx-4" :to="{ name: 'orders' }">
            Return to Orders List
          </RouterLink>
         
        </div>
  
        <div class="col-md-6">
          <label for="date" class="form-label">Date</label>
          <input type="date" class="form-control" id="date" v-model="date" disabled/>
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Delivery Address</label>
          <input type="text" class="form-control" id="address" v-model="deliveryAddress" disabled/>
        </div>
        <div class="col-md-6">
          <label for="name" class="form-label">Customer Name</label>
          <input type="text" class="form-control" id="name" v-model="customerName" disabled/>
        </div>
        <div class="col-md-6">
          <label for="trackNumber" class="form-label">Tracking Number</label>
          <input type="text" class="form-control" id="trackNumber" v-model="trackNumber" disabled/>
        </div>
        <div class="col-md-6 offset-6">
          <label for="status" class="form-label">Order Status</label>
          <select class="form-select" v-model="status" disabled>
            <option value="">Select status</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </form>
  
      <div class="row mt-3 mx-1">
        <h2 class="mx-0">Order Details</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
         
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in orderDetails" :key="index">
              <td>
                <input type="text" class="form-control" v-model="detail.product" disabled/>
              </td>
              <td>
                <input type="number" class="form-control" v-model="detail.quantity" disabled/>
              </td>
              <td>
                <input type="number" class="form-control" v-model="detail.price" disabled/>
              </td>
              
        
    
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // State variables for the order form
  const date = ref('');
  const deliveryAddress = ref('');
  const customerName = ref('');
  const trackNumber = ref('');
  const status = ref('');
  
  // Array to hold order details
  const orderDetails = ref([{ product: '', quantity: 1, price: 0 }]);
  
  // Function to add a new order detail
  function addDetail() {
    orderDetails.value.push({ product: '', quantity: 1, price: 0 });
  }
  
  // Function to remove an order detail
  function removeDetail(index) {
    if (orderDetails.value.length > 1) {
      orderDetails.value.splice(index, 1);
    } else {
      alert("You cannot delete the last detail.");
    }
  }
  
  const router = useRouter();
  
  // Function to submit the form
  function submitOrder() {
    const newOrder = {
      date: date.value,
      deliveryAddress: deliveryAddress.value,
      customerName: customerName.value,
      trackNumber: trackNumber.value,
      status: status.value,
      details: orderDetails.value
    };


   
    
  
    // Here you can handle the new order data (e.g., send it to the server)
    console.log('Order submitted:', newOrder);
  
    // Navigate back to the order list after submission
    router.push({ name: 'orders' });
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 1250px;
  margin: 0 auto;
  padding: 20px;
  }
  .table {
    width: 100%;
  }
  .table th,
  .table td {
    padding: 5px;
  }
  </style>
  