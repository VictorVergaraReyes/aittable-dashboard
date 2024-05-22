<template>
  <main>
    <h1>Crear usuario</h1>
    <form>
      <label for="">Nombre</label>
      <input v-model="nombreForm" type="text" class="form-control">
      <label for="">Apellido</label>
      <input v-model="apellidoForm" type="text" class="form-control">
      <label for="">Email</label>
      <input v-model="emailForm" type="text" class="form-control">
      <label for="">Teléfono</label>
      <input v-model="telefonoForm" type="text" class="form-control" minlength="12" maxlength="12">
    </form>
    <form>
      <h2>Dirección</h2>
      <label for="">Calle</label>
      <input type="text" class="form-control">
      <label for="">Ciudad</label>
      <input type="text" class="form-control">
      <label for="">Código Postal</label>
      <input type="text" class="form-control">
    </form>
    <form>
      <h2>Seguro</h2>
      <label for="">Nombre</label>
      <select class="form-control selectpicker" name="" id="">
        <option value="Afirme">Afirme</option>
        <option value="GNP">GNP</option>
        <option value="Mapfre">Mapfre</option>
        <option value="Qualitas">Qualitas</option>
      </select>
      <label for="">Tipo</label>
      <select class="form-control selectpicker" name="" id="">
        <option value="">Gastos médicos mayores</option>
        <option value="">Gastos médicos menores</option>
        <option value="">Autos</option>
        <option value="">Motos</option>
      </select>
      <label for="">Fecha de inicio</label>
      <input type="date" class="form-control selectpicker">
      <label for="">Fecha de vencimieto</label>
      <input type="date" class="form-control selectpicker">
    </form>
    <br><br>
    <button class="form-control selectpicker"
      @click="crearUsuario()"
    >Crear usuario</button>
  </main>
</template>


<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {servicios} from "@/composables/services.js";
import Swal from "sweetalert2";
import {ref} from 'vue'

const {createRecord} = servicios()

const nombreForm = ref("")
const apellidoForm = ref("")
const emailForm = ref("")
const telefonoForm = ref("")



function crearUsuario(){

    createRecord(
      nombreForm.value,
      apellidoForm.value,
      emailForm.value,
      telefonoForm.value,
      'tblKUeL6mByctJU0L')
    .then(()=>{
        console.log("usuario registrado");
        vaciarCampos()

        Swal.fire({
          type: "exito",
          time:500,
          title:
            "Usuario registrado con éxito!",
        });
    })
    .catch((error)=>{
        console.log(error)
        vaciarCampos()

        Swal.fire({
          type: "error",
          time:500,
          title:
            "Algo salió mal, en breve un ejecutivo te contactará para mantener tu descuento!",
        });
    })
}

function vaciarCampos(){
  nombreForm.value = ""
  apellidoForm.value = ""
  emailForm.value = ""
  telefonoForm.value = ""
}



</script>