<template>
    <v-layout>
    <v-autocomplete
        v-model="country"
        :items="countries"
        item-value="value"
        item-text="name"
        label="Country"
        return-object
        style="float: left"
        filled
        rounded
        background-color="rgba(0, 0, 0, 0.7)"
      />
      <v-autocomplete
        v-model="city"
        label="Cities"
        :items="cities"
        @change="goToCity"
        filled
        rounded
        background-color="rgba(0, 0, 0, 0.7)"
      ></v-autocomplete>
    </v-layout>
</template>
<script>
import cities from '~/assets/cities.json'
import london from '~/assets/london.json'
import config from "@/services/data.config"

export default {
  components: {
  },
   data: function () {
    return {
      countries: null,
      country: "",
      city: ""
    }
  },
  computed: {
    cities() {
      return cities[`${this.country.name}`]
    }
  },
  mounted() {
    this.countries = config.countries
  },
  methods: {
    goToCity() {
      this.$router.push("/map")
    }
  }
}
</script>