<template>
  <div class="app-footer">
    <div
      class="up-row"
      style="display: flex; justify-content: space-between; flex-flow: row wrap"
    >
      <img
        src="~assets/images/logo2.png"
        alt="logo image"
        style="width: 230px; height: 230px"
        class="logo-image"
      />
      <div class="item" style="flex: 1">
        <h1 class="text-h1">About us</h1>
        <ul>
          <li>Information</li>
          <li>Blog Post</li>
          <li>Careers</li>
        </ul>
      </div>
      <div class="item" style="flex: 1">
        <h1 class="text-h1">All courses</h1>
        <ul>
          <li>Frontend development</li>
          <li>Backend development</li>
          <li>Mobile development</li>
          <li>Data science with python</li>
          <li>Machine learning with python</li>
        </ul>
      </div>
      <div class="item" style="flex: 1">
        <h1 class="text-h1">Plans & pricing</h1>
        <ul>
          <li>Basic</li>
          <li>Pro</li>
          <li>Premium</li>
        </ul>
      </div>
      <div class="item" style="flex: 1">
        <h1 class="text-h1">Careers</h1>
        <ul>
          <li>Become a mentor</li>
          <li>Become an instructor</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="bottom-row">
      <p class="my-1">2020 GreatSoft Academy |</p>
      <p class="my-1">All rights reserved</p>
      <p class="my-1">Terms of use and pravicy policy</p>
      <p class="my-1">+99 899 123 45 67</p>

      <p class="mr-1 my-1">greatsoftacademy_info@gmail.com</p>

      <ul class="socials my-2 px-0 flex social-icons">
        <li class="mx-1">
          <a
            href="https://www.instagram.com/greatsoft.uz/"
            target="_blank"
            title="Instagram | GreatSoft"
          >
            <fa :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li class="mx-1">
          <a
            href="https://t.me/greatsoft"
            target="_blank"
            title="Telegram | GreatSoft"
          >
            <fa :icon="['fab', 'telegram-plane']" />
          </a>
        </li>
        <li class="mx-1">
          <a
            class="px-2"
            href="https://www.facebook.com/greatsoft.uz"
            target="_blank"
            title="Facebook | GreatSoft"
          >
            <fa :icon="['fab', 'facebook-f']" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.app-footer {
  padding: 50px 110px;
}

.bottom-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

@media only screen and (max-width: 770px) {
  .item {
    flex: 1;
    margin: 0rem 0.1rem;
  }
}
@media only screen and (max-width: 726px) {
  .app-footer {
    padding: 20px 20px;
  }
  .item {
    flex: 1 100% !important;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .item ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo-image {
    align-self: center;
  }
  .up-row {
    display: flex;
    flex-direction: column;
    justify-content: center !important;
  }
  .bottom-row {
    flex-direction: column !important;
    display: flex;
    align-items: center;
  }
}
</style>
