import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';

const classes = {
  wrapper: 'mt-16 blog-content',
};

const GenericPage = ({ data }) => {
  const page = data.markdownRemark;

  return (
    <Layout>
      <SEO title={page.frontmatter.title} />
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <PageHeader title={page.frontmatter.title} />
        <div className="max-w-4xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
          <div className="prose mx-auto dark-mode:prose-dark dark:text-gray-300">
            <div
              className={classes.wrapper}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default GenericPage;

export const pageQuery = graphql`
  query GenericPageBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`;
