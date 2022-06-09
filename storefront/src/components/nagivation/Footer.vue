<template>
  <SfFooter class="mt-5">
    <SfFooterColumn
      v-for="(column, key) in footerColumns"
      :key="key"
      :title="column.title"
    >
      <SfList>
        <SfListItem v-for="(menuItem, index) in column.items" :key="index">
          <SfMenuItem :label="menuItem" />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
  </SfFooter>
</template>

<script>
import { SfFooter, SfList } from '@storefront-ui/vue'
export default {
  name: 'FooterNavigation',
  components: { SfFooter, SfList },
  data () {
    return {
      footerColumns: [
        {
          title: 'About us',
          items: ['Who we are', 'Quality in the details', 'Customer Reviews']
        },
        {
          title: 'Departments',
          items: ['Women fashion', 'Men fashion', 'Kidswear', 'Home']
        },
        {
          title: 'Help',
          items: ['Customer service', 'Size guide', 'Contact us']
        },
        {
          title: 'Payment & delivery',
          items: ['Purchase terms', 'Guarantee']
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
