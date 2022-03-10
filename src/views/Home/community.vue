<template>
  <div id="community">
    <!-- container  -->
    <div class="container">
      <!-- text section  -->
      <div class="text-area">
        <h1 class="title text-start text-lg-center">
          Community With Purpose
          <span class="d-none d-lg-inline-block"> 🙏</span>
        </h1>
        <div class="para">
          <h4 class="subtitle text-start text-lg-center">
            <span class="icon">🌎</span> Helping (The Real) Planet Together
          </h4>
          <p class="detail">
            <span>
              The Yondos ❤️ the Earth! 5% of royalties will go to charities
              aligned with the
            </span>
            <a href="" class="d-block d-inline">United Nation’s 17 Goals.</a>
          </p>
        </div>
        <div class="para">
          <h4 class="subtitle text-start">
            <span class="icon">🌳</span> Carbon Offset for Gas
          </h4>
          <p class="detail">
            We will offset the 🏭 carbon for the energy consumed to mint these
            contracts.
          </p>
        </div>
        <div class="para">
          <h4 class="subtitle text-start">
            <span class="icon">📄</span> Ownership Rights
          </h4>
          <p class="detail">
            When you buy an NFT from us you get a license to do what you want
            with your Yondo (like using them in any metaverse project).
          </p>
        </div>
        <div class="para">
          <h4 class="subtitle text-start">
            <span class="icon">📈</span> L2 Future Development
          </h4>
          <p class="detail">
            Layer Two is the future of crypto—cheaper, scalable,
            eco-friendly(er), near-instant transactions—all reasons why we’ll
            use Arbitrum moving forward.
          </p>
        </div>
        <div class="action text-center">
          <form-button
            label="Join Our Community"
            color="dark-blue"
            @click="handleJoinClick"
          />
        </div>
      </div>
    </div>
    <!-- images section ------------------------------------  -->
    <!-- left side small image  -->
    <div class="right-top d-lg-none">
      <img
        src="@assets/imgs/illustrations/community/fuzzy_guy1.png"
        alt="fuzzy guy one"
      />
    </div>
    <!-- right side center image  -->
    <div class="right-side-bottom d-lg-none">
      <img
        src="@assets/imgs/illustrations/community/fuzzy_guy2.png"
        alt="fuzzy guy center"
      />
    </div>
    <!-- right side bottom image  -->
    <div class="right-side-center d-lg-none">
      <img
        src="@assets/imgs/illustrations/community/fuzzy_guy3.png"
        alt="fuzzy bottom "
      />
    </div>
    <!-- right side large image  -->
    <div class="lg-img-background d-none d-lg-block">
      <img
        src="@assets/imgs/illustrations/community/bg_desktop.png"
        alt="community background image"
      />
    </div>
  </div>
</template>

<script>
import { FormButton } from '@components/Form';

export default {
  name: 'SectionCommunity',
  components: {
    FormButton
  },
  methods: {
    handleJoinClick() {
      window.open('https://discord.com/invite/arDjz5thy6', '_blank');
    }
  }
};
</script>
