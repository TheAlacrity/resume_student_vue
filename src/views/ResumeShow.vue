<template>
  <div class="container">
    <div class="resume_show">
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
        <div>
          <ul>
            <li v-for="skill in student.skills">
              <span v-on:click="focusOnItem(skill)">{{ skill.skill_name }}</span>
              <div v-if="skill === focusedItem">
                <router-link class="btn btn-primary" v-bind:to="'/skills/' + skill.id + '/edit'">Edit</router-link>
                <span class="btn btn-danger" v-on:click="destroySkill(skill)">Delete</span>
              </div>
            </li>          
          </ul>
        </div>
        
        <h5>Experience: </h5>
        <div v-for="experience in student.experiences">
          <span v-on:click="focusOnItem(experience)">
            <p>Job title: {{ experience.job_title }}</p>
            <p>Company name: {{ experience.company_name }}</p>
            <p>Date: {{ experience.start_date }} to {{ experience.end_date }}</p>
            <p>Details: {{ experience.details }}</p>
          </span>
          <div v-if="experience === focusedItem">
            <router-link class="btn btn-primary" v-bind:to="'/experiences/' + experience.id + '/edit'">Edit</router-link>
            <span class="btn btn-danger" v-on:click="destroyExperience(experience)">Delete</span>
          </div>
        </div>

        <h5>Education: </h5>
        <div v-for="education in student.educations">
          <span v-on:click="focusOnItem(education)">
            <p>Institution name: {{ education.schooling }}</p>
            <p>Degree earned: {{ education.degree }}</p>
            <p>Date: {{ education.start_date }} to {{ education.end_date }}</p>
            <p>Details: {{ education.details }}</p>
          </span>
          <div v-if="education === focusedItem">
            <router-link class="btn btn-primary" v-bind:to="'/educations/' + education.id + '/edit'">Edit</router-link>
            <span class="btn btn-danger" v-on:click="destroyEducation(education)">Delete</span>
          </div>
        </div>

        <h5>Capstones: </h5>
        <div v-for="capstone in student.capstones">
          <span v-on:click="focusOnItem(capstone)">  
            <p>Name: {{ capstone.name }}</p>
            <p>Description: {{ capstone.description }}</p>
            <a v-bind:href="capstone.url">Link to Capstone</a>
            <img v-bind:src="capstone.screenshot" alt=""></img>
          </span>
          <div v-if="capstone === focusedItem">
            <router-link class="btn btn-primary" v-bind:to="'/capstones/' + capstone.id + '/edit'">Edit</router-link>
            <span class="btn btn-danger" v-on:click="destroyCapstone(capstone)">Delete</span>
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
    student: {
            id: 1,
            first_name: "Alexandria",
            last_name: "Erb",
            email: "lieseerb@gmail.com",
            password_digest: "filler",
            phone_number: "630-740-6932",
            short_bio: "words here",
            linked_in_url: "https://www.linkedin.com/in/alexandria-erb/",
            twitter_handle: "https://github.com/ErbalEssences",
            personal_blog: "https://github.com/ErbalEssences",
            website_url: "https://github.com/ErbalEssences",
            resume_url: "https://github.com/ErbalEssences",
            github_url: "https://github.com/ErbalEssences",
            photo: "https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            skills: [
                        {
                          id: 1,
                          student_id: 1,
                          skill_name: "something"
                        },
                        {
                          id: 2,
                          student_id: 1,
                          skill_name: "something 2",
                        },
                        {
                          id: 3,
                          student_id: 1,
                          skill_name: "something 3"
                        },
                      ],
            experiences: [
                            {
                              id: 1,
                              student_id: 1,
                              start_date: "1993-05-07",
                              end_date: "2345-06-17",
                              job_title: "Empress of the World",
                              company_name: "Earth",
                              details: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
                            }
                          ],
            educations: [
                          {
                            id: 1,
                            student_id: 1,
                            start_date: "2019-04-21",
                            end_date: "2019-07-12",
                            degree: "certificate",
                            schooling: "Actualize",
                            details:"blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
                          }
                        ],
            capstones:[
                        {
                          id: 1,
                          student_id: 1,
                          name: "SewWhat",
                          description: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
                          url: "https://github.com/ErbalEssences",
                          screenshot: "https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        }
                      ]
          }
    }
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
      axios
        .delete("/api/skills/" + skills.id)
        .then(response => {
          var index = this.student.skills.indexOf(skill);
          this.students.skills.splice(index, 1);
        });
    },

    destroyExperience: function(experience) {
      axios
        .delete("/api/experiences/" + experiences.id)
        .then(response => {
          var index = this.student.experiences.indexOf(experience);
          this.students.experiences.splice(index, 1);
        });
    },

    destroyEducation: function(education) {
      axios
        .delete("/api/educations/" + education.id)
        .then(response => {
          var index = this.student.educations.indexOf(education);
          this.students.educations.splice(index, 1);
        });
    },

    destroyCapstone: function(capstone) {
      axios
        .delete("/api/capstones/" + capstones.id)
        .then(response => {
          var index = this.student.capstones.indexOf(capstone);
          this.students.capstones.splice(index, 1);
        });
    }
  }
};
  // created: function() {
  </script>