<template>
  <main class="main about-page">
    <div class="container">
      <h1 class="about-page__title">This is an about page</h1>

      <section class="about-page__section">
        <h2 class="about-page__subtitle">Section title</h2>
        <p class="about-page__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum
          quam inventore veritatis, quae provident ea odio nisi quisquam
          facilis, tempore eaque vero cumque repudiandae alias deserunt
          consequuntur sint accusamus? Natus sapiente adipisci, sint ratione
          quod temporibus ipsa, ex harum doloribus culpa assumenda, delectus
          reiciendis impedit repellat! Impedit voluptatem doloremque neque
          inventore labore! Dolor in officia sint vel placeat nisi. Facere, odit
          dolorem reprehenderit, voluptates consequuntur quaerat ipsum
          recusandae magnam aliquid quos at beatae fuga sit libero ullam id ad
          cum unde laboriosam blanditiis quis atque. Rerum aliquid reprehenderit
          deleniti. Eius ut minima rem adipisci! Cum minima omnis nobis vitae
          obcaecati accusamus pariatur quisquam, sapiente aliquid, quod laborum
          dicta odio fugit cumque voluptatum aperiam, at ratione officia atque
          aut maxime. Enim, molestiae! Eius qui culpa cum! Expedita,
          perspiciatis odio praesentium vel quisquam id delectus vero
          necessitatibus ex consequatur culpa, quas est labore illum laborum ad
          voluptatem veniam fugit explicabo ipsum.
        </p>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
.about-page {
  &__title {
    grid-column: 1 / -1;
    text-align: center;
  }

  &__section {
    grid-column: 1 / -1;
  }
}
</style>
