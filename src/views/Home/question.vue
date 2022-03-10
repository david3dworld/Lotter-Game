<template>
  <div id="question">
    <div class="container text-center">
      <!-- left side text container  -->
      <div class="left-text-container">
        <h1 class="title text-white">Questions?</h1>
        <div class="para">
          <h3 class="subtitle">When are the Etherians releasing?</h3>
          <p class="detail">Mid/ Late September</p>
        </div>
        <div class="para">
          <h3 class="subtitle">What will the price be?</h3>
          <div class="detail">0.08 ETH, flat pricing line.</div>
        </div>
        <div class="para">
          <h3 class="subtitle">How will the minting happen?</h3>
          <p class="detail">
            Minting will happen through a custom contract, delivered via this
            site at time of release <br />through Metamask. Each NFT will be an
            ERC-721 token.
          </p>
        </div>
        <div class="para">
          <h3 class="subtitle">
            Will you be utilizing secondary sale royalties?
          </h3>
          <p class="detail">
            Yes, we will be using 5% of secondary sale royalties from the
            collection for things like supporting the United <br />
            Nation’s 17 Goals, sweeping the floor, and funding the future growth
            of this universe for you.
          </p>
        </div>
        <div class="para">
          <h3 class="subtitle">Anything else we missed?</h3>
          <p class="detail">
            Please email <span>hello@yondomondo.com</span> with any other
            questions.
          </p>
        </div>
        <div class="action">
          <form-button label="Ask Us On Discord" color="dark-blue" />
        </div>
      </div>
    </div>
    <!-- right side image section  -->
    <div class="right-image-section d-lg-none">
      <img src="@assets/imgs/illustrations/questions/humoyoto.png" alt="" />
    </div>
  </div>
</template>

<script>
import { FormButton } from '@components/Form';

export default {
  name: 'SectionQuestion',
  components: {
    FormButton
  }
};
</script>
