<template>
  <main>
    <dark-card class="card">
      <svg
        width="380px"
        height="500px"
        viewBox="0 0 837 1045"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch:type="MSPage"
        >
          <path
            d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
            id="Polygon-1"
            stroke="#007FB2"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          ></path>
          <path
            d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
            id="Polygon-2"
            stroke="#EF4A5B"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          ></path>
          <path
            d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
            id="Polygon-3"
            stroke="#795D9C"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          ></path>
          <path
            d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
            id="Polygon-4"
            stroke="#F2773F"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          ></path>
          <path
            d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
            id="Polygon-5"
            stroke="#36B455"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          ></path>
        </g>
      </svg>
      <div class="message-container">
        <h1>404</h1>
        <p>Page not found</p>
        <div class="buttons-container">
          <my-button @click="$router.push('/')" class="button--dark"
            >Домой</my-button
          >
          <my-button @click="$router.back" class="button--dark"
            >Назад</my-button
          >
        </div>
      </div>
    </dark-card>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  height: 100%;

  min-height: 80vh;

  display: flex;

  @media (max-width: 615px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}

svg {
  width: 100%;
  height: 100%;
  max-width: 380px;
  max-height: 500px;
}

.message-container {
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 2rem;
  }
}
.buttons-container {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

#Polygon-1,
#Polygon-2,
#Polygon-3,
#Polygon-4,
#Polygon-4,
#Polygon-5 {
  animation: float 1s infinite ease-in-out alternate;
  stroke: var(--buton-border-focus-color);
}
#Polygon-2 {
  animation-delay: 0.2s;
  stroke: #ef4a5b;
}
#Polygon-3 {
  animation-delay: 0.4s;
  stroke: #af6eff;
}
#Polygon-4 {
  animation-delay: 0.6s;
  stroke: #f2773f;
}
#Polygon-5 {
  animation-delay: 0.8s;
  stroke: #00d684;
}

@keyframes float {
  100% {
    transform: translateY(20px);
  }
}
</style>