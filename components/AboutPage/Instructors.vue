<template>
  <div class="instructors">
    <div class="container column__margin">
      <h1>Number of</h1>
      <div class="row justify-content-center">
        <div class="col-lg-4 column__margin">
          <div class="instructors__box">
            <h1>30+</h1>
            <p>Mentors</p>
          </div>
        </div>
        <div class="col-lg-4 column__margin">
          <div class="instructors__box">
            <h1>520</h1>
            <p>Instructors</p>
          </div>
        </div>
        <div class="col-lg-4 column__margin">
          <div class="instructors__box">
            <h1>630+</h1>
            <p>Successfully graduated students</p>
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
  padding: 0;
  margin: 0;
}
.instructors {
  padding: 4rem 9rem;
}
.instructors h1 {
  font-size: 4.5rem;
  color: #5d30db;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  margin-bottom: 1rem;
}

.instructors__box {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;
}
.instructors__box h1 {
  font-size: 4.5rem;
  color: #ff9900;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
}

.instructors__box p {
  font-size: 2rem;
  color: #333366;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
}
</style>
