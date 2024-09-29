<template>
    <div class="container">
        <h1 class="mt-3">Create Order</h1>
      <form class="row g-3" @submit.prevent="submitOrder">
        <div class="btn-right-action mt-5 mb-4 d-flex justify-content-end margin-btn">
          <router-link
            type="button"
            class="btn btn-secondary mx-4"  
            :to="{ name: 'orders' }"
          >
            Return to Orders List
          </router-link>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
  
        <div class="col-md-6">
          <label for="date" class="form-label">Date</label>
          <input type="date" class="form-control" id="date" v-model="date" />
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Delivery Address</label>
          <input type="text" class="form-control" id="address" v-model="deliveryAddress" />
        </div>
        <div class="col-md-6">
          <label for="name" class="form-label">Customer Name</label>
          <input type="text" class="form-control" id="name" v-model="customerName" />
        </div>
        <div class="col-md-6">
          <label for="trackNumber" class="form-label">Tracking Number</label>
          <input type="text" class="form-control" id="trackNumber" v-model="trackNumber" />
        </div>
        <div class="col-md-6 offset-6">
          <label for="status" class="form-label">Order Status</label>
          <select class="form-select" v-model="status">
            <option value="">Select Status</option>
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
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in orderDetails" :key="index">
              <td>
                <input type="text" class="form-control" v-model="detail.product"   placeholder="Enter product name" />
              </td>
              <td>
                <input type="number" class="form-control" v-model="detail.quantity"  placeholder="Enter quantity " min="1" />
              </td>
              <td>
                <input type="number" class="form-control" v-model="detail.price" />
              </td>
              <td>
                <button @click="removeDetail(index)" class="btn btn-danger">
                  Remove
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <button @click="addDetail" class="btn btn-success">
                  Add New Detail
                </button>
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
  
  // Function to remove an order detail, but ensures at least one detail remains
  function removeDetail(index) {
    if (orderDetails.value.length > 1) {
      orderDetails.value.splice(index, 1);
    } else {
      alert("At least one order detail must remain.");
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
  
    // Handle the new order data here (e.g., send it to the server)
    console.log('Order submitted:', newOrder);
  
    // Navigate back to the order list after submission
    router.push({ name: 'orders' });
  }
  </script>
  
<style scoped>
  
.container {
    padding: 50px;
    width: 85%;
  }

.table {
    width: 100%;
  }

.table th, .table td {
    padding: 5px;
  }

  </style>
  