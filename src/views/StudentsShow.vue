<template>
  <div class="container">
    <div class="students-show">
      <h1>{{ student.first_name }}'s Resume Info<router-link class="btn btn-primary" v-bind:to="'/students/' + student.id + '/edit'">Edit</router-link></h1>

      <div>
        <h5>Name: {{ student.first_name }} {{ student.last_name }}</h5>
        <h5>Email: {{ student.email }}</h5>
        <h5>Phone Number: {{ student.phone_number }}</h5>
        <h5>Bio: {{ student.short_bio }}</h5>
        <h5>Twitter: {{ student.twitter_handle }}</h5>
        
        <div>
          <a v-bind:href="student.linked_in_url">LinkedIn</a>
        </div>

        <div>
          <a v-bind:href="student.personal_blog">{{ student.first_name }}'s Blog</a>
        </div>

        <div>
          <a v-bind:href="student.website_url">Link to Personal Website</a>
        </div>

        <div>
          <a v-bind:href="student.resume_url">Link to Online Resume</a>        
        </div>

        <div>
          <a v-bind:href="student.github_url">Link to Github</a>          
        </div>

        <div>
          <img v-bind:src="student.photo" alt=""></img>
        </div>


        <h5>Skills: </h5>
        <div class="accordion" id="accordionSkills">        
          <div v-for="skill in student.skills">
            <div class="card">
              <div class="card-header" v-bind:id="'headingSkill' + skill.id">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" v-bind:data-target="'#collapseSkill' + skill.id" aria-expanded="true" v-bind:aria-controls="'collapseSkill' + skill.id">
                    {{ skill.skill_name }}
                  </button>
                </h2>
              </div>

              <div v-bind:id="'collapseSkill' + skill.id" class="collapse" v-bind:aria-labelledby="'headingSkill' + skill.id" data-parent="#accordionSkills">
                <router-link class="btn btn-primary" v-bind:to="'/skills/' + skill.id + '/edit'">Edit</router-link>
                <span class="btn btn-danger" v-on:click="destroySkill(skill)">Delete</span>
              </div>
            </div>
          </div>                 
        </div>
        

        <h5>Experience: </h5>        
        <div class="accordion" id="accordionExperiences">
          <div v-for="experience in student.experiences">
            <div class="card">
              <div class="card-header" v-bind:id="'headingExperience' + experience.id">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" v-bind:data-target="'#collapseExperience' + experience.id" aria-expanded="true" v-bind:aria-controls="'collapseExperience' + experience.id">
                    Job title: {{ experience.job_title }}
                  </button>
                </h2>
              </div>
            </div>

            <div v-bind:id="'collapseExperience' + experience.id" class="collapse" v-bind:aria-labelledby="'headingExperience' + experience.id" data-parent="#accordionExperiences">
              <div class="card-body">                 
                <p>Job title: {{ experience.job_title }}</p>
                <p>Company name: {{ experience.company_name }}</p>
                <p>Date: {{ experience.start_date }} to {{ experience.end_date }}</p>
                <p>Details: {{ experience.details }}</p>
                <router-link class="btn btn-primary" v-bind:to="'/experiences/' + experience.id + '/edit'">Edit</router-link>
                <span class="btn btn-danger" v-on:click="destroyExperience(experience)">Delete</span>
              </div>
            </div>
          </div>
        </div>


        <h5>Education: </h5>
        <div class="accordion" id="accordionEducations">
          <div v-for="education in student.educations">
            <div class="card">
              <div class="card-header" v-bind:id="'headingEducation' + education.id">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" v-bind:data-target="'#collapseEducation' + education.id" aria-expanded="true" v-bind:aria-controls="'collapseEducation' + education.id">
                  <p>Institution name: {{ education.schooling }}</p>
                  </button>
                </h2>
              </div>
            </div>

            <div v-bind:id="'collapseEducation' + education.id" class="collapse" v-bind:aria-labelledby="'headingEducation' + education.id" data-parent="#accordionEducations">
              <div class="card-body">
                <p>Degree earned: {{ education.degree }}</p>
                <p>Date: {{ education.start_date }} to {{ education.end_date }}</p>
                <p>Details: {{ education.details }}</p>
               <router-link class="btn btn-primary" v-bind:to="'/educations/' + education.id + '/edit'">Edit</router-link>
               <span class="btn btn-danger" v-on:click="destroyEducation(education)">Delete</span>
              </div>
            </div>
          </div>
        </div>


        <h5>Capstones: </h5>
        <div class="accordion" id="accordionCapstones">
          <div v-for="capstone in student.capstones">
            <div class="card">
              <div class="card-header" v-bind:id="'headingCapstone' + capstone.id">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" v-bind:data-target="'#collapseCapstone' + capstone.id" aria-expanded="true" v-bind:aria-controls="'collapseCapstone' + capstone.id">
                  <p>Name: {{ capstone.name }}</p>
                  </button>
                </h2>
              </div>
            </div>
             
            <div v-bind:id="'collapseCapstone' + capstone.id" class="collapse" v-bind:aria-labelledby="'headingCapstone' + capstone.id" data-parent="#accordionCapstones">
              <div class="card-body">
                <p>Description: {{ capstone.description }}</p>
                <a v-bind:href="capstone.url">Link to Capstone</a>
                <img v-bind:src="capstone.screenshot" alt=""></img>
                <router-link class="btn btn-primary" v-bind:to="'/capstones/' + capstone.id + '/edit'">Edit</router-link>
                <span class="btn btn-danger" v-on:click="destroyCapstone(capstone)">Delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
    focusedItem: {},

    student: []

    }
  },
  created: function() {
      axios.get("/api/students/" + this.$route.params.id ).then(response => {
        this.student = response.data;
      });
  },
  methods: {
    focusOnItem: function(inputItem) {
      if (inputItem === this.focusedItem) {
        this.focusedItem = {};
      } else {
        this.focusedItem = inputItem;
      }
    },

    destroySkill: function(skill) {
      axios.delete("/api/skills/" + skills.id).then(response => {
          var index = this.student.skills.indexOf(skill);
          this.students.skills.splice(index, 1);
        });
    },

    destroyExperience: function(experience) {
      axios.delete("/api/experiences/" + experiences.id).then(response => {
          var index = this.student.experiences.indexOf(experience);
          this.students.experiences.splice(index, 1);
        });
    },

    destroyEducation: function(education) {
      axios.delete("/api/educations/" + education.id).then(response => {
          var index = this.student.educations.indexOf(education);
          this.students.educations.splice(index, 1);
        });
    },

    destroyCapstone: function(capstone) {
      axios.delete("/api/capstones/" + capstones.id).then(response => {
          var index = this.student.capstones.indexOf(capstone);
          this.students.capstones.splice(index, 1);
        });
    }
  },

  beforeRouteUpdate: function(to, from, next) {
    axios.get("/api/students/" + to.params.id ).then(response => {
      this.student = response.data;
    });

    next();
  }
};
</script>