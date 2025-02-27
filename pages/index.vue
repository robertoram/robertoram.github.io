<template>
  <div class="min-h-screen bg-gray-800 flex items-strech justify-center">
    <div class="w-full flex-1 bg-gray-900 shadow-lg rounded-lg p-8 m-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Panel Izquierdo (Ficha de Contacto) -->
      <div class="md:col-span-1 flex flex-col items-center text-center p-4 border-r">
        <img src="/profile.jpg" alt="Foto de perfil" class="w-32 h-32 rounded-full border-4 border-blue-500">
        <h2 class="mt-4 text-xl font-semibold text-gray-800">Tu Nombre</h2>
        <p class="text-gray-600">Desarrollador de Software</p>
        <p class="text-gray-500 text-sm">Empresa Actual</p>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="text-blue-500 text-2xl"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-gray-800 text-2xl"><i class="fab fa-github"></i></a>
          <a href="#" class="text-blue-400 text-2xl"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

      <!-- Panel Derecho -->
      <div class="md:col-span-2 space-y-6">
        <!-- About Me -->
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">About Me</h2>
          <p class="text-gray-600 mt-2">
            Aquí puedes escribir una breve descripción sobre ti, tu experiencia y lo que te apasiona en el mundo del desarrollo.
          </p>
          <a href="/cv.pdf" download class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition">
            Descargar CV
          </a>
        </div>

        <!-- Intereses y Habilidades -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Intereses -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800">Intereses</h3>
            <ul class="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Desarrollo Web</li>
              <li>Inteligencia Artificial</li>
              <li>Videojuegos</li>
              <li>Automatización</li>
            </ul>
          </div>

          <!-- Habilidades -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800">Habilidades</h3>
            <ul class="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>JavaScript & Vue.js</li>
              <li>Node.js & Express</li>
              <li>SQL & NoSQL Databases</li>
              <li>Docker & Kubernetes</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
