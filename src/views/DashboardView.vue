<template>
    <main>
        <div>
            <button @click="getDatos()">Datos</button>
        </div>
        <table class="table">
            <thead>
                
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Teléfono</th>
                    <th>Correo electrónico</th>
                    </tr>
                </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                <td>{{ user.fields.Id }}</td>
                <td>{{ user.fields.Nombre }}</td>
                <td>{{ user.fields.Apellido }}</td>
                <td>{{ user.fields.Teléfono }}</td>
                <td>{{ user.fields.email }}</td>
                </tr>
      </tbody>
        </table>
        <button @click="getDirecciones()">Direcciones</button>
        <table class="table">
            <thead>                
                <tr>
                    <th>IdDireccion</th>
                    <th>Calle</th>
                    <th>Ciudad</th>
                    <th>Estado</th>
                    <th>Código Postal</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="adress in addresses" :key="adress.id">
                    <td>{{ adress.fields.IdDireccion }}</td>
                    <td>{{ adress.fields.Calle }}</td>
                    <td>{{ adress.fields.Ciudad }}</td>
                    <td>{{ adress.fields.Estados[0] }}</td>
                    <td>{{ adress.fields.CP }}</td>
                    
                </tr>
      </tbody>
        </table>
        <button @click="getSeguros()">Seguros</button>
        <table class="table">
            <thead>                
                <tr>
                    <th>Id seguro</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Fecha de inicio</th>
                    <th>Fecha de vencimieto</th>
                    <th>Usuario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="insurance in insurances" :key="insurance.id">
                    <td>{{ insurance.fields.IdSeguro }}</td>
                    <td>{{ insurance.fields.Nombre[0] }}</td>
                    <td>{{ insurance.fields.Tipo[0] }}</td>
                    <td>{{ insurance.fields.FechaDeInicio }}</td>
                    <td>{{ insurance.fields.FechaDeVencimiento }}</td>                    
                    <td>{{ insurance.fields.Usuario[0] }}</td>  
                </tr>
      </tbody>
        </table>
        
    </main>
</template>

<script setup>
import {servicios} from "@/composables/services.js";
import {ref} from 'vue'
const {getRecord,createRecord} = servicios()
const telefono = ref()
const ended = ref(false)
const users = ref({})
const addresses = ref({})
const insurances = ref({})

function getDatos() {
    getRecord('tblKUeL6mByctJU0L').then((result) => {        
        ended.value = true
        users.value = result.records;
        console.log(users.value);
        
    })
    .catch((err) => {
        console.log(err);
    });
}


function getDirecciones() {
    getRecord('tblB7PihYGIRSX0Gy').then((result) => {        
        addresses.value = result.records;
        console.log(addresses.value);
        
    })
    .catch((err) => {
        console.log(err);
    });
}


function getSeguros() {
    getRecord('tbla2gA7JEzvxhv4b').then((result) => {        
        insurances.value = result.records;
        console.log(insurances.value);
        
    })
    .catch((err) => {
        console.log(err);
    });
}


</script>