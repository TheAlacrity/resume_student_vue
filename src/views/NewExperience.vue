<template>
  <div class='new-experiences'>
    <div class='container'> 
    <h1>Add A New Experience!</h1>
    <br>
      <form v-on:submit.prevent='submit()'>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCompanyName">Company Name</label>
              <input v-model="newCompanyName" type="text" class="form-control" id="inputCompanyName" placeholder="Company Name">
            </div>

            <div class="form-group col-md-6">
              <label for="inputJobTitle">Title</label>
              <input v-model="newJobTitle" type="text" class="form-control" id="inputJobTitle" placeholder="Job Title">
            </div>
          
            <div class="form-group col-md-6">
              <label for="inputStartDate">Start Date</label>
              <input v-model='newStartDate' type="text" class="form-control" id="inputStartDate" placeholder="Start Date">
            </div>
            <div class="form-group col-md-6">
              <label for="inputEndDate">End Date</label>
              <input v-model='newEndDate' type="text" class="form-control" id="inputEndDate" placeholder="End Date">
            </div>

            <div class="form-group col-md-12">
              <label for="inputDetails">Short Bio</label>
              <textarea v-model='newDetails' class="form-control" id="inputDetails" rows="4"></textarea>
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
      newDetails: '',
      newCompanyName: '',
      newJobTitle: '',
      newStartDate: '',
      newEndDate: ''
    };
  },
  created: function() {
    if (localStorage.getItem('jwt')) {
      axios.get('/api/students/' + localStorage.getItem('user_id')).then(response => {
        this.student = response.data; 
      })
    }
  },
  methods: {
    submit: function() {
      var params = {
                    details: this.newDetails,
                    company_name: this.newCompanyName,
                    job_title: this.newJobTitle,
                    start_date: this.newStartDate,
                    end_date: this.newEndDate
                    }
      axios.post('/api/experiences/', params).then(response => {
        this.$router.push('/students/' + localStorage.getItem('user_id'));
      })
    }
  }
};
</script>
