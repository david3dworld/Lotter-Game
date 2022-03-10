<template>
  <div id="presale">
    <div class="container">
      <div class="logo">YondoMondo</div>
      <div class="title">it’s time to Mint your yondo 🎉</div>
      <div class="description">
        Connect your MetaMask wallet, select the number of NFTs you want to
        mint, then press the Mint button!
      </div>
      <div class="w-lg-50 action-group">
        <div v-if="!canUse" class="actions">
          <button class="item connect-wallet" @click="handleConnectWallet">
            <span v-if="!loadings.connect">Connect Wallet!</span>
            <div
              v-if="loadings.connect"
              class="spinner-border pink"
              role="status"
            ></div>
          </button>
        </div>
        <div v-if="canUse" class="actions">
          <select v-model="amount"
            class="item"
            aria-label="nft select dropdown"
            :disabled="!canUse"
          >
            <option
              v-for="item in opts"
              :key="item"
              :value="item"
              class="option"
            >
              {{ item }}
            </option>
          </select>
          <label>How many Yondo's?</label>
        </div>
        <div v-if="canUse" class="actions">
          <button class="item" :disabled="!amount" @click="handleMintYondo">
            <span v-if="!loadings.mint">Mint!</span>
            <div
              v-if="loadings.mint"
              class="spinner-border pink"
              role="status"
            ></div>
          </button>

          <label>To the Moon!</label>
        </div>
      </div>
    </div>
    <!-- bg_pink_yondo.png -->
    <img
      src="@assets/imgs/illustrations/presale/bg_pink_yondo.png"
      alt="bg_pink_yondo.png"
    />
  </div>
</template>

<script>
import { ethers } from 'ethers';
import contractArtifact from '../PreSale/YondoMondo.json';

export default {
  name: 'PublicMint',
  data() {
    return {
      canUse: false,
      currentAccount: null,
      amount: 1,
      loadings: {
        connect: false,
        mint: false
      },
      opts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    };
  },
  mounted() {
    try {
      if (!window.ethereum) {
        this.canUse = false;
        throw new Error(
          'Your wallet is not connected. If on mobile, use the Metamask app browser.'
        );
      }
    } catch (error) {
      this.$toast.open({
        message: error.message,
        type: 'info'
      });
    }
  },
  methods: {
    async handleConnectWallet() {
      try {
        this.loadings = { ...this.loadings, connect: true };

        const { result } = await window.ethereum.send('eth_requestAccounts');
        if (result.length === 0) {
          throw new Error('Connection error! Please refresh your browser.');
        } else {
          this.currentAccount = ethers.utils.getAddress(result[0])
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const { chainId } = await provider.getNetwork()

        if (chainId !== 1) {
          throw new Error('Please connect to the Ethereum mainnet network')
        }

        this.canUse = true;
      } catch (error) {
        this.loadings = { ...this.loadings, connect: false };
        this.$toast.open({
          message: error.message,
          type: 'error',
          duration: 12000
        });
      }
    },
    async handleMintYondo() {
      try {
        if (!this.canUse) return;

        this.loadings = { ...this.loadings, mint: true };

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          '0xF5A04957880a92A4f7cE0215B3166EfAF1Fb517b',
          contractArtifact.abi,
          signer
        );

        let mintPrice = await contract.mintPrice();
        mintPrice = ethers.utils.formatEther(mintPrice);

        mintPrice = `${(parseFloat(mintPrice) * Number(this.amount)).toFixed(
          10
        )}`;
        console.log({mintPrice})

        const saleIsActive = await contract.saleIsActive()

        if (! saleIsActive) {
          throw new Error('Sale is not live yet')
        }

        const gasLimit = Math.floor((await contract.estimateGas.mintYondoMondos(Number(this.amount), {from: this.currentAccount, value: ethers.utils.parseEther(mintPrice)})) * 1.25);
        console.log({gasLimit})

        const purchaseOptions = {
          gasLimit: gasLimit,
          value: ethers.utils.parseEther(mintPrice)
        };

        const batchPurchaseResult = await contract.mintYondoMondos(Number(this.amount), purchaseOptions);
        this.$toast.open({
          message:
            'Transaction underway.',
          type: 'success',
          duration: 12000
        });

        await batchPurchaseResult.wait();
        this.$toast.open({
          message:
            'Your transaction has been completed. Please check MetaMask for confirmation.',
          type: 'success',
          duration: 12000
        });

        this.loadings = { ...this.loadings, mint: false };
      } catch (error) {
        this.loadings = { ...this.loadings, mint: false };

        let message = error.message;

        console.log({error})

        if (error.code == "INSUFFICIENT_FUNDS") {
          message = "Sorry, you need more ETH in this wallet to complete the transaction"
        } else if (error.error && error.error.message) {
          message = error.error.message
        }

        this.$toast.open({
          message: message,
          type: 'error',
          duration: 12000
        });
      }
    }
  }
};
</script>
