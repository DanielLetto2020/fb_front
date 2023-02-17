<template>
  <div class="container">
    <div class="border p-4 d-flex">
      <b-form-input v-model="filters.name" placeholder="name"/>
      <b-form-input v-model="filters.code" placeholder="code"/>
      <b-form-input v-model="filters.color" placeholder="color"/>
      <b-form-input v-model="filters.priceStart" placeholder="priceStart"/>
      <b-form-input v-model="filters.priceEnd" placeholder="priceEnd"/>
      <b-form-input v-model="filters.size" placeholder="size"/>
      <b-form-input v-model="filters.description" placeholder="description"/>
    </div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    timer: null,
    items: [],
    filters: {}
  }),
  watch: {
    'filters': {
      handler(val, oldVal) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.fetchSearch()
        }, 600)
      },
      deep: true
    }
  },
  methods: {
    fetchSearch() {
      let filters = this.clearObj(this.filters)

      if (Object.keys(filters).length === 0) {
        console.log('empty')
        this.items = []
        return
      }

      this.$axios.get('/product/search', {
        params: {
          ...filters
        },
      }).then(({data}) => {
        this.items = data.data
      })
    },
    clearObj(obj) {
      const newObj = JSON.parse(JSON.stringify(obj))

      Object.keys(newObj).forEach((key) => {
        if (newObj[key] == null || newObj[key] === '' || newObj[key] === undefined) {
          delete newObj[key]
        }
      });

      return newObj
    }
  }
}
</script>
