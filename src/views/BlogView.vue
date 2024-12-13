<template>
  <main class="main blog-page">
    <div class="container">
      <h1 class="blog-page__title">This is an blog page</h1>

      <section class="blog-page__section">
        <h2 class="blog-page__subtitle">Section title</h2>
        <p class="blog-page__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          delectus voluptas? Nisi quasi ex placeat excepturi repellendus
          aperiam, deleniti tenetur eum amet quisquam vero dicta veniam delectus
          ea optio quia. Voluptatum iste atque, animi dignissimos earum ullam
          quasi! Maxime quaerat voluptatem quia odio impedit, consectetur
          maiores fuga veniam delectus, ad autem eaque, rerum dolore itaque
          libero? Iusto pariatur ratione expedita? Expedita numquam quisquam
          eveniet id, eaque natus? Debitis obcaecati voluptatibus dolorum totam
          architecto maxime assumenda consequuntur commodi aliquid pariatur
          ipsum delectus necessitatibus vitae, veniam quos officiis! Rerum sit
          officia ut. Illum eius voluptates cupiditate repudiandae minima ut
          nam! Similique libero sed optio voluptatibus quos iste magni
          reprehenderit accusantium, odit iure facere quaerat facilis quasi,
          sequi a dolorum voluptatum enim quas. Temporibus adipisci enim dolorem
          veritatis neque. Delectus quo laboriosam architecto quibusdam beatae,
          commodi vero, incidunt placeat iste atque illum quia corrupti
          voluptatibus necessitatibus, error quae temporibus possimus pariatur?
          Amet, magnam!
        </p>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.blog-page {
  &__title {
    grid-column: 1 / -1;
    text-align: center;
  }

  &__section {
    grid-column: 1 / -1;
  }
}
</style>
