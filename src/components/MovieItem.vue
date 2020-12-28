<template>
  <div class="movieItem" @click='itemSelect'>
      <div class="movieItem__poster">
          <img :src="movie.poster" width=112 height=168/>
      </div>
      <div class="movieItem__content">
          <h2>{{ movie.title }}</h2>
          <p>{{ movie.year }}, {{ movie.genres.join(', ') }}</p>
          <p v-if="movie.directors">Режиссёр: {{ movie.directors.join(', ') }} </p>
          <div v-if="movie.actors" class="movieItem__content__actors">
            <p>Актеры:</p><p> {{ movie.actors.join(', ') }} </p>
          </div>
          <p v-if="movie.description" class="movieItem__content__description"> {{ movie.description }} </p>
      </div>
      <div v-if="movie.collapse.duration" class="movieItem__duration">
          <p> {{ movie.collapse.duration.toString() }} </p>
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z" fill="#FA2828" fill-opacity="0.98"/>
          </svg>
      </div>
  </div>
</template>

<script>
import '../assets/MovieItem.scss'

export default {
    props: {
        movie: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            selectedMovie: ''
    }
  },
    methods: {
        itemSelect() {
            this.selectedMovie = this.movie.id
            this.$emit('itemSelect', this.selectedMovie)
        }
    }
}
</script>