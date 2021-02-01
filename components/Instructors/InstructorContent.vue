<template>
  <div class="instructors__content">
    <h2>{{ $t('instructors.ResponsibilitiesList') }}</h2>
    <ul>
      <li
        v-for="(li, index) in $t('instructors.ResponsibilitiesItems')"
        :key="index"
      >
        <i18n :path="li"> </i18n>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
