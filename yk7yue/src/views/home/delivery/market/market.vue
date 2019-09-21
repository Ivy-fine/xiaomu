<template>
  <div class="foods">
    <foodsitem class="item" v-for="(item,index) in foods" :key="index" :item="item">
          <img :src="require('@/assets/logo.png')" alt="">
    </foodsitem>
  </div>
</template>

<script>
import foodsitem from "@/components/foodsitem/foodsitem.vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  components: {
    foodsitem
  },
  computed: {
    ...mapGetters(["foods"])
  },
  methods: {
    ...mapActions(["getlist"])
  },
  created() {
    this.getlist();
  }
};
</script>

<style lang="scss">
.foods {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  .item{
    width: 33%;
    font-size: 14px;
  }
}
</style>