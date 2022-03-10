<template>
  <div id="universe">
    <!-- right side image  -->
    <div class="container">
      <!-- heading text  -->
      <div class="header text-white">A Universe Ready to Pop Off 🚀</div>
      <!-- description  -->
      <div class="description">
        <p class="text-white" style="margin-bottom: 30px">
          <b>To yondo is to get things poppin 🎉</b>
          and this universe is taking off, quite literally. We jump off will
          these lil’ Yondos as they’re headed on a rocket to the moon, and then
          we give you the keys to take these homies wherever you want.
        </p>
        <p class="text-white">
          We mean it. If the community wants to come up with some ludicrous
          storyline and vote it into canon, it’s happening. Grab an NFT and go
          wild 🤙
        </p>
      </div>
      <!-- button  -->
      <div class="action text-lg-start text-center">
        <form-button
          label="Jam With The Crew"
          color="pink"
          @click="handleJamClick"
        />
      </div>
    </div>
    <!-- bottom images  -->
    <div class="bottom-img-wrap d-lg-none">
      <img
        class="w-100"
        src="@assets/imgs/illustrations/pop/bottom.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { FormButton } from '@components/Form';
export default {
  name: 'SectionUniverse',
  components: {
    FormButton
  },
  methods: {
    handleJamClick() {
      window.open('https://discord.com/invite/arDjz5thy6', '_blank');
    }
  }
};
</script>
