<template>
    <main>
        <div>
            <button @click="getDatos()">Datos</button>
        </div>
        <table>
            <tr>
                
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Teléfono</th>
                    <th>Correo electrónico</th>
                    <th>Direcciones</th>
                    <th>Seguros</th>
                    </tr>
            </tr>
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
const {get,post} = servicios()
const telefono = ref()
const ended = ref(false)
const users = ref({})

function getDatos() {
    get('tblKUeL6mByctJU0L').then((result) => {        
        ended.value = true
        users.value = result.records;
        console.log(users.value);
        
    })
    .catch((err) => {
        console.log(error);
    });
}

</script>