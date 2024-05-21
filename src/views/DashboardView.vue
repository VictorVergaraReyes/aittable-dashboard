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
    </main>
</template>

<script setup>
import {servicios} from "@/composables/services.js";
import {ref} from 'vue'
const {getRecord,createRecord} = servicios()
const telefono = ref()
const ended = ref(false)
const users = ref({})

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

function postDatos(){
    createRecord('tblKUeL6mByctJU0L')
}

</script>