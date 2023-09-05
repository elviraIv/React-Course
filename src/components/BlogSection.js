import { BlogBox } from "./BlogBox";

export const BlogSection = () => {
  return (
    <section class="blog_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>Latest Blog</h2>
        </div>
        <div class="row">
          <BlogBox src = "images/b1.jpg" heading = "Look even slightly believable. If you are"/>
          <BlogBox src = "images/b2.jpg" heading = "Molestias magni natus dolores odio commodi. Quaerat!"/>
          <BlogBox src = "images/b3.jpg" heading = "Lorem ipsum dolor perfe"/>
          
        </div>
      </div>
    </section>
  );
};
