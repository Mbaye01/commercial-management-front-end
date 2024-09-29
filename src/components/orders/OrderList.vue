<template>
    <div class="container mt-5">
      <h1 class="mb-4 custom-margin-top">List of Orders</h1>
      <div class="d-flex justify-content-end mb-3">
        <router-link type="button" class="btn btn-primary" :to="{ name: 'create' }">
          Add New Order
        </router-link>
      </div>
      <table class="table table-striped table-hover table-bordered mt-3">
        <thead class="table-light">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Order</th>
            <th scope="col">Delivery Address</th>
            <th scope="col">Track Number</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td>{{ order.date }}</td>
            <td>{{ order.orderName }}</td>
            <td>{{ order.deliveryAddress }}</td>
            <td>{{ order.trackNumber }}</td>
            <td>{{ order.status }}</td>
            <td class="text-center">
              <router-link
                class="btn btn-outline-info btn-sm me-2"
                :to="{ name: 'view' }"
              >
                <i class="fas fa-eye"></i>
              </router-link>
              <router-link :to="{ name: 'edit', params: { id: index } }" class="btn btn-outline-warning btn-sm me-2">
                <i class="fas fa-edit"></i>
              </router-link>
              <button class="btn btn-outline-danger btn-sm" @click="confirmDeleteOrder(index)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const orders = ref([
    {
      date: '2024-09-15',
      orderName: 'John Doe',
      deliveryAddress: '123 Main St, Springfield',
      trackNumber: 'TRK123456789',
      status: 'Processing',
    },
    {
      date: '2024-09-16',
      orderName: 'Jane Smith',
      deliveryAddress: '456 Elm St, Shelbyville',
      trackNumber: 'TRK987654321',
      status: 'Shipped',
    },
  ]);
  
  const confirmDeleteOrder = (orderId) => {
    const confirmed = window.confirm('Are you sure you want to delete this order?');
    if (confirmed) {
      orders.value = orders.value.filter((order, index) => index !== orderId);
    }
  };
  </script>
  
  <style scoped>
  /* Ensure consistency in container width */
  .container {
    max-width: 1250px;
  margin: 0 auto;
  padding: 20px;

 
  }
  .table {
    width: 100%;
  }
  /* Adjusting margin for the header */
  .custom-margin-top {
    margin-top: 30px;
    
  }
  </style>