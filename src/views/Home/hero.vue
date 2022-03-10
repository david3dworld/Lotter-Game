<template>
  <div id="hero">
    <div
      class="container d-lg-flex justify-content-lg-between align-items-center"
    >
      <!-- left section  -->
      <div class="text-area w-lg-55">
        <!-- highlight texts  -->
        <p class="text-white highlight-texts">it's time to #GetYondo</p>
        <!-- discription  -->
        <p class="description big-para text-white text-center mx-auto mb-lg-0">
          Join the YASA Council of Explorers and the beginning of an immersive
          metaverse with a narrative determined by you.
        </p>
        <!-- batch -->
        <h6 class="batch-sm para-bold-icon text-center text-white mb-lg-0">
          😱 10,000 Yondos at 0.08 ETH minting soon! 😱
        </h6>
        <!-- button group  -->
        <div
          class="btn-group flex-lg-column flex-xxl-row align-items-lg-center"
        >
          <form-button
            label="Get Yondo In Discord"
            color="blue"
            @click="handleGetYondoClick"
          />
          <form-button label="Mint Your Yondo" color="blue" :active="false" />
        </div>
      </div>
      <!-- right section  -->
      <div class="img-area w-lg-45">
        <img
          src="@assets/imgs/illustrations/hero/animation.gif"
          alt="main hightlight image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { FormButton } from '@components/Form';
export default {
  name: 'SectionHero',
  components: {
    FormButton
  },
  methods: {
    handleGetYondoClick() {
      window.open('https://discord.com/invite/arDjz5thy6', '_blank');
    }
  }
};
</script>
