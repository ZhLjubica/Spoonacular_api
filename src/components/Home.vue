<template>
  <div class="firstPage">
    <Header />
    <div class="cover">
      <p>
        Taste<br/>Our Delicious<br/><span>Captain </span><br/>Food!
      </p>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.firstPage {
  height: 100vh;
}
.cover {
  width: 100%;
  height: calc(100vh - 150px);
  background-image: url(../assets/food1.jpg);
  /* background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../assets/food3.jpg); */
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  color: rgb(227, 175, 188);
  opacity: 65%;
}

.cover p {
  position: absolute;
  right: 300px;
  bottom: 10px;
  font-size: 100px;
  text-align: center;
}
.cover p span {
  color: #5d001e;
  background-color: #e3afbc;
}
</style>