<template>
  <div class="footer">
    <div class="footerContent">
      <div class="openingHours">
        <h2>OPENING HOURS</h2>
        <p>Mondey...... 9.00 - 22.00</p>
        <p>Tuesday...... 9.00 - 22.00</p>
        <p>Wednsday...... 9.00 - 22.00</p>
        <p>Thursday...... 9.00 - 22.00</p>
        <p>Friday...... 9.00 - 22.00</p>
        <p>Saterday...... 10.00 - 23.00</p>
        <p>Sunday...... 10.00 - 23.00</p>
      </div>
      <div class="locations">
        <h2>LOCATION</h2>
        <div>
          <p>Location 1: Nikole Radojcica 78</p>
        </div>
        <div>
          <p>Location 2: Kumodraska 330</p>
        </div>
      </div>
      <div class="contact">
        <h2>CONTACT</h2>
        <div>
          <p>022/233463</p>
        </div>
        <div>
          <p>ON SOCIAL MEDIA:</p>
          <div class="icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2021 Captain food</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  height: 80vh;
  background-color: #e3afbc;
  color: var(--middle-color);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 16px;
}
.footerContent {
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 150px auto;
  grid-template-areas:
    " i i i i p p p p f f f f "
    " i i i i p p p p f f f f "
    " m m m m m m m m m m m m ";
}
.openingHours {
  text-align: center;
  grid-area: i;
}
.openingHours h2,
.locations h2,
.contact h2 {
  font-weight: bold;
}
.locations {
  text-align: center;
  grid-area: p;
}
.contact {
  text-align: center;
  grid-area: f;
}
.copyright {
  grid-area: m;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}
.copyright p {
  text-align: center;
}
.icons {
   margin: 4px auto;
}
.icons i {
    margin-right: 15px;
    font-size: 25px;
    color: var(--dark-color);
}
.icons i:hover {
    color: var(--light-color);
    cursor: pointer;
}
@media (max-width: 668px) {
    .footer {
        height: 100vh;
    }
  .footerContent {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 320px auto;
    grid-template-areas:
      "i i i i i i i i i i i i"
      "p p p p p p p p p p p p"
      "f f f f f f f f f f f f"
      "m m m m m m m m m m m m";
  }
  .openingHours {
    margin-bottom: 30px;
  }
}
</style>