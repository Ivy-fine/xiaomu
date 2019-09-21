<template>
  <div class="detail">
      <banner/>
      <foodsitem :item="item"/>
  </div>
</template>

<script>
import foodsitem from "@/components/foodsitem/foodsitem.vue";
import banner from "@/components/banner/banner.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    foodsitem,
    banner
  },
  computed:{
    ...mapGetters(['foods']),
    item(){
      return this.foods.filter(item=>item.id==this.$route.params.id)[0]
    }
  }
}
</script>

<style>

</style>