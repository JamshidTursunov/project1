<template>
  <div class="process__container">
    <div class="container process__wrapper">
      <h1>Application Process</h1>
      <hr class="proces__dotes" />
      <div class="row">
        <div class="col-lg-4">
          <div class="process__box">
            <span>1</span>
            <h3>Fill out application form</h3>
            <p>
              Start the process by filling the mentorship application form and
              applying to an open position under the "Mentors" tab on Udacity
              job portal. You will be contacted directly as per your eligibility
              for further assessment.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="process__box">
            <span class="process__span">2</span>

            <h3>Complete our assessment</h3>
            <p>
              Complete the situational and technical assessment to verify your
              skills to support Udacity students.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="process__box">
            <span>3</span>
            <h3>Start your job as a mentor with us</h3>
            <p>
              It's as simple as 1, 2, 3! You will be onboarded as a Udacity
              mentor to begin helping students through our custom-built
              dashboard.
            </p>
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
.process__container {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  padding: 0 8.2rem 6.75rem;
}

.process__box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem 3rem;
  z-index: 100;
  position: relative;
}

h1 {
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  color: #5d30db;
  margin-bottom: 4.2rem;
}

h3 {
  font-size: 18px;
  color: #333366;
  margin-bottom: 2rem;
}

span {
  font-weight: 600;
  font-size: 38px;
  color: #333366;
  margin-bottom: 3.6rem;
  padding: 2rem 3rem;
  border-radius: 50%;
  box-shadow: 2px 4px 25px rgba(54, 54, 54, 0.12);
  background-color: white;
}

.process__span {
}

.process__wrapper {
  position: relative;
}

.proces__dotes {
  border-style: none none dotted;
  border-color: rgba(51, 51, 102, 0.45);
  border-width: 15px;
  width: 45%;
  position: absolute;
  top: 33%;
  left: 27.5%;
  z-index: 5;
}

.process__row {
}

p {
  text-align: center;
  color: #333366;
  font-size: 14px;
}
</style>
