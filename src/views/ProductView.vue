<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductDetails from "@/components/ProductDetails.vue";
import ProductCard from "@/components/ProductCard.vue";

const props = defineProps({
  products: { type: Array, required: true },
});

const emit = defineEmits(["buy"]);

const route = useRoute(); 
const router = useRouter();

const currentProduct = computed(() =>
  props.products.find((p) => p.id === Number(route.params.id))
);

const relatedProducts = computed(() =>
  props.products.filter((p) => p.id !== Number(route.params.id))
);

onMounted(() => console.log(`ProductView mounted for ID: ${route.params.id}`));
onUnmounted(() => console.log("ProductView unmounted"));
</script>

<template>
  <div class="space-y-10">

    <!-- Product not found -->
    <div v-if="!currentProduct" class="text-center space-y-4">
      <p class="text-xl">Product not found.</p>
      <button @click="router.push('/')" class="btn btn-primary">Back to Home</button>
    </div>

    <!-- Product found -->
    <template v-else>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <figure>
          <img :src="currentProduct.image" :alt="currentProduct.name"
            class="w-full rounded-xl object-cover" />
        </figure>
        <ProductDetails
          :product="currentProduct"
          @buy="emit('buy', $event)"
        />
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold">Related Products</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            v-for="product in relatedProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </template>

  </div>
</template>