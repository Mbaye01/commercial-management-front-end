<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-4">
    <div class="container">
      <div id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-4">
            <router-link class="nav-link" to="/" active-class="active">
              <i class="fas fa-users"></i> Customers
            </router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link class="nav-link" to="/products" active-class="active">
              <i class="fas fa-box"></i> Products
            </router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link class="nav-link" to="/orders" active-class="active">
              <i class="fas fa-shopping-cart"></i> Orders
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-nav {
  display: flex;
  padding: 0;
  list-style: none;
}

.nav-link i {
  margin-right: 8px;
}

.nav-link:hover {
  color: #0000FF;
}

.nav-link.active {
  color: #ff0022;
  font-weight: bold;
}

.container {
  width: 85%;
  margin: 0 auto;
}
</style>
