<template>
  <div id="app">
    <header>
      <h1>#MOVIENOW</h1>
    </header>
    <main>
      <div class="mainContent">
        <MovieList />
      </div>
    </main>
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue'
import './assets/app.scss'

export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
