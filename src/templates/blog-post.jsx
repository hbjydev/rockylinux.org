import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <main className="bg-white text-gray-800 dark:text-white z-0">
        <PageHeader title={post.frontmatter.title} description={post.frontmatter.date} />
        <div className="max-w-4xl mx-auto pb-8 px-4 sm:pb-10 sm:px-6 lg:px-8">
          <div className="prose mx-auto dark-mode:prose-dark dark:text-gray-300">
            <div
              className="mt-16 blog-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
