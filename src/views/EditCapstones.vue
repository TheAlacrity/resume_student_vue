<template>
  <div class='edit-capstones'>
    <div class='container'>
    <br>
      <form v-on:submit.prevent='submit()'>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputName">Capstone Title</label>
            <input v-model="capstone.name" type="text" class="form-control" id="inputName" v-bind:placeholder="capstone.name">
          </div>

          <div class="form-group col-md-6">
            <label for="inputScreenshot">Screenshot</label>
            <input v-model="capstone.screenshot" type="text" class="form-control" id="inputScreenshot" v-bind:placeholder="capstone.screenshot">
          </div>
        
          <div class="form-group col-md-12">
            <label for="inputUrl">URL</label>
            <input v-model='capstone.url' type="text" class="form-control" id="inputUrl" v-bind:placeholder="capstone.url">
          </div>

          <div class="form-group col-md-12">
            <label for="inputDescription">Description</label>
            <textarea v-model='capstone.description' class="form-control" id="inputDescription" rows="4"></textarea>
          </div>
        </div>
      <center><button type="submit" class="btn btn-primary">Update</button></center>
        <br>
    </form>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      capstone: []
    };
  },
  created: function() {
    if (localStorage.getItem('jwt')) {
      axios.get('/api/capstones/' + this.$route.params.id).then(response => {
        this.capstone = response.data; 
      })
    }
  },
  methods: {
    submit: function() {
      var params = {
                    name: this.capstone.name, 
                    description: this.capstone.description,
                    url: this.capstone.url,
                    screenshot: this.capstone.screenshot
                    }
      axios.patch('/api/capstones/' + this.$route.params.id, params).then(response => {
        this.$router.push('/student/' + this.$route.params.id);
      })
    }
  }
};
</script>
