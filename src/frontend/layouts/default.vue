<template>
    <div id="content">
        <Header />
        <div class="main_content">
          <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup></script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }

  #content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .main_content {
      flex-grow: 1;
    }
  }
</style>