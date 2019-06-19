<template>
  <div class='edit-skills'>
  <div class='container'>
    <h1>Edit Skill</h1>
    <br>
    <form v-on:submit.prevent='submit()'>
      <p>Skill Info</p>
        <div class="form-row">
            <input v-model="skills.skill_name" type="text" class="form-control col-sm-10" id="inputSkillName" v-bind:placeholder="skills.skill_name">
        </div>
        <br>
    <center><button type="submit" class="btn btn-primary">Update</button></center>
    </form>
      </div>
        <br>
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
      skills: [],
      name: ''
    };
  },
  created: function() {
    // if (localStorage.getItem('jwt')) {
      axios.get('/api/skills/' + this.$route.params.id).then(response => {
        this.skills = response.data;
      })
    // }
  },
  methods: {
    submit: function() {
      var params = {
                    skill_name: this.skills.skill_name
                    }
      axios.patch('/api/skills/' + this.$route.params.id, params).then(response => {
        this.$router.push('/students/' + this.skills.student_id);
      })
    }
  }
};
</script>
