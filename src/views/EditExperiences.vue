<template>
  <div class='edit-experiences'>
    <div class='container'>    
    <br>
      <form v-on:submit.prevent='submit()'>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCompanyName">Company Name</label>
            <input v-model="experience.company_name" type="text" class="form-control" id="inputCompanyName" v-bind:placeholder="experience.company_name">
          </div>

          <div class="form-group col-md-6">
            <label for="inputJobTitle">Title</label>
            <input v-model="experience.job_title" type="text" class="form-control" id="inputJobTitle" v-bind:placeholder="experience.job_title">
          </div>
        
          <div class="form-group col-md-6">
            <label for="inputStartDate">Start Date</label>
            <input v-model='experience.start_date' type="text" class="form-control" id="inputStartDate" v-bind:placeholder="experience.start_date">
          </div>
          <div class="form-group col-md-6">
            <label for="inputEndDate">End Date</label>
            <input v-model='experience.end_date' type="text" class="form-control" id="inputEndDate" v-bind:placeholder="experience.end_date">
          </div>

          <div class="form-group col-md-12">
            <label for="inputDetails">Short Bio</label>
            <textarea v-model='experience.details' class="form-control" id="inputDetails" rows="4"></textarea>
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
      experience: []
    };
  },
  created: function() {
    if (localStorage.getItem('jwt')) {
      axios.get('/api/experiences/' + this.$route.params.id).then(response => {
        this.experience = response.data; 
      })
    }
  },
  methods: {
    submit: function() {
      var params = {
                    details: this.experience.details, 
                    company_name: this.experience.company_name, 
                    job_title: this.experience.job_title, 
                    start_date: this.experience.start_date,
                    end_date: this.experience.end_date
                    }
      axios.patch('/api/experiences/' + this.$route.params.id, params).then(response => {
        this.$router.push('/students/' + this.experience.student_id);
      })
    }
  }
};
</script>
