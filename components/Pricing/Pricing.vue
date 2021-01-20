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
          <div class="pricing__card" :class="{ active__card: price.active }">
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
                :class="{ active__button: price.active }"
                >Sign up</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="details__box">
            <h3>Everything in FREE, plus:</h3>
            <ul class="details__list">
              <li class="details__item">
                <i class="fas fa-check check" />Courses (155+)
              </li>
              <li class="details__item">
                <i class="fas fa-check check" />Career tracks (14)
              </li>
              <li class="details__item">
                <i class="fas fa-check check" /> Skill tracks (50+)
              </li>
              <li class="details__item">
                <i class="fas fa-check check" />Skill assessment (unlimited)
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="details__box">
            <h3>Everything in PREMIUM*, plus:</h3>
            <ul class="details__list">
              <li class="details__item">
                <i class="fas fa-check check__gold" />Admin roles and
                permissions
              </li>
              <li class="details__item">
                <i class="fas fa-check check__gold" />Assignments
              </li>
              <li class="details__item">
                <i class="fas fa-check check__gold" /> Admin dashboard
              </li>
              <li class="details__item">
                <i class="fas fa-check check__gold" />Live chat for admins
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="details__box">
            <h3>Everything in STANDARD, plus:</h3>
            <ul class="details__list">
              <li class="details__item">
                <i class="fas fa-check check" /> Projects (80+)
              </li>
              <li class="details__item">
                <i class="fas fa-check check" />Tableau, Power Bi, and
              </li>
              <li class="details__item">
                <i class="fas fa-check check" />Oracle content
              </li>
              <li class="details__item">
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

<style scoped>
.pricing__container {
}

.pricing__row {
  margin-bottom: 10rem;
}

.pricing__box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8rem;
}

.pricing__box h1 {
  font-family: 'Open Sans', sans-serif;
  color: 333366;
  font-size: 3rem;
  font-weight: bold;
}

.pricing__dropdown {
}

.pricing__dropdown p {
  font-family: 'Open Sans', sans-serif;
  color: 333366;
  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 0.4rem;
}

.pricing__card {
  font-family: 'Open Sans', sans-serif;
  margin: 0 1rem 3rem;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.active__card {
  transform: scale(1.2, 1.3);
}

.pricing__tarif {
  background-color: #5d30db;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;

  font-style: normal;
  font-weight: bold;
  font-size: 1.75rem;
  color: white;
}

.pricing__content {
  font-style: normal;
  font-weight: normal;
  font-size: 22.9687px;
  padding: 1.25rem 3.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pricing__price {
  padding: 1.25rem 3.875rem;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: baseline;

  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  color: #202020;
}

.pricing__price span:nth-child(1) {
  position: absolute;
  top: 16%;
  left: 23%;
}
.pricing__price span:nth-child(2) {
  font-size: 69.1743px;
  line-height: 94px;
  color: #333366;
  font-weight: bold;
}
.pricing__price span:nth-child(3) {
}
.pricing__price span:nth-child(4) {
  position: absolute;
  top: 19%;
  left: 52%;
}

.pricing__button__box {
  text-align: center;
}

.pricing__button,
.pricing__button:link,
.pricing__button:visited {
  display: inline-block;
  margin: 2rem 0 5rem;
  color: #5d30db;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #5d30db;
  padding: 0.5rem 3rem;
  border-radius: 6px;
  transition: all 0.2s;
}

.pricing__button:hover {
  transform: translateY(-0.3rem);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
}

.pricing__button:active {
  transform: translateY(-0.1rem);
}

.active__button,
.active__button:link,
.active__button:visited {
  background: #ff9900;

  color: white;
  border: none;
}

.column__margin {
  padding: 0;
  margin: 0;
}

.details__box {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  margin: 0 1rem;
}

.details__box h3 {
  font-size: 18px;
  color: #202020;
  margin-bottom: 0.7rem;
}

.details__list {
  list-style: none;
}

.details__item {
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #333366;
}

.check {
  font-size: 14px;
  color: #333366;
  margin-right: 0.4rem;
}

.check__gold {
  font-size: 14px;
  color: #ff9900;
  margin-right: 0.4rem;
}
</style>
