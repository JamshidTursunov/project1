<template>
  <div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor facilis
      quod perferendis natus, et minima amet fugiat rem aspernatur ducimus
      cupiditate repellendus neque commodi ipsam, culpa recusandae autem
      laudantium optio?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Similique labore totam delectus ea culpa, magni error itaque quia, neque
      consequuntur facilis odit voluptatem atque ratione eveniet. Unde nihil
      doloribus recusandae.
      <button @click="$bvModal.show('modal-quiz')">click</button>
      <quiz-modal />
    </p>
  </div>
</template>

<script>
export default {
  name: 'testiviy',
}
</script>

<style lang="scss" scoped></style>
