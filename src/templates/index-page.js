import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Banner from '../components/Banner'
import Contact from '../components/Contact'

export const IndexPageTemplate = ({
         image,
         title,
         subheading,
         mainpitch,
         intro,
         contact
       }) => (
         <div>
           <Banner image={image} title={title} subheading={subheading} />
           <section className="content-section">
             <div className="container text-center">
               <p className="subtitle">{mainpitch.description}</p>
             </div>
           </section>
           <Features gridItems={intro.blurbs} />
           <section className="content-section contacts dark">
             <div className="container">
               <h1>Contact Us</h1>
               <div className="row">
                 {contact &&
                   contact.address.map((address, key) => (
                    <Contact address={address} key={`address${key}`} />
                   ))}
               </div>
             </div>
           </section>
         </div>
       );

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  console.log(frontmatter);

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        contact={frontmatter.contact}
      />
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
         query IndexPageTemplate {
           markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
             frontmatter {
               title
               image {
                 childImageSharp {
                   fluid(maxWidth: 2048, quality: 100) {
                     ...GatsbyImageSharpFluid
                   }
                 }
               }
               heading
               subheading
               mainpitch {
                 title
                 description
               }
               description
               intro {
                 blurbs {
                   image {
                     childImageSharp {
                       fluid(maxWidth: 300, quality: 64) {
                         ...GatsbyImageSharpFluid
                       }
                     }
                   }
                   title
                   text
                 }
                 heading
                 description
               }
               contact {
                 address {
                   title
                   text
                   phone
                   email
                 }
               }
             }
           }
         }
       `;
