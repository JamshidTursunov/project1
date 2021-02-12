<template>
  <div class="landPage__container">
    <div class="landPage__box">
      <transition name="fade">
        <form>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-1"
              >Course Title:</label
            >
            <b-form-input
              class="landPage__input"
              id="input-live-1"
              v-model="courseDetail.titleEn"
              placeholder="Enter course title in English"
              required
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.titleRu"
              placeholder="Enter course title in Russian"
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.titleUz"
              placeholder="Enter course title in Uzbek"
              trim
            ></b-form-input>
          </div>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-2"
              >Course Description:</label
            >
            <b-form-input
              class="landPage__input"
              id="input-live-2"
              v-model="courseDetail.descriptionEn"
              placeholder="Enter course description in English"
              trim
              required
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.descriptionRu"
              placeholder="Enter course description in Russian"
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.descriptionUz"
              placeholder="Enter course description in Uzbek"
              trim
            ></b-form-input>
          </div>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-3"
              >Course Requirement:</label
            >
            <b-form-input
              class="landPage__input"
              id="input-live-3"
              v-model="courseDetail.requirementEn"
              placeholder="Enter course requirement in English"
              trim
              required
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.requirementRu"
              placeholder="Enter course requirement in Russian"
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.requirementUz"
              placeholder="Enter course requirement in Uzbek"
              trim
            ></b-form-input>
          </div>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-4"
              >Course Content:</label
            >
            <b-form-input
              class="landPage__input"
              id="input-live-4"
              v-model="courseDetail.contentEn"
              placeholder="Enter course content in English"
              trim
              required
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.contentRu"
              placeholder="Enter course content in Russian"
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.contentUz"
              placeholder="Enter course content in Uzbek"
              trim
            ></b-form-input>
          </div>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-6"
              >Instructor Name:</label
            >
            <b-form-input
              id="input-live-6"
              class="landPage__input"
              v-model="courseDetail.instructorNameEn"
              required
              placeholder="Enter instructor name in English letters"
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.instructorNameRu"
              placeholder="Enter instructor name in Russian letters"
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.instructorNameUz"
              placeholder="Enter instructor name in Uzbek letters"
              trim
            ></b-form-input>
          </div>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-5"
              >Course Promo video and poster:</label
            >
            <b-form-file
              class="landPage__input"
              browse-text="Upload"
              id="input-live-5"
              size="md"
              placeholder="No video choosen"
              required
            ></b-form-file>
            <b-form-file
              class="landPage__input"
              browse-text="Upload"
              size="md"
              placeholder="No image choosen"
              required
            ></b-form-file>
          </div>
          <div class="landPage__group d-flex justify-center" role="group">
            <b-button type="submit" size="lg" variant="primary">Save</b-button>
          </div>
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseDetail: {
        titleEn: '',
        titleRu: '',
        titleUz: '',
        descriptionEn: '',
        descriptionRu: '',
        descriptionUz: '',
        requirementEn: '',
        requirementRu: '',
        requirementUz: '',
        contentEn: '',
        contentRu: '',
        contentUz: '',
        instructorNameEn: '',
        instructorNameRu: '',
        instructorNameUz: '',
        coursePromoVideo: '',
        image: '',
      },
    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
