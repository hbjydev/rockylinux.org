import React from 'react';
import PageHeader from '../page-header';
import SummaryItem from '../summary-item';

const BlogPosts = ({ posts }) => {
  return (
    <main className="bg-white text-gray-800 dark:text-white z-0"> 
      <PageHeader title="News" description="Stay up-to-date on the latest from the Rocky Linux team." />
      <div className="max-w-4xl mx-auto py-8 px-4 sm:pb-10 sm:px-6 lg:px-8">
        <div className="px-4">
          <div className="grid gap-4 row-gap-6 lg:grid-cols-1">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPosts;
