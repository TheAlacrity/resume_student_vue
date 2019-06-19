<template>
  <div class='edit-experience'>
    <ul>
      <li v-for="error in errors">
        {{ error }}
      </li>
    </ul>

    <div class='container'>
      <h1>{{ student.first_name }} {{ student.last_name }}</h1>
        <br>
      <form v-on:submit.prevent='submit()'>  
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputFirstName">First Name</label>
              <input v-model="student.first_name" type="text" class="form-control" id="inputLastName" v-bind:placeholder='student.first_name'>
            </div>
            
            <div class="form-group col-md-6">
              <label for="inputLastName">Last Name</label>
              <input v-model='student.last_name' type="text" class="form-control" id="inputLastName" v-bind:placeholder="student.last_name">
            </div>
          </div>

          <div class="form-group">
            <label for="inputEmail">Email</label>
            <input v-model='student.email' type="text" class="form-control" id="inputEmail" v-bind:placeholder="student.email">
          </div>

          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputPhoneNuber">Phone Number</label>
              <input v-model='student.phone_number' type="text" class="form-control" id="inputPhoneNumber" v-bind:placeholder="student.phone_number">
            </div>
          </div>

          <div class="form-group">
            <label for="inputShortBio">Short Bio</label>
            <textarea v-model='student.short_bio' class="form-control" id="inputShortBio" rows="3"></textarea>
          </div>

          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputLinkedIn">Linked In URL</label>
              <input v-model='student.linked_in_url' type="text" class="form-control" id="inputLinkedIn" v-bind:placeholder='student.linked_in_url'>
            </div>

            <div class="form-group col-md-4">
              <label for="inputGitHub">GitHub URL</label>
              <input v-model='student.github_url' id="inputGitHub" class="form-control" v-bind:placeholder='student.github_url'>        
            </div>

            <div class="form-group col-md-4">
              <label for="inputPersonalBlog">Personal Blog</label>
              <input v-model='student.personal_blog' id="inputPersonalBlog" class="form-control" v-bind:placeholder='student.personal_blog'>        
            </div>

            <div class="form-group col-md-6">
              <label for="inputTwitterHandle">Twitter Handle</label>
              <input v-model='student.twitter_handle' id="inputTwitterHandle" class="form-control" v-bind:placeholder='student.twitter_handle'>        
            </div>

            <div class="form-group col-md-6">
              <label for="inputResumeUrl">Resume URL</label>
              <input v-model='student.resume_url' id="inputResumeUrl" class="form-control" v-bind:placeholder='student.resume_url'>        
            </div>

            <div class="form-group col-md-12">
              <label for="inputImageURL">Image URL</label>
              <input v-model='student.image_url' type="text" class="form-control" id="inputImageURL" v-bind:placeholder='student.image_url'>
          </div>
        </div>
      <center><button type="submit" class="btn btn-primary">Update</button></center>
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
      student: [],
      errors: []

    };
  },
  created: function() {
    if (localStorage.getItem('jwt')) {
      axios.get('/api/students/' + this.$route.params.id).then(response => {
        this.student = response.data; 
        console.log(this.student);
      })
    }
  },
  methods: {
    submit: function() {
      var params = {
                    first_name: this.student.first_name, 
                    last_name: this.student.last_name, 
                    email: this.student.email, 
                    phone_number: this.student.phone_number,
                    short_bio: this.student.short_bio, 
                    linked_in_url: this.student.linked_in_url, 
                    github_url: this.student.github_url, 
                    resume_url: this.student.resume_url, 
                    personal_blog: this.student.personal_blog, 
                    twitter_handle: this.student.twitter_handle
                    }
      axios.patch('/api/students/' + this.$route.params.id, params).then(response => {
        this.$router.push('/student/' + this.$route.params.id);
      }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
