<template>
  <div class="pricing__container">
    <div class="pricing__box">
      <h1>Find your plan</h1>
      <div class="pricing__dropdown">
        <p>Currency</p>
        <b-dropdown split id="dropdown-1" text="UZS" variant="primary" class="">
          <b-dropdown-item active>UZS</b-dropdown-item>
          <b-dropdown-item>USD</b-dropdown-item>
          <b-dropdown-item>EV</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="container">
      <div class="row pricing__row">
        <div v-for="price in prices" :key="price.id" class="col-lg-4">
          <div
            class="pricing__card"
            :class="{ pricing__active__card: price.active }"
          >
            <div class="pricing__tarif">
              <h2>{{ price.tarif }}</h2>
            </div>
            <div class="pricing__content">
              <p>{{ price.content }}</p>
            </div>
            <div class="pricing__price">
              <span> {{ price.sign }} </span>
              <span> {{ price.mainPrice }} </span>
              <span>{{ price.duration }}</span>
              <span> {{ price.subPrice }} </span>
            </div>
            <div class="pricing__button__box">
              <nuxt-link
                to="/"
                class="pricing__button"
                :class="{ pricing__active__button: price.active }"
                >Sign up</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="pricing__details__box">
            <h3>Everything in FREE, plus:</h3>
            <ul class="pricing__details__list">
              <li class="pricing__details__item">
                <i class="fas fa-check check" />Courses (155+)
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check" />Career tracks (14)
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check" /> Skill tracks (50+)
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check" />Skill assessment (unlimited)
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pricing__details__box">
            <h3>Everything in PREMIUM*, plus:</h3>
            <ul class="pricing__details__list">
              <li class="pricing__details__item">
                <i class="fas fa-check check__gold" />Admin roles and
                permissions
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check__gold" />Assignments
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check__gold" /> Admin dashboard
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check__gold" />Live chat for admins
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pricing__details__box">
            <h3>Everything in STANDARD, plus:</h3>
            <ul class="pricing__details__list">
              <li class="pricing__details__item">
                <i class="fas fa-check check" /> Projects (80+)
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check" />Tableau, Power Bi, and
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check" />Oracle content
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check" />Priority support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      prices: [
        {
          id: 1,
          tarif: 'BASIC',
          content: 'All the essentials to grow your data skills',
          sign: '$',
          mainPrice: '12',
          subPrice: '.42',
          duration: '/month',
          bonus: 'Paid annually',
        },
        {
          id: 2,
          tarif: 'PRO',
          content: 'All the essentials to grow your data skills',
          sign: '$',
          mainPrice: '25',
          subPrice: '.00',
          duration: '/month',
          bonus: 'Paid annually',
          active: true,
        },
        {
          id: 3,
          tarif: 'PREMIUM',
          content: 'All the essentials to grow your data skills',
          sign: '$',
          mainPrice: '42',
          subPrice: '.35',
          duration: '/month',
          bonus: 'Paid annually',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
