<template>
  <div>
    <h1>상세 내용</h1>
    <div id="app">
    <!-- Simple -->
    <b-card class="mb-2" variant="success">Simple Card</b-card>

    <!-- Standard -->
    <b-card header="Card header text"
            class="mb-2"
            title="Card title"
            sub-title="Card subtitle"
            show-footer
    >
        <small slot="footer" class="text-muted">
            Last updated 3 mins ago
        </small>
    </b-card>

    <!-- With image -->
    <b-card img="http://placeskull.com/200/200/ABABAB/-1/0"
            title="Skulls are nice"
            class="mb-2"
    >
        This is my opinion :)
        {{this.$route.params.id}}
    </b-card>

    <!-- Overlay image -->
    <b-card overlay
            img="http://placeskull.com/200/200/E8117F/-1/0"
            class="mb-2"
    >
        Overlay cards are cute!
    </b-card>
</div>
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/front/missions/${id}`)
    .then((response) => {
      console.log(response)
      this.mission = response.data
    })
  },
  data: function () {
    return {
      mission: {}
    }
  }
}
</script>

<style lang="css">

</style>
