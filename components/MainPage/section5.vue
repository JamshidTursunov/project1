<template>
  <div class="container-fluid section-5">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-h1 my-4">Explore all our courses</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="cart grid hover:shadow-lg">
          <img
            src="~assets/images/vector.png"
            class="justify-self-center w-20 h-20 mb-4"
            alt="..."
          />
          <h2 class="text-h2 mb-2">Frontend web development</h2>
          <p class="text-paragraph">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley o scrambled it to
            make a type specimen book.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="cart grid hover:shadow-lg">
          <img
            src="~assets/images/vector.png"
            class="justify-self-center w-20 h-20 mb-4"
            alt="..."
          />
          <h2 class="text-h2 mb-2">Backend development</h2>
          <p class="text-paragraph">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley o scrambled it to
            make a type specimen book.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="cart grid hover:shadow-lg">
          <img
            src="~assets/images/vector.png"
            class="justify-self-center w-20 h-20 mb-4"
            alt="..."
          />
          <h2 class="text-h2 mb-2">Mobile development</h2>
          <p class="text-paragraph">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley o scrambled it to
            make a type specimen book.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="cart grid hover:shadow-lg">
          <img
            src="~assets/images/vector.png"
            class="justify-self-center w-20 h-20 mb-4"
            alt="..."
          />
          <h2 class="text-h2 mb-2">Data science with python</h2>
          <p class="text-paragraph">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley o scrambled it to
            make a type specimen book.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="cart grid hover:shadow-lg">
          <img
            src="~assets/images/vector.png"
            class="justify-self-center w-20 h-20 mb-4"
            alt="..."
          />
          <h2 class="text-h2 mb-2">Machine learning with python</h2>
          <p class="text-paragraph">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley o scrambled it to
            make a type specimen book.
          </p>
        </div>
      </div>
    </div>
    <div class="row flex justify-end">
      <button class="btn btn-know-more px-4 py-2.5 flex items-center">
        Know More
        <b-icon
          icon="arrow-right"
          animation="cylon"
          font-scale="1"
          class="ml-3"
          variant="white"
        ></b-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section-5',
}
</script>

<style scoped>
.section-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.cart {
  padding: 1.5rem 1.5rem;
}
.text-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 60px;
  color: #333366;
}
.text-h2 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #333366;
}
.text-paragraph {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 21px;
}
.btn-know-more {
  background: #5d30db;
  border-radius: 4px;
  /* text font */
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #f3f8ff;
}
</style>
