<template>
  <main>
    <h1>Crear usuario</h1>
    <form>
      <label for="">Nombre</label>
      <input type="text" class="form-control">
      <label for="">Apellido</label>
      <input type="text" class="form-control">
      <label for="">Email</label>
      <input type="text" class="form-control">
      <label for="">Teléfono</label>
      <input type="text" class="form-control">
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
    <button class="form-control selectpicker">Crear usuario</button>
  </main>
</template>


<script setup>
import TheWelcome from '../components/TheWelcome.vue'


</script>