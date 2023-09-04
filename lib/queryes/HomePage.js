import { gql } from "@apollo/client";

const homeQuery = `
{
    page(id: "/home/", idType: URI) {
      id
      uri
      homeacf {
        bannerBtnText {
          btnText
          btnUrl
          fieldGroupName
        }
        bannerDescription
        bannerHeading
        bannerImage {
          altText
          sourceUrl
        }
        goodCompanyHeading
        goodCompanyImages {
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_HOME = gql`
  ${homeQuery}
`;
