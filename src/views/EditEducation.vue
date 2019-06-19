<template>
  <div class='edit-education'>
    <div class='container'>
    <br>
      <form v-on:submit.prevent='submit()'>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputDegree">Highest Degree Achieved</label>
            <input v-model="education.degree" type="text" class="form-control" id="inputDegree" v-bind:placeholder="education.degree">
          </div>

          <div class="form-group col-md-6">
            <label for="inputSchooling">School</label>
            <input v-model="education.schooling" type="text" class="form-control" id="inputSchooling" v-bind:placeholder="education.schooling">
          </div>
        
          <div class="form-group col-md-6">
            <label for="inputStartDate">Start Date</label>
            <input v-model='education.start_date' type="text" class="form-control" id="inputStartDate" v-bind:placeholder="education.start_date">
          </div>
          <div class="form-group col-md-6">
            <label for="inputEndDate">End Date</label>
            <input v-model='education.end_date' type="text" class="form-control" id="inputEndDate" v-bind:placeholder="education.end_date">
          </div>

          <div class="form-group col-md-12">
            <label for="inputDetails">Details</label>
            <textarea v-model='education.details' class="form-control" id="inputDetails" rows="4"></textarea>
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
      education: []
    };
  },
  created: function() {
    if (localStorage.getItem('jwt')) {
      axios.get('/api/educations/' + this.$route.params.id).then(response => {
        this.education = response.data; 
      })
    }
  },
  methods: {
    submit: function() {
      var params = {
                    degree: this.education.degree, 
                    schooling: this.education.schooling, 
                    details: this.education.details, 
                    start_date: this.education.start_date,
                    end_date: this.education.end_date
                    }
      axios.patch('/api/educations/' + this.$route.params.id, params).then(response => {
        this.$router.push('/student/' + this.$route.params.id);
      })
    }
  }
};
</script>
