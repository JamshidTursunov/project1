<template>
  <transition name="fade">
    <div class="preloader">
      <div class="logo">
        <svg
          class="logo__svg"
          width="201"
          height="144"
          viewBox="0 0 201 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="logo">
            <path
              id="Vector"
              d="M145.684 74.0069L189.362 73.3213C190.21 73.3213 191.165 73.0109 191.165 74.1751C191.778 86.6713 188.822 98.6242 180.349 109.594C165.333 128.83 142.637 140.511 112.1 143.396C63.6081 148.001 17.4056 125.842 3.93968 92.0139C-0.337259 81.3838 -1.1447 70.1897 1.57997 59.2996C4.30464 48.4094 10.4882 38.116 19.6511 29.2175C28.814 20.3191 40.71 13.0547 54.4166 7.98781C68.1232 2.92092 83.2719 0.187656 98.688 0C100.022 0 100.383 0.245784 100.365 1.20305C100.365 8.24024 100.365 15.2774 100.365 22.3146C100.365 23.3366 99.9319 23.6082 98.5618 23.6082C83.0851 23.8781 68.2089 27.961 56.4312 35.1713C44.6535 42.3817 36.6915 52.2804 33.882 63.2054C26.6714 89.6725 52.4135 115.777 89.7648 119.891C92.6782 120.216 95.6155 120.419 98.5618 120.499C99.8057 120.499 100.148 120.253 100.148 119.374C100.076 107.679 100.046 95.9895 100.058 84.304C100.058 81.4063 100.166 78.5087 100.058 75.611C100.058 74.4597 100.437 74.1492 102.077 74.1492C115.777 74.1492 129.478 74.0199 143.16 73.9293H145.756L145.684 74.0069Z"
              fill="#333366"
            />
            <path
              id="Vector_2"
              d="M181.665 41.7833C182.77 46.496 181.78 51.3388 178.835 55.6249C175.702 60.4608 170.508 64.4564 164.002 67.034C157.497 69.6117 150.017 70.6376 142.645 69.9636C135.273 69.2896 128.391 66.9505 122.994 63.2845C117.597 59.6186 113.965 54.8159 112.623 49.5708C111.325 44.9907 111.997 40.2357 114.552 35.9362C114.317 37.6567 116.12 38.5235 117.616 39.4548C125.385 44.0697 133.99 47.9078 143.196 50.8644C145.241 51.5327 147.539 51.6876 149.722 51.3042C159.219 49.8143 168.41 47.4535 177.068 44.28C178.827 43.6881 180.393 42.8375 181.665 41.7833Z"
              fill="#FE9901"
            />
            <path
              id="Vector_3"
              d="M101.41 18.5244C118.571 15.7819 135.264 13.1042 151.885 10.4135C152.574 10.2885 153.302 10.3435 153.94 10.5687L199.602 25.5745C199.926 25.678 200.214 25.8203 200.972 26.1307C197.186 26.7517 193.761 27.3338 190.408 27.8642C177.357 29.8951 164.269 31.9002 151.218 33.957C150.394 34.1199 149.518 34.0788 148.73 33.8406C133.239 29.0543 117.844 24.1127 102.546 19.0159L101.41 18.5244Z"
              fill="#333366"
            />
            <path
              id="Vector_4"
              d="M181.665 41.7833C180.395 42.8422 178.829 43.6973 177.068 44.2929C168.41 47.4665 159.219 49.8273 149.722 51.3172C147.539 51.7005 145.241 51.5456 143.196 50.8773C133.99 47.9208 125.385 44.0827 117.616 39.4678C116.12 38.5623 114.317 37.6697 114.552 35.9492C115.688 33.3907 116.556 30.7746 117.147 28.1229C117.49 26.9716 117.904 26.8293 119.365 27.3079C128.901 30.2961 138.491 33.2067 148.027 36.182C148.993 36.5132 150.09 36.591 151.128 36.4019C160.502 34.9272 169.966 33.3878 179.43 31.8355C180.962 31.5897 181.611 31.6285 181.557 32.961C181.485 35.8974 181.629 38.808 181.665 41.7833Z"
              fill="#333366"
            />
          </g>
        </svg>
      </div>
      <div class="circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //   #f3f8ff
  background-color: white;
  z-index: 999;

  .logo {
    width: 10rem;
    height: 10rem;
    margin-top: 10%;
  }

  .logo__svg {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .circles {
    display: flex;
    align-items: flex-end;
    width: 120px;
    justify-content: center;
    height: 100px;
    .circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      animation: bouncer 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite
        alternate;
      &:not(:last-child) {
        margin-right: 0.2rem;
      }

      &:nth-child(1) {
        animation-delay: 0s;
        background-color: #8cc271;
      }

      &:nth-child(2) {
        animation-delay: 0.05s;
        background-color: #69beeb;
      }

      &:nth-child(3) {
        animation-delay: 0.1s;
        background-color: #f5aa39;
      }

      &:nth-child(4) {
        animation-delay: 0.15s;
        background-color: #e9643b;
      }

      &:nth-child(5) {
        animation-delay: 0.2s;
        background-color: #0077ff;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  .logo {
    animation: scaleOut 1s;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaleOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes bouncer {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-80px);
  }
}
</style>
