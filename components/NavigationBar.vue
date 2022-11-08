<template>
  <v-app-bar
    class=""
    height="56px"
    style="z-index: 99,max-width:100%"
    app
    flat
    color="gray12"
  >
    <div
      class="nav-container ml-13 text-s font-weight-regular"
      style="min-width: 95%"
    >
      <v-row class="d-flex align-center justify-space-between">
        <v-col col="8" class="d-inline-flex">
          <div class="font-weight-bold text-xl align-self-center pt-2">
            <Logo/>
          </div>
          <!-- Main menu -->
          <div
            @click="openLink('/')"
            class="
              white--text
              text-decoration-none
              cursor-pointer
              pl-6
              pr-2
              align-self-center
            "
          >
            <div class="text-none">Home</div>
          </div>
          <router-link
            to="/service"
            class="
              white--text
              text-decoration-none
              cursor-pointer
              px-2
              align-self-center
            "
            active-class="active"
          >
            <div class="text-none">Service</div>
          </router-link>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <div
                v-bind="attrs"
                v-on="on"
                class="
                  white--text
                  text-decoration-none
                  cursor-pointer
                  px-2
                  align-self-center
                "
                active-class="active"
              >
                <div class="text-none">Help</div>
              </div>
            </template>
            <span>Coming Soon</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'NavigationBar',
  data() {
    return {
    chainId: ""
    }
  },
  components: {
    Logo
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style scoped>
.nav-container {
  max-width: 1562px;
}
.connect-wallet {
  border: 1px solid var(--v-primary-base);
  box-sizing: border-box;
  /* background: #27292c; */
}
.active {
  color: var(--v-primary-base) !important;
}
</style>
