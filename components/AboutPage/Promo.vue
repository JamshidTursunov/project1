<template>
  <div class="promo__container">
    <div class="container column__margin">
      <div class="row">
        <div class="col-md-6 column__margin">
          <div class="promo__box">
            <img
              class="promo__img"
              src="~/assets/images/about/shape.png"
              alt="shape"
            />
            <div class="promo__content">
              <h1 class="heading__primary mb-2">About GreatSoft Academy</h1>
              <p class="paragraph">
                Maecenas eget ultrices lectus, quis varius libero. Praesent a
                justo risus. Maecenas sit amet nisi non risus bibendum
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 column__margin">
          <div class="promo__box promo__box__promo">
            <div class="promo__video__box"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.column__margin {
  margin: 0;
  padding: 0;
}
.heading__primary {
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.paragraph {
  font-size: 0.9rem;
  font-family: 'Open Sans', sans-serif;
  color: white;
}

.promo {
}
.promo__container {
}

.promo__box {
  background-color: #5d30db;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13rem 9rem;
}
.promo__box__promo {
  padding: 0;
  background-color: transparent;
  position: relative;
}

.promo__img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}

.promo__content {
  position: relative;
  z-index: 10;
}

.promo__video__box {
  border-radius: 160px 8px 8px 8px;
  background: url('~assets/images/about/video.png');
  height: 27.5rem;
  width: 38rem;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  position: absolute;
  left: -5rem;
  top: 2rem;
}
</style>
