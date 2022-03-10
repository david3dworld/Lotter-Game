<template>
  <section-hero />
  <section-universe />
  <section-get-yondo />
  <section-roadmap />
  <section-community />
  <section-team />
  <section-question />
</template>

<script>
import SectionHero from './hero';
import SectionCommunity from './community';
import SectionGetYondo from './get-yondo';
import SectionQuestion from './question';
import SectionRoadmap from './roadmap';
import SectionTeam from './team';
import SectionUniverse from './universe';

export default {
  name: 'Home',
  components: {
    SectionHero,
    SectionUniverse,
    SectionGetYondo,
    SectionRoadmap,
    SectionCommunity,
    SectionTeam,
    SectionQuestion
  }
};
</script>
