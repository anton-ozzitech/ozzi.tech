import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Banner from '../components/Banner'

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
             <div className="container">
               <h1 className="title">{mainpitch.title}</h1>
               <h3 className="subtitle">{mainpitch.description}</h3>
             </div>
           </section>
           <Features gridItems={intro.blurbs} />
           <section className="content-section contact dark">
             <div className="container">
               <h1>Contact Us</h1>
               {contact &&
                 contact.address.map((address, key) => (
                   <div key={`address${key}`}>
                     <h3>{address.title}</h3>
                     <div>
                       <pre>{address.text}</pre>
                     </div>
                     <div>phone: {address.phone}</div>
                     <div>email: {address.email}</div>
                   </div>
                 ))}
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
                       fluid(maxWidth: 240, quality: 64) {
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
