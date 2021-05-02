import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const FetchData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        info: siteMetadata {
          author
          description
          title
          simpleData
          person {
            age
            name
          }
          complexData {
            age
            name
          }
        }
      }
    }
  `);
  return (
    <div>
      <h2>{data.site.info.person.name}</h2>
      <div>
        {data.site.info.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name}: {item.age}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FetchData;
