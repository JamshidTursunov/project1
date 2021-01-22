<template>
  <div class="container-fluid all-wrapper section-1-wrapper">
    <div class="row">
      <div class="col-md-12 col-lg-6 flex flex-column">
        <h1 class="text-h1 space-around my-14">
          Boost your skills and <br />Build your future
        </h1>
        <div class="flex justify-start">
          <div class="content">
            <h4 class="content-title">GreatSoft Academy-</h4>
            <p class="content-context">
              bu sening orzularing sari eng to‘g‘ri tanlov
            </p>
          </div>
          <img
            src="~assets/images/new.png"
            alt="man"
            class="align-self-center man-image"
          />
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <form-1 />
      </div>
    </div>
    <div class="row flex justify-center mt-8">
      <div
        class="col-lg mb-4 col-md-4 col-sm-6 col-6 flex items-center justify-center"
      >
        <img src="~assets/images/python3.png" alt="...." class="w-20 h-20" />
        <h1>PYTHON</h1>
      </div>
      <div
        class="col-lg mb-4 col-md-4 col-sm-6 col-6 flex items-center justify-center"
      >
        <img src="~assets/images/python4.png" alt="...." class="w-20 h-20" />
        <h1>Django</h1>
      </div>
      <div
        class="col-lg mb-4 col-md-4 col-sm-6 col-6 d-none d-md-flex flex items-center justify-center"
      >
        <img src="~assets/images/python3.png" alt="...." class="w-20 h-20" />
        <h1>PYTHON</h1>
      </div>
      <div
        class="col-lg mb-4 col-md-4 col-sm-6 col-6 d-none d-xl-flex items-center justify-center"
      >
        <img src="~assets/images/python4.png" alt="...." class="w-20 h-20" />
        <h1>Django</h1>
      </div>
      <div
        class="col-lg mb-4 col-md-4 col-sm-6 col-6 d-none d-xl-flex items-center justify-center"
      >
        <img src="~assets/images/python3.png" alt="...." class="w-20 h-20" />
        <h1>PYTHON</h1>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.section-1-wrapper {
  &.all-wrapper {
    position: relative;
  }
}

@media only screen and (max-width: 79em) {
  .section-1-wrapper {
    .man-image {
      transform: translate(-23%, 10%) scale(0.85);
    }
  }
}

@media only screen and (max-width: 61.9em) {
  .section-1-wrapper {
    .text-h1 {
      font-size: 55px;
    }
    .content-title {
      font-size: 40px;
    }
  }
}

@media only screen and (max-width: 56em) {
  .section-1-wrapper {
    &.all-wrapper {
      padding: 0 100px;
    }
  }
}

@media only screen and (min-width: 37.5em) and (max-width: 45.6em) {
  .section-1-wrapper {
    .man-image {
      transform: translate(-40%, 18%) scale(0.8);
    }
    .text-h1 {
      font-size: 45px;
    }
    .content-title {
      font-size: 35px;
    }
  }
}

@media only screen and (max-width: 37.5em) {
  .section-1-wrapper {
    &.all-wrapper {
      padding: 0 30px;
    }
    .text-h1 {
      font-size: 45px;
    }
    .content-title {
      font-size: 35px;
    }
    .man-image {
      transform: translate(-40%, 18%) scale(0.8);
    }
  }
}

@media only screen and (min-width: 32.9em) and (max-width: 37.5em) {
  .section-1-wrapper {
    .content {
      padding: 2rem 15rem 2rem 2rem;
      margin-bottom: 30%;
    }
  }
}

@media only screen and (max-width: 32.9em) {
  .section-1-wrapper {
    .man-image {
      transform: translate(-30%, 0%) scale(0.7);
    }
    .content {
      padding: 2rem;
      margin-bottom: 40%;
    }
    .content::after {
      width: 240px;
      height: 200px;
    }
    .content::before {
      width: 240px;
      height: 200px;
    }
  }
}
@media only screen and (max-width: 25em) {
  .section-1-wrapper {
    .man-image {
      display: none;
    }
  }
}

@media only screen and (max-width: 22.5em) {
  .section-1-wrapper {
    .content::after {
      width: 250px;
    }
    .content::before {
      width: 250px;
    }
  }
}
</style>
