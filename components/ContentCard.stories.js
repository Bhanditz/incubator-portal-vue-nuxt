import { storiesOf } from '@storybook/vue';

import ContentCard from './ContentCard.vue';

storiesOf('ContentCard', module)
  .add('card', () => ({
    components: { ContentCard },
    template:  '<b-col cols="3"><ContentCard/></b-col>'
}));