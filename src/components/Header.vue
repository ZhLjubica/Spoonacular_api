<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/foodCaptain2.png" alt=""
        /></a>
        <div class="navbar-elements">
          <ul class="navbar-nav">
            <li role="presentation" class="nav-item">
              <router-link
                to="/"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Home</router-link
              >
            </li>
            <li role="presentation" class="nav-item">
              <router-link to="/recipes" class="nav-link" href="#"
                >Recipes</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
nav {
  background-color: #e3e2df;
  height: 150px;
}
nav a img {
  height: 150px;
  height: 150px;
}
nav a {
  color: #9a1570;
  font-size: 20px;
  font-weight: bold;
}
nav a:hover {
  color: #fff;
}
.navbar-nav li {
  margin-right: 60px;
}
/* 
li::after {
  content: "";
  position: absolute;
  width: 70%;
  height: 3px;
  bottom: -10px;
  left: 20px;
  background-color: rgb(230, 23, 23);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s;
}

li:hover::after,
li:focus::after {
  transform-origin: bottom left;
    transform: scaleX(1);
} */
</style>