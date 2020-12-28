<template>
  <div class="movieList">
      <h2 v-if="displayMovieList">Фильмы</h2>
      <h2 class="movieList__back" @click='displayMovieList = true, selectedMovie = {}, newMovieList()' v-if="displayMovieList == false">&lt; Назад к списку</h2>
      <div class="sort" v-if="displayMovieList">
          <div class="sort__name">
            <input type="checkbox" id="nameSort" name="nameSort" v-on:click='toggleNameSort'>
            <label for="nameSort">Отсортировать по названию</label>
          </div>
          <div class="sort__year">
            <input type="checkbox" id="yearSort" name="yearSort" v-on:click='toggleYearSort'>
            <label for="yearSort">Отсортировать по году</label>
          </div>
    </div>
    <hr>
    <div v-if="loading">
      <Loader />
    </div>
    <div v-if="displayMovieList" @click='loadMovie' >
      <div @click="displayMovieList = false" >
        <MovieItem 
          v-bind:key="movie.id"
          v-for="movie of movies"
          v-bind:movie="movie"
          @itemSelect='selectedMovieItem'
        />
      </div>
    </div>
    <div v-if="displayMovieList == false && loading == false">
      <SelectedMovie 
        v-bind:key="selectedMovie.id"
        v-bind:selectedMovie="selectedMovie"
      />
    </div>

  </div>
</template>

<script>
import MovieItem from './MovieItem.vue'
import SelectedMovie from './SelectedMovie.vue'
import Loader from './Loader.vue'
import '../assets/MovieList.scss'
import '../assets/Sort.scss'

export default {
  data() {
    return {
      movies: [],
      checkboxName: false,
      checkboxYear: false,
      notSortedMovies: [],
      displayMovieList: true,
      selectedMovie: {},
      selectedMovieId: '',
      loading: false
    }
  },
  mounted() {
    this.loading = true
    fetch('https://floating-sierra-20135.herokuapp.com/api/movies')
      .then((response) => response.json())
      .then(json => {
          setTimeout(() => { 
            this.movies = json.data
            this.movies.forEach(el => this.notSortedMovies.push(el))
            this.loading = false
          }, 1000)
      })
  },
  methods: {
    toggleNameSort: function() {
      this.checkboxName = !this.checkboxName
      if (document.getElementById('yearSort').checked) {
        document.getElementById('yearSort').checked = false
        this.checkboxYear = !this.checkboxYear
      }
      if (this.checkboxName) {
        this.movies.sort(function(a, b) {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
            return 0;
        })
      }
      if (this.checkboxName == false) {
        this.movies = []
        this.notSortedMovies.forEach(el => this.movies.push(el))
      }
    },
    toggleYearSort: function() {
      this.checkboxYear = !this.checkboxYear
      if (document.getElementById('nameSort').checked) {
        document.getElementById('nameSort').checked = false
        this.checkboxName = !this.checkboxName
      }
      if (this.checkboxYear) {
        this.movies.sort(function(a, b) {
          if (a.year > b.year) {
            return 1;
          }
          if (a.year < b.year) {
            return -1;
          }
            return 0;
        })
      }
      if (this.checkboxYear == false) {
        this.movies = []
        this.notSortedMovies.forEach(el => this.movies.push(el))
      }
    },
    selectedMovieItem(data) {
      this.selectedMovieId = data
    },
    loadMovie() {
      this.loading = true
      this.path = ''
      fetch('https://floating-sierra-20135.herokuapp.com/api/movie/' + this.selectedMovieId)
      .then((response) => response.json())
      .then(json => {
          setTimeout(() => { 
            this.selectedMovie = json.data
            this.loading = false
          }, 1000)
      })
    },
    newMovieList() {
    this.movies = []
    this.notSortedMovies = []
    this.loading = true
    fetch('https://floating-sierra-20135.herokuapp.com/api/movies')
      .then((response) => response.json())
      .then(json => {
          setTimeout(() => { 
            this.movies = json.data
            this.movies.forEach(el => this.notSortedMovies.push(el))
            this.loading = false
          }, 1000)
      })
    }
  },
  components: {
    MovieItem,
    SelectedMovie,
    Loader
  }
}
</script>

<style>


</style>