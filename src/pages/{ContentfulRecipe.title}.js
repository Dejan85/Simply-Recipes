import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";

const RecipeTemplate = props => {
  const {
    data: {
      contentfulRecipe: {
        title,
        cookTime,
        content: { ingredients, instructions, tags, tools },
        description: { description },
        prepTime,
        image,
      },
    },
  } = props;
  const pathToImage = getImage(image);

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero"></section>
          <section className="recipe-content"></section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTemplate;
