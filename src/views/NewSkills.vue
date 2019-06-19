<template>
  <div class='new-skill'>
  <div class='container'>
    <h1>Add A New Skill!</h1>
    <br>
    <form v-on:submit.prevent='submit()'>
        <div class="form-row">
            <label for="inputSkill" class="col-sm-2 col-form-label">New Skill</label>
            <input v-model="newSkill" type="text" class="form-control col-sm-10" id="inputSkillName" placeholder="Skill Name">
        </div>
        <br>
        <br>
    <center><button type="submit" class="btn btn-primary">Add</button></center>
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
      newSkill: ''
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
                    skill: this.newSkill
                    }
      axios.post('/api/student/' + this.$route.params.id + '/skills/', params).then(response => {
        this.$router.push('/student/' + this.$route.params.id);
      })
    }
  }
};
</script>
