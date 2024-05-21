<template>
    <main>
        <div>
            <button @click="getDatos()">Datos</button>
        </div>
    </main>
</template>

<script setup>
import {servicios} from "@/composables/services.js";
const {get,post} = servicios()

function getDatos() {
    get('tblKUeL6mByctJU0L')
}

</script>