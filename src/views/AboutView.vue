<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => console.log("AboutView mounted"));
onUnmounted(() => console.log("AboutView unmounted"));
</script>

<template>
  <div class="space-y-4 max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold">About Us</h1>

    <p class="text-base-content/70">
      Welcome to ShopDash! We provide high-quality products with the best prices.
      Our goal is to make your shopping experience simple, enjoyable, and reliable.
    </p>

    <p class="text-base-content/70">
      We carefully select our products to ensure quality and value for our customers.
    </p>
  </div>
</template>