<template>
  <section class="instructor__application">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      class="instructor__application__circle1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id="circle"
        cx="20"
        cy="20"
        r="16.5"
        stroke="#FF9900"
        stroke-width="7"
      />
    </svg>
    <InstructorApplication />
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="instructor__application__circle2"
    >
      <circle cx="28" cy="28" r="24.5" stroke="#FF9900" stroke-width="7" />
    </svg>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.instructor__application {
  padding: 3.2rem 25.6rem 6rem;
  background-image: linear-gradient(
      to right bottom,
      rgba(243, 248, 255, 0.2),
      rgba(243, 248, 255, 0.2)
    ),
    url('~assets/images/form/background-image.png');
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;

  @media only screen and (max-width: 82em) {
    padding: 3.2rem 20rem 6rem;
  }
  @media only screen and (max-width: 75em) {
    padding: 3.2rem 15rem 6rem;
  }
  @media only screen and (max-width: 62em) {
    padding: 3.2rem 10rem 5rem;
  }
  @media only screen and (max-width: 50em) {
    padding: 3.2rem 4rem 4rem;
  }
  @media only screen and (max-width: 37.5em) {
    padding: 3.2rem 1rem 3rem;
  }
  &__circle1 {
    position: absolute;
    top: 15rem;
    left: 3rem;
  }

  &__circle2 {
    position: absolute;
    top: 1rem;
    right: 10rem;
  }
}
</style>
