<template>
  <div class="landPage__container">
    <div class="landPage__box">
      <transition name="fade">
        <form>
          <div
            v-for="(course, i) in courseData"
            :key="i"
            class="landPage__group"
            role="group"
          >
            <label class="landPage__label" for="input-live-1">
              {{ course.labelTitle }}
            </label>
            <b-form-input
              @change="show"
              v-for="(input, i) in course.inputs"
              :key="i"
              class="landPage__input"
              id="input-live-1"
              v-model="allInfo[i]"
              :placeholder="input.placeholder"
              required
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
        allInfo: [],
        coursePromoVideo: '',
        image: '',
      },
      courseData: [
        {
          labelTitle: 'Course Title:',
          inputs: [
            {
              placeholder: 'Enter course title in English',
            },
            {
              placeholder: 'Enter course title in Russian',
            },
            {
              placeholder: 'Enter course title in Uzbek',
            },
          ],
        },
        {
          labelTitle: 'Course Description:',
          inputs: [
            {
              placeholder: 'Enter course description in English',
            },
            {
              placeholder: 'Enter course description in Russian',
            },
            {
              placeholder: 'Enter course description in Uzbek',
            },
          ],
        },
        {
          labelTitle: 'Course Requirement:',
          inputs: [
            {
              placeholder: 'Enter course requirement in English',
            },
            {
              placeholder: 'Enter course requirement in Russian',
            },
            {
              placeholder: 'Enter course requirement in Uzbek',
            },
          ],
        },
        {
          labelTitle: 'Course Content:',
          inputs: [
            {
              placeholder: 'Enter course content in English',
            },
            {
              placeholder: 'Enter course content in Russian',
            },
            {
              placeholder: 'Enter course content in Uzbek',
            },
          ],
        },
        {
          labelTitle: 'Instructor Name:',
          inputs: [
            {
              placeholder: 'Enter instructor name in English letters',
            },
            {
              placeholder: 'Enter instructor name in Russian letters',
            },
            {
              placeholder: 'Enter instructor name in Uzbek letters',
            },
          ],
        },
      ],
    }
  },
  computed: {},
  methods: {
    show() {
      console.log('fsdfsd')
      console.log(this.courseDetail.allInfo)
    },
  },
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
