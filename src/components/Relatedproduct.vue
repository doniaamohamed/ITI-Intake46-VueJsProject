<template>
  <div class="card h-100 shadow-sm border-0">
    <figure>
      <img :src="product.image" class="card-img-top"/>
    </figure>

    <div class="card-body d-flex flex-column">
      <h2 class="card-title">{{ product.name }}</h2>
      <p class="fw-bold">{{ product.discount }}%</p>
      <p class="fw-bold text-success">{{ finalPrice }}</p>
      <p v-if="product.discount > 0" style="text-decoration: line-through;">
        {{ product.price }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props=defineProps({
  product: {
    type: Object,
    required: true,
  },
});
import { computed } from "vue";
const finalPrice = computed(() => {
  return props.product.price-(props.product.price*props.product.discount)/100;
});
</script>