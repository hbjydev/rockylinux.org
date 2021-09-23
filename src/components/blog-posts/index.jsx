import React from 'react';
import CardStack from '../card-stack';
import PageHeader from '../page-header';
import SummaryItem from '../summary-item';

const BlogPosts = ({ posts }) => {
  return (
    <main className="bg-white text-gray-800 dark:text-white z-0"> 
      <PageHeader title="News" description="Stay up-to-date on the latest from the Rocky Linux team." />
      <div style={{ width: '100%', maxWidth: '1200px', padding: '0 24px', margin: '0 auto' }}>
          <CardStack>
            {posts.map((post) => (
              <SummaryItem
                key={post.node.fields.slug}
                name={post.node.frontmatter.title}
                description={post.node.frontmatter.description}
                date={post.node.frontmatter.date}
                link={post.node.fields.slug}
                internal
              />
            ))}
          </CardStack>
      </div>
    </main>
  );
};

export default BlogPosts;
