<template>
  <div>
    <b-navbar type="light" variant="light" class="justify-content-center">
      <!-- Use justify-content-center class to center the links -->
      <!-- <b-navbar-nav> -->
      <router-link to="/auth/register" class="nav-link"
        >Registration</router-link
      >
      <span class="navbar-text mx-1">|</span>
      <router-link to="/auth/login" class="nav-link">Login</router-link>
      <!-- </b-navbar-nav> -->
    </b-navbar>
    <router-view></router-view>
  </div>
</template>
