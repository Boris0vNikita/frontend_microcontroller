<template>
  <div class="hello">
    <h1 class="text-center">Список данных с датчиков</h1>
   
   <table class="table table-hover table-bordered" id="example">
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
        <th> </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="view in views" :key="view.id_removingIndicators">
        <td>{{view.id_removingIndicators}}</td>
        <td>{{view.name_sensor}}</td>
        <td>{{view.measurement}}</td>
        <td>{{view.inaccuracy}}</td>
        <td>{{view.name_parametr}}</td>
        <td>{{view.name}}</td>
        <td>{{view.name_room}}</td>
        <td>{{view.coordinates}}</td>
        <td> {{ formatDate(view.date)}}</td> 
        <td><a href="#"  class="btn btn-success" @click="detailed(view.id_removingIndicators)">Подробнее</a></td>
        <!-- <td> {{ new Date(view.date).toISOString().replace(/T/, ' ').replace(/\..+/, '') }}</td>  -->
      </tr>
      
    </tbody>
  </table>
  </div>
</template>

<script>
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css'; //for table good looks
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import "jszip"
import $ from 'jquery'; 
import axios from 'axios'; //for api calling

import formatDateMixin from '@/services/mixins.js';

export default {
 
  mounted(){
    //Web api calling for dynamic data and you can also use into your demo project
    axios
    .get("http://localhost:5000/api/view/")
    .then((res)=>
    {
      this.views = res.data;
      setTimeout(function(){
      $('#example').DataTable(
          {
              pagingType: 'full_numbers',
                pageLength: 5,
                processing: true,
                dom: 'Bfrtip',
                buttons: [{extend: 'copy',
                          text: 'Копировать'},
                          {extend: 'print',
                          text: 'Печать'},
                          {
                              extend: 'csv',
                              text: 'Exel',
                              charset: 'utf-8',
                              extension: '.csv',
                              fieldSeparator: ';',
                              fieldBoundary: '',
                              filename: 'export',
                              bom: true
                          }
                        ]
                    
          }
      );
      },
        1000
        );
    })
    
  },
 
  data: function() {
        return {
          views:[]
        }
  },
  mixins: [formatDateMixin],
  methods:{

    detailed(id_removingIndicators){
      this.$router.push('/one/'+id_removingIndicators)
      console.log(this.$route.params);
    },
    
  },

  computed: {
            formattedDate() {
              console.log(this.formatDate(this.views.date));
                return this.formatDate(this.views.date);
            }
  }
        
}
</script>


<style scoped>
 .hello{
  margin-top: 100px;
} 
tr{
  color: blueviolet;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
