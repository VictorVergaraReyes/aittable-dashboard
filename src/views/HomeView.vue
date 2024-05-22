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
      <input v-model="calleForm" type="text" class="form-control">
      <label for="">Ciudad</label>
      <input v-model="ciudadForm" type="text" class="form-control">
      <label for="">Código Postal</label>
      <input v-model="cpForm" type="text" class="form-control">
      <label for="">Estado</label>
      <select name="" id="" v-model="estadoForm" class="form-control">
        <option v-for="estado in estadosMexico" :value="estado.name">{{ estado.name }}</option>
      </select>
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
      @click="enviar()"
    >Enviar datos</button>
  </main>
</template>


<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {servicios} from "@/composables/services.js";
import Swal from "sweetalert2";
import {ref} from 'vue'

const {createRecord} = servicios()
//usuario
const nombreForm = ref("")
const apellidoForm = ref("")
const emailForm = ref("")
const telefonoForm = ref("")
//direccion
const calleForm = ref("")
const ciudadForm = ref("")
const cpForm = ref("")
const estadoForm = ref("")
const estadosMexico = [
  { name: "Aguascalientes", capital: "Aguascalientes" },
  { name: "Baja California", capital: "Mexicali" },
  { name: "Baja California Sur", capital: "La Paz" },
  { name: "Campeche", capital: "San Francisco de Campeche" },
  { name: "Chiapas", capital: "Tuxtla Gutiérrez" },
  { name: "Chihuahua", capital: "Chihuahua" },
  { name: "Ciudad de México", capital: "Ciudad de México" },
  { name: "Coahuila de Zaragoza", capital: "Saltillo" },
  { name: "Colima", capital: "Colima" },
  { name: "Durango", capital: "Durango" },
  { name: "Guanajuato", capital: "Guanajuato" },
  { name: "Guerrero", capital: "Chilpancingo de los Bravo" },
  { name: "Hidalgo", capital: "Pachuca de Soto" },
  { name: "Jalisco", capital: "Guadalajara" },
  { name: "Estado de México", capital: "Toluca de Lerdo" },
  { name: "Michoacán de Ocampo", capital: "Morelia" },
  { name: "Morelos", capital: "Cuernavaca" },
  { name: "Nayarit", capital: "Tepic" },
  { name: "Nuevo León", capital: "Monterrey" },
  { name: "Oaxaca", capital: "Oaxaca de Juárez" },
  { name: "Puebla", capital: "Puebla de Zaragoza" },
  { name: "Querétaro", capital: "Santiago de Querétaro" },
  { name: "Quintana Roo", capital: "Chetumal" },
  { name: "San Luis Potosí", capital: "San Luis Potosí" },
  { name: "Sinaloa", capital: "Culiacán" },
  { name: "Sonora", capital: "Hermosillo" },
  { name: "Tabasco", capital: "Villahermosa" },
  { name: "Tamaulipas", capital: "Ciudad Victoria" },
  { name: "Tlaxcala", capital: "Tlaxcala de Xicohténcatl" },
  { name: "Veracruz de Ignacio de la Llave", capital: "Xalapa de Enríquez" },
  { name: "Yucatán", capital: "Mérida" },
  { name: "Zacatecas", capital: "Zacatecas" },
];





function crearUsuario(){
  let fields = {
    "Nombre":nombreForm.value,
    "Apellido":apellidoForm.value,
    "email":emailForm.value,
    "Teléfono":telefonoForm.value
  }

    createRecord(fields,
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
            "Algo salió mal, No se registro el usuario!",
        });
    })
}

function crearDireccion(){
  let fields = {
    "Calle":calleForm.value,
    "Ciudad":ciudadForm.value,
    "CP":Number(cpForm.value),
    "fldvahj4p3tBCNTlj":[estadoForm.value] //id de la columna estados de columna direcciones
  }


  createRecord(fields,
      'tblB7PihYGIRSX0Gy')
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
          "Algo salió mal, No se registro la dirección!",
        });
    })
}


function enviar(){
  crearUsuario()  
  crearDireccion()
}

function vaciarCampos(){
  nombreForm.value = ""
  apellidoForm.value = ""
  emailForm.value = ""
  telefonoForm.value = ""
  calleForm.value = ""
  ciudadForm.value = ""
  cpForm.value = ""
  estadoForm.value = ""
}



</script>