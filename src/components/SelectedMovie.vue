<template>
  <div class="movieSelectedItem">
      <div class="movieItem__poster">
          <img :src="selectedMovie.poster" width=112 height=168/>
      </div>
      <div class="movieItem__content">
          <h2>{{ selectedMovie.title }}</h2>
          <p v-if="selectedMovie.genres">{{ selectedMovie.year }}, {{ selectedMovie.genres.join(', ') }}</p>
          <p v-if="selectedMovie.directors">Режиссёр: {{ selectedMovie.directors.join(', ') }} </p>
          <div v-if="selectedMovie.actors" class="movieItem__content__actors">
            <p>Актеры:</p><p> {{ selectedMovie.actors.join(', ') }} </p>
          </div>
          
          <p v-if="selectedMovie.description" class="movieItem__content__description"> {{ selectedMovie.description }} </p>
      </div>
      <div v-if="selectedMovie.collapse">
        <div v-if="selectedMovie.collapse.duration" class="movieItem__duration">
            <p> {{ selectedMovie.collapse.duration.toString() }} </p>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z" fill="#FA2828" fill-opacity="0.98"/>
            </svg>
        </div>
      </div>

  </div>
</template>

<script>
import '../assets/SelectedMovie.scss'

export default {
    props: {
        selectedMovie: {
            type: Object,
            required: true
        }
    }
  }
</script>

<style>

</style>