<template>
    <div class="sensor">
        <div class="col-md-12" v-if="adduser">
            <h2>Создайте датчик</h2>
            <form v-on:submit.prevent="create_user">
                <div class="form-group" style="margin: 20px;">
                    <input type="text" name="name" class="form-control"   placeholder="Введите название датчика" v-model="form.name">
                </div>
                <div class="form-group" style="margin: 20px;">
                    <input type="text" name="inaccuracy" class="form-control" id="exampleInputEmail1"  placeholder="Введите Погрешность" v-model="form.inaccuracy">
                </div>
                <div class="form-group" style="margin: 20px;">
                    <input type="text" name="name_room" class="form-control" id="exampleInputEmail1"  placeholder="Введите размещение датчика" v-model="form.name_room">
                </div>
                <div class="form-group" style="margin: 20px;">
                    <input type="text" name="id_parametr" class="form-control" id="exampleInputEmail1" placeholder="Выберите Параметр" v-model="form.id_parametr">
                </div>
                <div class="form-group" style="margin: 20px;">
                    <input type="text" name="coordinates" class="form-control" id="exampleInputEmail1"  placeholder="Введите Координаты датчика" v-model="form.coordinates">
                </div>
            <button type="submit" class="btn btn-primary">Создать</button>
            </form>
    </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
export default {
mounted () {
    //getting user data

  },
data(){
  return {
    edituser:false,
    adduser:true,
    form:{
      name: '',
      inaccuracy: '',
      name_room: '',
      id_parametr: '',
      coordinates: '',
    },
  }
},
methods:{
  //add new sensor
  create_user(){
    
      axios //
      .post('http://localhost:5000/api/sensor/',this.form)
      .then((resp) =>{
          console.log(resp);
          //reset form
         this.form.name = '';
         this.form.inaccuracy = '';
         this.form.name_room = '';
         this.form.id_parametr = '';
         this.form.coordinates = '';
         alert("Данные успешно внесены")
      })
      
      .catch((e)=>{
          console.log(e);
      })
    },

    
},
}
</script>

<style scoped>
.sensor{
    margin-top: 100px;
}
</style>