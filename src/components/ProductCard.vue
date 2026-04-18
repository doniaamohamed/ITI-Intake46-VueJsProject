<template>
  <div class="card bg-base-100 shadow-sm border-0 p-2">
  <div class="d-flex gap-3 align-items-start">
    <figure>
      <img
       :src="product.image"
       class="rounded"
        style="width: 160px; height: 260px; object-fit: cover;"
      />
    </figure>
    <div class="card-body">
      <h2 class="fw-bold">{{ product.name }}</h2>
      <!-- <p>
        {{ product.description }}
      </p> -->
       <p>
        {{ product.price }}
      </p>
       <p class="badge bg-warning text-dark me-1">
        {{ product.badge}}
      </p>
      <!-- <p>
        {{ product.discount}}
      </p>
       <p v-for="tag in product.tags" :key="tag">
          {{ tag }}
       </p>
      <div class="card-actions justify-start">
        <button class="btn btn-sm" :class="getCTAClass">{{ getCTALabel }}</button>
      </div> -->
      <RouterLink
          :to="`/product/${product.id}`"
          class="btn btn-primary btn-sm"
        >
           View
        </RouterLink>
    </div>
  </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  // actionLabel: {
  //   type: String,
  //   default: "View Product",
  // },
});

// import { computed } from "vue";

// const getCTALabel = computed(() => {
//   return props.product.stock > 0 ? "Buy Now" : "Out of Stock";
// });

// const getCTAClass = computed(() => {
//   return props.product.stock > 0 ? "btn-primary" : "btn-error";
// });
onMounted(() => console.log(`ProductCard mounted — ${props.product.name}`));
onUnmounted(() => console.log(`ProductCard unmounted — ${props.product.name}`));
</script>
