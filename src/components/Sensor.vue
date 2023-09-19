<template>
  <div class="sensor">
  <div class="container mb-5 mt-5">
      <div class="row">
      <div class="col-md-12 ">
      <table class="table table-bordered">
      <thead>
        <tr>
            <th>ID</th>
            <th>Название датчика</th>
            <th>Измерение</th>
            <th>Погрешность</th>
            <th>Параметр</th>
            <th>Ед.измерения</th>
            <th>Дислокация</th>
            <th>Координаты</th>
            <th>Время Измерения</th>
        </tr>
      </thead>
      <tbody> 
        <!-- v-for="post in posts" :key="post.id_removingIndicators" -->
        <tr v-for="post in posts" :key="post.id_removingIndicators" >
          <td scope="row">{{post.id_removingIndicators}}</td>
          <td>{{post.name_sensor}}</td>
          <td>{{post.measurement}}</td>
          <td>{{post.inaccuracy}}</td>
          <td>{{post.name_parametr}}</td>
          <td>{{post.name}}</td>
          <td>{{post.name_room}}</td>
          <td>{{post.coordinates}}</td>
          <td>{{formatDate(post.date)}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import { useRouter } from "vue-router";
import formatDateMixin from '@/services/mixins.js';

export default {
  props:{
    id: {
        type: Number,
        required: true,
      }
  },
mounted () {
    this.detailedFromList(this.$route.params.id);

  },
  mixins: [formatDateMixin],
data(){
  return {
    posts:[],
    
  }
},
methods:{
  detailedFromList(id){

    axios
      .get('http://localhost:5000/api/view/'+id)
      .then((resp) => {
        console.log(resp);
        this.posts = resp.data;
      })
  },
  
 
},
computed:{
  formattedDate() {
              console.log(this.formatDate(this.views.date));
                return this.formatDate(this.views.date);
            }
}
}
</script>

<style scoped>
.sensor{
  margin-top: 50px;
}
tr{
  color: blueviolet;
}
</style>