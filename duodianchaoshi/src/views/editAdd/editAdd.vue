<template>
  <div class="edit">
      <p>姓名:<input type="text" v-model="name"></p>
      <p>电话:<input type="text" v-model="tel"></p>
      <p>地址:<input type="text" v-model="address"></p>
      <button @click="save">保存</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data(){
        return {
            name:'',
            tel:'',
            address:'',
            update:false
        }
    },
    methods:{
        ...mapMutations(['saveAddress','updateAddress']),
        save(){
            let {id} = this.$route.query
            let {name,tel,address,update} = this
            update ? this.updateAddress({name,tel,address,id}) : 
            this.saveAddress({name,tel,address})
            this.$router.push('/addresslist')
        }
    },
    created(){
        let {id,name,tel,address} = this.$route.query
        if(id){
            this.name = name;
            this.tel = tel;
            this.address = address;
            this.update = true
        }
    }
}
</script>

<style lang="scss">

</style>