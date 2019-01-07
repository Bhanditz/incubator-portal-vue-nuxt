<template>
  <section class="container">
    <div>
      <EuropeanaCollectionsLogo />
      <h1 class="title">
        Transforming the world with {{ what }}
      </h1>
    </div>
    <v-btn>This is a button</v-btn>

    <v-card>
      <v-img
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      />
      <v-card-title>
        <h4 class="text-uppercase">Collection</h4>
      </v-card-title>
      <v-card-title>
        <h3>This is the title</h3>
      </v-card-title>
    </v-card>

  </section>
</template>

<script>
import EuropeanaCollectionsLogo from '~/components/EuropeanaCollectionsLogo.vue';

export default {
  asyncData (context) {
    return { what: (context.query.what ? context.query.what : 'culture') };
  },
  components: {
    EuropeanaCollectionsLogo
  }
};
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
