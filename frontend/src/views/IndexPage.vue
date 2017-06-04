<template>
  <div>
      <h1>영화 목록</h1>
      <div class="row">
        <div v-for="mission in missions" class="col-sm-2">
          <b-card :img="mission.mission.picture"
                  :title="mission.mission.text"
                  class=""
          >
          {{mission.missionDate}}
            <router-link :to="{ name: 'show', params: { id: mission.mission }}">더보기</router-link>

          </b-card>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get(`/front/missions`)
    .then((response) => {
      console.log(response)
      this.missions = response.data.data.missions
    })
  },
  name: 'hello',
  data () {
    return {
      missions: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.poster {
  width: 185px;
  vertical-align: middle;
}

.movie {
  display: inline-block;
  padding: 10px;
  text-align: center;
}

</style>
