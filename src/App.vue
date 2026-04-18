<!-- <script setup>
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
   <!-- <div class="container mt-4">
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

<style scoped></style> -->
<script setup>
import { ref } from "vue";
import AppHeader from "./components/NavBar.vue";
import AppFooter from "./components/Footer.vue"

const products = ref([
  {
    id: 1,
    name: "Cozy Sneakers",
    description: "High-quality sneakers that go with everything you wear.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&h=200&fit=crop",
    badge: "NEW",
    price: 120,
    discount: 20,
    stock: 10,
    tags: ["Fashion", "Casual", "Sport"],
  },
  {
    id: 2,
    name: "Running Shoes",
    description: "Built for speed and comfort on any terrain.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
    badge: "",
    price: 90,
    discount: 10,
    stock: 5,
    tags: ["Sport", "Running"],
  },
  {
    id: 3,
    name: "Casual Boots",
    description: "Rugged boots for everyday adventures.",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=300&h=200&fit=crop",
    badge: "SALE",
    price: 150,
    discount: 0,
    stock: 8,
    tags: ["Casual", "Winter"],
  },
  {
    id: 4,
    name: "Flip Flops",
    description: "Light and breezy for sunny days.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=200&fit=crop",
    badge: "",
    price: 30,
    discount: 50,
    stock: 20,
    tags: ["Summer", "Casual"],
  },
]);

const brandName = "ShopDash";
const navLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Products", href: "/product/1" },
  { id: 3, label: "about", href: "/about" },
];

const footerBrand = "ShopDash";
const footerLinks = [
  { id: 1, label: "Privacy", href: "#" },
  { id: 2, label: "Terms", href: "#" },
  { id: 3, label: "Support", href: "#" },
];
const footerText = "Sample footer using DaisyUI";
const decreaseStock = (id) => {
  const product = products.value.find((p) => p.id === id);
  if (product && product.stock > 0) {
  product.stock -= 1;
  }
};
</script>

<template>
  <div class="min-h-screen bg-base-200">
    <div
      class="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 py-6 md:px-8"
    >
      <AppHeader :brand="brandName" :links="navLinks" />

      <main class="space-y-8">
        <!-- <RouterView /> -->
          <RouterView :products="products" @buy="decreaseStock" />
      </main>

      <AppFooter :brand="footerBrand" :links="footerLinks" :text="footerText" />
    </div>
  </div>
</template>
