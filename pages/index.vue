<template>
  <div class="landing-page">
    <v-row class="flex section-1 ma-0">
      <v-col cols="12" md="6" class="p-80 display-flex">
        <v-card
          class="
            pa-10
            card-background
            align-self-center
            display-transation
            from-bottom
          "
        >
          <v-card-title class="font-weight-bold text-dp-lg">
            The Key to A<br />Decentralized World
          </v-card-title>
          <v-card-text>
            <p class="text-xl">
              The fastest and easiest way to build your own DAO without coding.
              It’s time to give the power back to the community.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="majorelleBlue" nuxt to="/inspire">
              Connect Wallet
            </v-btn>
            <v-btn color="gray11" nuxt to="/inspire"> Watch Tutorial </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div class="partner-block py-16">
      <div class="font-weight-bold text-dp-lg text-center">Our partner</div>
      <div class="-ml-88 relative inline-flex justify-center pt-16">
        <div class="partner-item px-10 py-8 right-to-left-1">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 right-to-left-1">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 right-to-left-1">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 right-to-left-1">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 right-to-left-1">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 right-to-left-1">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 right-to-left-1">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 right-to-left-1">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 right-to-left-1">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
      </div>
      <div class="relative inline-flex mt-5 justify-center pt-130">
        <div class="partner-item px-10 py-8 left-to-right-2">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 left-to-right-2">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 left-to-right-2">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 left-to-right-2">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 left-to-right-2">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 left-to-right-2">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 left-to-right-2">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 left-to-right-2">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
        <div class="partner-item px-10 py-8 left-to-right-2">
          <img loading="lazy" class="full-width" src="@/assets/logo-svc.png" />
        </div>
      </div>
    </div>
    <div id="section-3" class="section-3">
      <div class="max-width-1440 ma-auto">
        <div class="pa-10">
          <div class="font-weight-bold text-dp-lg text-center">
            Manage Digital Assets Made Easy
          </div>
          <v-row class="my-16">
            <v-col cols="4" class="section-3-slide">
              <div class="process-bar">
                <div class="complete-bar"></div>
              </div>
              <div class="font-weight-bold text-dp-sm text-center mt-2">
                Build
              </div>
              <div class="text-md mb-12">
                Set up a full-function DAO with ease without any coding
                experience. We will get you ready in an instant.
              </div>
              <div class="mt-6">
                <img
                  class="full-width border-radius-12"
                  src="@/assets/step-1.png"
                />
              </div>
            </v-col>
            <v-col cols="4" class="section-3-slide">
              <div class="process-bar">
                <div class="complete-bar"></div>
              </div>
              <div class="font-weight-bold text-dp-sm text-center mt-2">
                Customize
              </div>
              <div class="text-md mb-12">
                Tailor your DAO to the fullest with a wide range of options.
                It’s time to decentralize with style.
              </div>
              <div class="mt-6">
                <img
                  class="full-width border-radius-12"
                  src="@/assets/step-1.png"
                />
              </div>
            </v-col>
            <v-col cols="4" class="section-3-slide">
              <div class="process-bar">
                <div class="complete-bar"></div>
              </div>
              <div class="font-weight-bold text-dp-sm text-center mt-2">
                Grow
              </div>
              <div class="text-md">
                Our built-in system will help you manage and analyze your DAO to
                have better understanding of your community. Govern together,
                grow together.
              </div>
              <div class="mt-6">
                <img
                  class="full-width border-radius-12"
                  src="@/assets/step-1.png"
                />
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="py-190 ma-auto">
          <div class="font-weight-bold text-dp-lg text-center pt-16">
            We help you save
          </div>
          <v-row class="mt-16">
            <v-col cols="4" class="px-8">
              <div
                class="
                  save-box
                  py-6
                  px-12
                  text-center
                  display-transation
                  from-bottom
                "
              >
                <div class="font-weight-bold text-dp-xxl">100+</div>
                <div class="font-weight-bold gray5--text text-dp-xs">hours</div>
                <div class="gray5--text">of manual tasks</div>
              </div>
            </v-col>
            <v-col cols="4" class="px-8">
              <div
                class="
                  save-box
                  py-6
                  px-12
                  text-center
                  display-transation
                  from-bottom
                "
              >
                <div class="font-weight-bold text-dp-xxl">>75k</div>
                <div class="font-weight-bold gray5--text text-dp-xs">
                  US dollar
                </div>
                <div class="gray5--text">in development costs</div>
              </div>
            </v-col>
            <v-col cols="4" class="px-8">
              <div
                class="
                  save-box
                  py-6
                  px-12
                  text-center
                  display-transation
                  from-bottom
                "
              >
                <div class="font-weight-bold text-dp-xxl">2-3</div>
                <div class="font-weight-bold gray5--text text-dp-xs">
                  months
                </div>
                <div class="gray5--text">working with stakeholders</div>
              </div>
            </v-col>
          </v-row>
          <div class="text-lg ma-auto text-center max-width-412 mt-12">
            Even better, be free from all the trails and errors by working
            directly with our experts
          </div>
          <div class="mt-2 text-center">
            <v-btn color="majorelleBlue" nuxt to="/inspire">
              <div class="flex text-capitalize">
                <span>Explore service</span>
                <v-icon>mdi-arrow-right</v-icon>
              </div>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="section-4 pt-16">
      <div class="max-width-1440 ma-auto p-80">
        <div class="font-weight-bold text-dp-lg text-center">
          Featured blogposts
        </div>
        <div class="d-flex flex-row mt-12">
          <div class="pa-2">
            <div class="blogpost-item pa-4 display-transation from-bottom">
              <img
                loading="lazy"
                class="full-width"
                src="@/assets/blogpost-img.png"
              />
              <div
                class="
                  text-center
                  py-1
                  pigmentBlue
                  text-overline-1
                  width-80
                  border-radius-12
                "
              >
                Announcement
              </div>
              <div>
                What is DAO?<br />
                DAOs are the future of organization and work
              </div>
            </div>
          </div>
          <div class="pa-2">
            <div class="blogpost-item pa-4 display-transation from-bottom">
              <img
                loading="lazy"
                class="full-width"
                src="@/assets/blogpost-img.png"
              />
              <div
                class="
                  text-center
                  py-1
                  pigmentBlue
                  text-overline-1
                  width-80
                  border-radius-12
                "
              >
                Announcement
              </div>
              <div>
                What is DAO?<br />
                DAOs are the future of organization and work
              </div>
            </div>
          </div>
          <div class="pa-2">
            <div class="blogpost-item pa-4 display-transation from-bottom">
              <img
                loading="lazy"
                class="full-width"
                src="@/assets/blogpost-img.png"
              />
              <div
                class="
                  text-center
                  py-1
                  pigmentBlue
                  text-overline-1
                  width-80
                  border-radius-12
                "
              >
                Announcement
              </div>
              <div>
                What is DAO?<br />
                DAOs are the future of organization and work
              </div>
            </div>
          </div>
          <div class="pa-2">
            <div class="blogpost-item pa-4 display-transation from-bottom">
              <img
                loading="lazy"
                class="full-width"
                src="@/assets/blogpost-img.png"
              />
              <div
                class="
                  text-center
                  py-1
                  pigmentBlue
                  text-overline-1
                  width-80
                  border-radius-12
                "
              >
                Announcement
              </div>
              <div>
                What is DAO?<br />
                DAOs are the future of organization and work
              </div>
            </div>
          </div>
          <div class="pa-2">
            <div class="blogpost-item pa-4 display-transation from-bottom">
              <img
                loading="lazy"
                class="full-width"
                src="@/assets/blogpost-img.png"
              />
              <div
                class="
                  text-center
                  py-1
                  pigmentBlue
                  text-overline-1
                  width-80
                  border-radius-12
                "
              >
                Announcement
              </div>
              <div>
                What is DAO?<br />
                DAOs are the future of organization and work
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 text-center">
          <v-btn
            color="majorelleBlue"
            nuxt
            to="/inspire"
            class="text-capitalize"
          >
            Read the blog
          </v-btn>
        </div>
      </div>
      <div class="max-width-1440 ma-auto p-80">
        <div class="font-weight-bold text-dp-lg text-center">
          Frequently asked questions
        </div>
        <div class="mt-12">
          <div
            class="display-transation from-bottom close"
          >
            <div class="font-weight-regular text-dp-xs">
              <v-icon v-if="isOpenQ1" color="paradisePink" class="mr-1" @click="clickQuestion1(false)"
                >mdi-minus-circle-outline</v-icon
              >
              <v-icon v-else color="blueJeans" class="mr-1" @click="clickQuestion1(true)"
                >mdi-plus-circle-outline</v-icon
              >
              What is logoipsum and how does it work?
            </div>
            <div
              v-if="isOpenQ1"
              class="gray5--text font-weight-regular text-lg mt-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
              mattis nam eu et. Sed arcu molestie ut morbi. In nunc egestas
              ipsum accumsan lacus est dictum at. Euismod eget augue porttitor
              id in nunc volutpat. Quis ac in quis curabitur amet.
            </div>
          </div>
          <div class="mt-6 display-transation from-bottom">
            <div class="font-weight-regular text-dp-xs">
              <v-icon v-if="isOpenQ2" color="paradisePink" class="mr-1" @click="clickQuestion2(false)"
                >mdi-minus-circle-outline</v-icon
              >
              <v-icon v-else color="blueJeans" class="mr-1" @click="clickQuestion2(true)"
                >mdi-plus-circle-outline</v-icon
              >
              What do I need to start using logoipsum?
            </div>
            <div
              v-if="isOpenQ2"
              class="gray5--text font-weight-regular text-lg mt-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
              mattis nam eu et. Sed arcu molestie ut morbi. In nunc egestas
              ipsum accumsan lacus est dictum at. Euismod eget augue porttitor
              id in nunc volutpat. Quis ac in quis curabitur amet.
            </div>
          </div>
          <div class="mt-6 display-transation from-bottom">
            <div class="font-weight-regular text-dp-xs">
              <v-icon v-if="isOpenQ3" color="paradisePink" class="mr-1" @click="clickQuestion3(false)"
                >mdi-minus-circle-outline</v-icon
              >
              <v-icon v-else color="blueJeans" class="mr-1" @click="clickQuestion3(true)"
                >mdi-plus-circle-outline</v-icon
              >
              Do I need coding knowledge to use logoipsum?
            </div>
            <div
              v-if="isOpenQ3"
              class="gray5--text font-weight-regular text-lg mt-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
              mattis nam eu et. Sed arcu molestie ut morbi. In nunc egestas
              ipsum accumsan lacus est dictum at. Euismod eget augue porttitor
              id in nunc volutpat. Quis ac in quis curabitur amet.
            </div>
          </div>
          <div class="mt-6 display-transation from-bottom">
            <div class="font-weight-regular text-dp-xs">
              <v-icon v-if="isOpenQ4" color="paradisePink" class="mr-1" @click="clickQuestion4(false)"
                >mdi-minus-circle-outline</v-icon
              >
              <v-icon v-else color="blueJeans" class="mr-1" @click="clickQuestion4(true)"
                >mdi-plus-circle-outline</v-icon
              >
              How much does logoipsum cost?
            </div>
            <div
              v-if="isOpenQ4"
              class="gray5--text font-weight-regular text-lg mt-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
              mattis nam eu et. Sed arcu molestie ut morbi. In nunc egestas
              ipsum accumsan lacus est dictum at. Euismod eget augue porttitor
              id in nunc volutpat. Quis ac in quis curabitur amet.
            </div>
          </div>
          <div class="mt-6 display-transation from-bottom">
            <div class="font-weight-regular text-dp-xs">
              <v-icon v-if="isOpenQ5" color="paradisePink" class="mr-1" @click="clickQuestion5(false)"
                >mdi-minus-circle-outline</v-icon
              >
              <v-icon v-else color="blueJeans" class="mr-1" @click="clickQuestion5(true)"
                >mdi-plus-circle-outline</v-icon
              >
              Does logoipsum provide custom feature development?
            </div>
            <div v-if="isOpenQ5" class="gray5--text font-weight-regular text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
              mattis nam eu et. Sed arcu molestie ut morbi. In nunc egestas
              ipsum accumsan lacus est dictum at. Euismod eget augue porttitor
              id in nunc volutpat. Quis ac in quis curabitur amet.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div
        class="
          d-flex
          flex-col
          max-width-1440
          justify-space-between
          text-center
          ma-auto
        "
      >
        <div>
          <img loading="lazy" src="@/assets/logo.png" />
          <div class="text-xl gray0--text mt-2">Govern x Together</div>
        </div>
        <div class="d-flex flex-col">
          <div class="pr-12 text-left">
            <div>FEATURES</div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Build DAO</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Sell NFT</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Buy Store</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
          </div>
          <div class="pr-12 text-left">
            <div>FEATURES</div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Customization</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Concierge</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
          </div>
          <div class="pr-12 text-left">
            <div>PRODUCT</div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >About Us</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Whitepaper</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Token</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Template</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
          </div>
          <div class="text-left">
            <div>RESOURCE</div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Help Center</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Video Tutorials</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Blog</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <a to="#" v-bind="attrs" v-on="on" class="gray5--text"
                    >Contact Support</a
                  >
                </template>
                <span>Coming soon</span>
              </v-tooltip>
            </div>
          </div>
        </div>
      </div>
      <div class="straight-line my-8 ma-auto"></div>
      <div
        class="
          d-flex
          flex-col
          max-width-1440
          justify-space-between
          text-center
          ma-auto
          gray5--text
          text-sm
        "
      >
        <div>All rights reserved © 2022</div>
        <div class="d-flex flex-col">
          <div class="mr-3">Privacy Policy</div>
          <div>Terms and Conditions</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      isOpenQ1: true,
      isOpenQ2: false,
      isOpenQ3: false,
      isOpenQ4: false,
      isOpenQ5: false,
    }
  },
  methods: {
    clickQuestion1(isOpen) {
      this.isOpenQ1 = isOpen;
    },
    clickQuestion2(isOpen) {
      this.isOpenQ2 = isOpen;
    },
    clickQuestion3(isOpen) {
      this.isOpenQ3 = isOpen;
    },
    clickQuestion4(isOpen) {
      this.isOpenQ4 = isOpen;
    },
    clickQuestion5(isOpen) {
      this.isOpenQ5 = isOpen;
    }
  }
}
</script>
<style>
/* animation */
.display-transation {
  transition: transform 0.6s ease;
}
.from-bottom {
  opacity: 0;
  transform: translateY(50%);
}
.from-bottom.show {
  opacity: 1;
  transform: translateX(0);
}
.display-transation.show {
  opacity: 1;
  transform: translateX(0);
}
/* animation end */
body {
  font-family: 'DM Sans', sans-serif !important;
  overflow-x: hidden;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}
body::-webkit-scrollbar {
  display: none;
}
.landing-page {
  background-color: #05060b;
  width: 100vw;
}
.section-1 {
  background: url('@/assets/landing_background.png');
  background-size: cover;
  min-height: calc(100vh - 64px) !important;
}
.card-background {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(12px) !important;
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px !important;
  min-height: 440px;
}
.partner-block {
  overflow: hidden;
  height: 500px;
  background: url('@/assets/backround-color-1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top -200px right -360px;
}
.partner-item {
  position: absolute;
  min-width: 192px;
  margin-right: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid #4f4f54;
  animation: right-to-left 9s linear infinite;
  /* transform: translateX(100vw); */
}
.partner-item.left-to-right-2 {
  left: -230px;
}
.partner-item.right-to-left-1 {
  right: -230px;
}
.left-to-right-2 {
  animation: left-to-right-2 27s linear infinite;
}
.right-to-left-1 {
  animation: right-to-left-1 27s linear infinite;
}
@keyframes right-to-left-1 {
  0% {
    right: -192px;
  }
  100% {
    right: 1920px;
  }
}
@keyframes left-to-right-2 {
  0% {
    left: -192px;
  }
  100% {
    left: 1920px;
  }
}
.partner-item:nth-child(1) {
  animation-delay: 3s;
}
.partner-item:nth-child(2) {
  animation-delay: 6s;
}
.partner-item:nth-child(3) {
  animation-delay: 9s;
}
.partner-item:nth-child(4) {
  animation-delay: 12s;
}
.partner-item:nth-child(5) {
  animation-delay: 15s;
}
.partner-item:nth-child(6) {
  animation-delay: 18s;
}
.partner-item:nth-child(7) {
  animation-delay: 21s;
}
.partner-item:nth-child(8) {
  animation-delay: 24s;
}
.partner-item:nth-child(9) {
  animation-delay: 27s;
}
.partner-item:nth-child(10) {
  animation-delay: 3s;
}
.partner-item:nth-child(11) {
  animation-delay: 6s;
}
.partner-item:nth-child(12) {
  animation-delay: 9s;
}
.partner-item:nth-child(13) {
  animation-delay: 12s;
}
.partner-item:nth-child(14) {
  animation-delay: 15s;
}
.partner-item:nth-child(15) {
  animation-delay: 18s;
}
.partner-item:nth-child(16) {
  animation-delay: 21s;
}
.partner-item:nth-child(17) {
  animation-delay: 24s;
}
.partner-item:nth-child(18) {
  animation-delay: 27s;
}
.section-3 {
  background: url('@/assets/backgroud-color-2.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top 450px left -660px;
}
.process-bar {
  width: 100%;
  height: 5px;
  background: linear-gradient(
    109.92deg,
    rgba(255, 255, 255, 0.102) 0%,
    rgba(255, 255, 255, 0.1) 52.78%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(12px);
  border-radius: 16px;
}
.complete-bar {
  height: 5px;
  border-radius: 16px;
  background: #6a49e2;
  transition: transform;
  animation: processing-reverse 0.2s forwards;
}
.active .complete-bar {
  animation-name: processing;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
.section-3-slide.active {
  /* Grey/05 */
  color: #fff !important;
}
.section-3-slide.active {
  /* Grey/05 */
  color: #b5b5ba !important;
}
.section-3-slide img {
  animation: tran-opacity-reverse 1s forwards;
}
.section-3-slide.active img {
  animation: tran-opacity 0.4s forwards;
}
@keyframes tran-opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes tran-opacity-reverse {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes processing {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes processing-reverse {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
.save-box {
  background: linear-gradient(
    109.92deg,
    rgba(255, 255, 255, 0.102) 0%,
    rgba(255, 255, 255, 0.1) 52.78%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px;
}
.blogpost-item {
  background: linear-gradient(
    109.92deg,
    rgba(255, 255, 255, 0.102) 0%,
    rgba(255, 255, 255, 0.1) 52.78%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 16px;
}
.footer {
  background: linear-gradient(
    109.92deg,
    rgba(255, 255, 255, 0.102) 0%,
    rgba(255, 255, 255, 0.1) 52.78%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(12px);
  padding: 48px 80px;
}
.section-4 {
  background: url('@/assets/background-color-3.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top 250px right -280px;
}
.straight-line {
  max-width: 1440px;
  width: 100%;
  height: 1px;
  /* Grey/10 */
  background: #4f4f54;
}
.display-flex {
  display: flex !important;
}
/* system */
.full-width {
  width: 100% !important;
}
.screen-width {
  width: 100vw;
}
.full-height {
  height: 100% !important;
}
.max-width-412 {
  max-width: 412px;
}
.max-width-1440 {
  max-width: 1440px;
}
.width-80 {
  width: 80px;
}
.cursor-pointer {
  cursor: pointer;
}
.border-radius-24 {
  border-radius: 24px !important;
}
.border-radius-16 {
  border-radius: 16px !important;
}
.border-radius-12 {
  border-radius: 12px !important;
}
.border-radius-8 {
  border-radius: 8px !important;
}
.border-radius-4 {
  border-radius: 4px !important;
}
.text-overline-1 {
  font-size: 10px !important;
  line-height: 12px !important;
}
.text-caption {
  font-size: 12px !important;
  line-height: 14px !important;
}
.text-xs {
  font-size: 12px !important;
  line-height: 18px !important;
}
.text-sm {
  font-size: 14px !important;
  line-height: 20px !important;
}
.text-md {
  font-size: 16px !important;
  line-height: 24px !important;
}
.text-lg {
  font-size: 18px !important;
  line-height: 28px !important;
}
.text-xl {
  font-size: 20px !important;
  line-height: 32px !important;
}
.text-dp-xs {
  font-size: 24px !important;
  line-height: 36px !important;
}
.text-dp-sm {
  font-size: 30px !important;
  line-height: 38px !important;
}
.text-dp-md {
  font-size: 36px !important;
  line-height: 44px !important;
  letter-spacing: -2% !important;
}
.text-dp-lg {
  font-size: 48px !important;
  line-height: 60px !important;
  letter-spacing: -2% !important;
}
.text-dp-xl {
  font-size: 60px !important;
  line-height: 72px !important;
  letter-spacing: -2% !important;
}
.text-dp-xxl {
  font-size: 72px !important;
  line-height: 90px !important;
  letter-spacing: -2% !important;
}
.p-80 {
  padding: 80px;
}
.pt-130 {
  padding-top: 130px;
}
.py-190 {
  padding-left: 190px;
  padding-right: 190px;
}
</style>
