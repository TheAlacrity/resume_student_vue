<template>
  <div class='new-capstones'>
    <div class='container'>
    <h1>New Capstone</h1>
    <br>
      <form v-on:submit.prevent='submit()'>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="newName">Capstone Title</label>
            <input v-model="newName" type="text" class="form-control" id="newName" placeholder="Capstone Name">
          </div>

          <div class="form-group col-md-6">
            <label for="newDescription">Screenshot</label>
            <input v-model="newScreenshot" type="text" class="form-control" id="inputScreenshot" placeholder="New Screenshot">
          </div>
        
          <div class="form-group col-md-12">
            <label for="inputUrl">URL</label>
            <input v-model='newUrl' type="text" class="form-control" id="inputUrl" placeholder="New URL">
          </div>

          <div class="form-group col-md-12">
            <label for="inputDescription">Description</label>
            <textarea v-model='newDescription' class="form-control" id="inputDescription" rows="4"></textarea>
          </div>
        </div>
      <center><button type="submit" class="btn btn-primary">Update</button></center>
        <br>
      </form>
      </div>
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
            newName: "",
            newDescription: "",
            newUrl: "",
            newScreenshot: "",
      }
  }, 
  created: function() {
    if (localStorage.getItem('jwt')) {
      axios.get('/api/students/' + localStorage.getItem('id')).then(response => {
        this.student = response.data; 
      })
    }
  },
  methods: {
    submit: function() {
      var params = {
                    name: this.newName, 
                    description: this.newDescription, 
                    url: this.newUrl, 
                    screenshot: this.newScreenshot
                    }
      axios.post('/api/capstones/', params).then(response => {
        this.$router.push('/capstones/' + this.$route.params.id);
      })
    }
  }
};
</script>
