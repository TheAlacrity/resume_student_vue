<template>
  <div class='edit-education'>
    <div class='container'>
    <h1>Add A New Degree!</h1>
    <br>
      <form v-on:submit.prevent='submit()'>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputDegree">New Degree</label>
              <input v-model="newDegree" type="text" class="form-control" id="inputDegree" placeholder="Degree">
            </div>

            <div class="form-group col-md-6">
              <label for="inputSchooling">School</label>
              <input v-model="newSchool" type="text" class="form-control" id="inputSchooling" placeholder="School Name">
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
              <label for="inputDetails">Details</label>
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
      newDegree: '', 
      newSchooling: '', 
      newStartDate: '', 
      newEndDate: '',
      newDetails: ''
    };
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
                    degree: this.newDegree, 
                    schooling: this.newSchooling, 
                    details: this.newDetails, 
                    start_date: this.newStartDate,
                    end_date: this.newEndDate,
                    }
      axios.post('/api/student/' + this.$route.params.id + '/education', params).then(response => {
        this.$router.push('/student/' + this.$route.params.id);
      })
    }
  }
};
</script>
