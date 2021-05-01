import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default</h4>
        <StaticImage
          placeholder="tracedSVG"
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          layout="constrained"
          className="example-img"
          as="section"
          height={300}
        />
      </article>

      <article>
        <h4>fixed</h4>
        <StaticImage
          placeholder="blurred"
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          layout="fixed"
          className="example-img"
          as="div"
          width={200}
        />
      </article>

      <article>
        <h4>full width</h4>
        <StaticImage
          placeholder="dominantColor"
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;

  article {
    border: 2px solid red;
  }

  .example-img {
    border-radius: 1rem;
    height: 300px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
      height: 300px;
    }
  }
`;

export default Images;
