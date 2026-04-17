<script setup>
import {ref } from "vue";
import ProductCard from "./components/ProductCard.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"
import RelatedProduct from "./components/Relatedproduct.vue"
const products = ref([
  {
    id: 1,
    name: "Cozy Sneakers",
    description: "High-quality sneakers that go with everything you wear.",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    badge: "NEW",
    price: 120,
    discount: 20,
    stock: 15,
    tags: ["Fashion", "Casual", "Sport"],
  },
]);
const RelatedProducts=ref([
  {
    "id": 2,
    "name": "Running Shoes",
    "price": 90,
    "discount": 10,
    "image":"https://picsum.photos/300?random=3"
  },
  {
    "id": 3,
    "name": "Casual Boots",
    "price": 150,
    "discount": 0,
    "image": "https://picsum.photos/300?random=1"
  },
  {
    "id": 4,
    "name": "Flip Flops",
    "price": 30,
    "discount": 50,
    "image": "https://picsum.photos/300?random=2"
  }

]);
</script>

<template>
  <Header/>
  <ProductCard v-for="(product, index) in products" :product="product" />
  <!-- <Relatedproduct v-for="(product, index) in RelatedProducts" :product="product" /> -->
   <div class="container mt-4">
  <div class="row g-3">

    <div
      v-for="product in RelatedProducts"
      :key="product.id"
      class="col-12 col-md-4"
    >
      <RelatedProduct :product="product" />
    </div>

  </div>
</div>
  <Footer/>
</template>

<style scoped></style>
