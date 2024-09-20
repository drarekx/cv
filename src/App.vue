<script setup lang="ts"></script>

<template>
  <div class="flex h-screen">
    <!-- Menú lateral -->
    <nav class="w-1/5 bg-gray-800 text-white p-5 flex flex-col">
      <ul class="space-y-4">
        <li><a href="#inicio" class="hover:text-blue-400">Inicio</a></li>
        <li><a href="#sobre-mi" class="hover:text-blue-400">Sobre mí</a></li>
        <li><a href="#experiencia" class="hover:text-blue-400">Experiencia</a></li>
        <li><a href="#proyectos" class="hover:text-blue-400">Proyectos</a></li>
        <li><a href="#contacto" class="hover:text-blue-400">Contacto</a></li>
      </ul>
    </nav>

    <!-- Contenido principal -->
    <div class="w-4/5 p-10 bg-white overflow-y-auto">
      <section id="inicio">
        <h1 class="text-4xl font-bold mb-5">Bienvenido a Mi CV</h1>
        <p class="text-lg">Este es el resumen de mis habilidades, experiencias y proyectos.</p>
      </section>

      <section id="sobre-mi" class="mt-10">
        <h2 class="text-3xl font-semibold mb-3">Sobre mí</h2>
        <p class="text-lg">Descripción breve sobre ti.</p>
      </section>

      <section id="experiencia" class="mt-10">
        <h2 class="text-3xl font-semibold mb-3">Experiencia</h2>
        <p class="text-lg">Descripción de tu experiencia profesional.</p>
      </section>

      <section id="proyectos" class="mt-10">
        <h2 class="text-3xl font-semibold mb-3">Proyectos</h2>
        <p class="text-lg">Resumen de los proyectos en los que has trabajado.</p>
      </section>

      <section id="contacto" class="mt-10">
        <h2 class="text-3xl font-semibold mb-3">Contacto</h2>
        <p class="text-lg">Información de contacto.</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
