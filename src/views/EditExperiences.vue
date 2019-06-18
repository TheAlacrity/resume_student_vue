<template>
  <div class='edit-experiences'>
    <h1>{{ student['first_name'] }} {{ student['last_name'] }}</h1>
    <br>

    <div class='container'>
      <form v-on:submit.prevent='submit()'>
        <div v-for="exp in student['experiences']">

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCompanyName">Company Name</label>
              <input v-model="student.experiences.company_name" type="text" class="form-control" id="inputCompanyName" v-bind:placeholder="exp.company_name">
            </div>

            <div class="form-group col-md-6">
              <label for="inputJobTitle">Title</label>
              <input v-model="student.experiences.title" type="text" class="form-control" id="inputJobTitle" v-bind:placeholder="exp.job_title">
            </div>
          
            <div class="form-group col-md-6">
              <label for="inputStartDate">Start Date</label>
              <input v-model='student.experiences.start_date' type="text" class="form-control" id="inputStartDate" v-bind:placeholder="exp.start_date">
            </div>
            <div class="form-group col-md-6">
              <label for="inputEndDate">End Date</label>
              <input v-model='student.experiences.end_date' type="text" class="form-control" id="inputEndDate" v-bind:placeholder="exp.end_date">
            </div>

            <div class="form-group col-md-12">
              <label for="inputDetails">Short Bio</label>
              <textarea v-model='student.experiences.details' class="form-control" id="inputDetails" rows="4"></textarea>
            </div>
          </div>
        <center><button type="submit" class="btn btn-primary">Update</button></center>
          <br>
      </div>
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
      student: {
      "id": 7,
      "first_name": "John",
      "last_name": "Moose",
      "email": "test@dot.com",
      "phone_number": "773-555-5555",
      "short_bio": "too short",
      "linked_in_url": "www.linkedin.com/johnmoose",
      "twitter_handle": "twitter/johnmoose",
      "personal_blog": "it is personal",
      "website_url": "www.johnmoose.com",
      "resume_url": "resume.com",
      "github_url": "github/something",
      "photo": "https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      "skills": [{
                "id": 1,
                "student_id": 7,
                "skill_name": "so skill",
                "student": "John"
                }, {
                "id": 2,
                "student_id": 7,
                "skill_name": "karate",
                "student": "John"
                }, {
                "id": 3,
                "student_id": 7,
                "skill_name": "coding",
                "student": "John"
                }],
      "experiences": [{
                    "id": 1,
                    "student_id": 7,
                    "start_date": "1989-10-10T00:00:00.000Z",
                    "end_date": "2005-10-10T00:00:00.000Z",
                    "job_title": "office boy",
                    "company_name": "Apple",
                    "details": "no details yet",
                    "student": "John"
                    },
                    {
                    "id": 2,
                    "student_id": 7,
                    "start_date": "1099-10-10T00:00:00.000Z",
                    "end_date": "2001-10-10T00:00:00.000Z",
                    "job_title": "owner",
                    "company_name": "Actualize",
                    "details": "no details yet",
                    "student": "John"
                    }, {
                    "id": 3,
                    "student_id": 7,
                    "start_date": "2009-10-10T00:00:00.000Z",
                    "end_date": "2005-10-10T00:00:00.000Z",
                    "job_title": "battery charger",
                    "company_name": "AAA",
                    "details": "no details yet",
                    "student": "John"
                    }],
      "educations": [{
                    "id": 1,
                    "student_id": 7,
                    "start_date": "2001-05-05T00:00:00.000Z",
                    "end_date": "2005-05-05T00:00:00.000Z",
                    "degree": "bachelor",
                    "schooling": "Actualize",
                    "details": "no details",
                    "student": "John"
                    }],
      "capstones": [{
                    "id": 1,
                    "student_id": 7,
                    "name": "Capstone name",
                    "description": "blablalba",
                    "url": "capstone.com",
                    "screenshot": "https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    "student": "John"
                    }]
      }
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
                    
                    }
      axios.patch('/api/student/' + this.$route.params.id + '/experiences/edit/', params).then(response => {
        this.$router.push('/student/' + this.$route.params.id);
      })
    }
  }
};
</script>
