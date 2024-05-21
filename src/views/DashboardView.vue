<template>
    <main>
        <div>
            <button @click="getDatos()">Datos</button>
        </div>
        <table>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Teléfono</th>                
            </tr>
            <tr v-if="ended" v-for="user in users">
                <!-- <td>{{users.value[0].id}}</td> -->
                <td></td>
                <td></td>
                <td></td>
            </tr>
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
        console.log(users.value[0].fields.Id);
        
    }).catch((err) => {
        console.log(error);
    });
}

</script>