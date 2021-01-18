<template>
  <div class="container-fluid app-footer">
    <div class="row">
      <div class="col-md-2">
        <img src="~assets/images/logo2.png" alt="logo image" />
      </div>
      <div class="col-md-2">
        <h1 class="text-h1">About us</h1>
        <ul>
          <li>Information</li>
          <li>Blog Post</li>
          <li>Careers</li>
        </ul>
      </div>
      <div class="col-md-2">
        <h1 class="text-h1">All courses</h1>
        <ul>
          <li>Frontend development</li>
          <li>Backend development</li>
          <li>Mobile development</li>
          <li>Data science with python</li>
          <li>Machine learning with python</li>
        </ul>
      </div>
      <div class="col-md-2">
        <h1 class="text-h1">Plans & pricing</h1>
        <ul>
          <li>Basic</li>
          <li>Pro</li>
          <li>Premium</li>
        </ul>
      </div>
      <div class="col-md-2">
        <h1 class="text-h1">Careers</h1>
        <ul>
          <li>Become a mentor</li>
          <li>Become an instructor</li>
        </ul>
      </div>
      <div class="col-md-2 map-yandex">
        <div class="footer-map">
          <client-only>
            <yandex-map
              :settings="settings"
              :coords="[41.339118, 69.335715]"
              zoom="19.17"
            >
              <ymap-marker
                markerId="1"
                marker-type="placemark"
                :coords="[41.339118, 69.335715]"
                hint-content="GreatSoft Software Development Company"
                :balloon="{ header: 'GreatSoft' }"
                :icon="markerIcon"
                cluster-name="1"
              ></ymap-marker>
            </yandex-map>
          </client-only>
        </div>
      </div>
    </div>
    <hr class="my-4" />
    <div class="row"></div>
    <div class="row flex justify-between">
      <p>2020 GreatSoft Academy | All rights reserved</p>
      <p>Terms of use and pravicy policy</p>
      <p>+99 899 123 45 67</p>
      <div class="flex">
        <p class="mr-1">greatsoftacademy_info@gmail.com</p>

        <button class="btn mr-1">
          <!-- <fa :icon="fas.faCircle" /> -->
        </button>
        <button class="mr-1 btn">
          <img src="~assets/images/facebookk.png" alt="facebook" />
        </button>
        <button class="mr-1 btn">
          <img src="~assets/images/telegram.png" alt="telegram" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.app-footer {
  padding: 50px 137px;
  background: #f3f8ff;
}
.map-yandex {
  position: relative;
}
.footer-map {
  width: 380px;
  height: 380px;
  position: absolute;
  border: 10px solid #ffffff;
  border-radius: 50%;
  overflow: hidden;
  top: -80%;
  left: -50%;
  border-radius: 50%;
}
section.ymap-container {
  width: 100%;
  height: 100%;
}
.text-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #333366;
  margin: 3rem auto 2rem auto;
}
.col-md-2 ul li {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 21px;
  color: rgba(51, 51, 102, 0.6);
}
.btn {
  background: #5d30db;
  border-radius: 2.88px;
  width: 25.2px;
  height: 25.2px;
}
</style>
