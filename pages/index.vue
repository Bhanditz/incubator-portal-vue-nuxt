<template>
  <section class="container">
    <div>
      <EuropeanaCollectionsLogo />
      <h1 class="title">
        Transforming the world with {{ what }}
      </h1>
      <CardSet :card-data="cardData" />
    </div>
  </section>
</template>

<script>
import EuropeanaCollectionsLogo from '~/components/EuropeanaCollectionsLogo.vue';
import CardSet from '~/components/organisms/CardSet';

const cardData = [{
  id: 1,
  thumbnail: '/img/storybook/card-img-1.jpg',
  linkText: 'The card link text - the card link text - the card link text - the card link text - the card link text',
  texts: ['1786 - 1849', '1850 - 1881'],
  url: '~/cards/1'
},
{
  id: '2',
  thumbnail: '/img/storybook/card-img-2.jpg',
  linkText: 'The card link text - the card link text - the card link text - the card link text - the card link text',
  texts: ['1837 - 1901'],
  url: '/cards/2'
},
{
  id: '3',
  thumbnail: '/img/storybook/card-img-3.jpg',
  linkText: 'The card link text - the card link text - the card link text - the card link text - the card link text',
  texts: ['1870 - 1920'],
  url: '/cards/3'
},
{
  id: '4',
  thumbnail: '/img/storybook/card-img-4.jpg',
  linkText: 'The card link text - the card link text - the card link text - the card link text - the card link text',
  texts: ['1870 - 1920'],
  url: '/cards/4'
}];

export default {
  asyncData (context) {
    return { what: (context.query.what ? context.query.what : 'culture') };
  },
  components: {
    EuropeanaCollectionsLogo,
    CardSet
  },
  computed: {
    cardData() {
      return cardData;
    }
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
