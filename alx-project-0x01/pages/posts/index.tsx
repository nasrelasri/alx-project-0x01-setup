import React from 'react';
import Head from 'next/head';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import PostCard from '../../components/common/PostCard';

const PostsPage: React.FC = () => {
  // Mock data for demonstration
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      content: 'Next.js is a React framework that enables several additional features, including server-side rendering and generating static websites.',
      author: 'John Doe',
      createdAt: '2024-01-15T10:30:00Z',
    },
    {
      id: 2,
      title: 'Understanding React Hooks',
      content: 'React Hooks are functions that let you use state and other React features without writing a class component.',
      author: 'Jane Smith',
      createdAt: '2024-01-14T14:20:00Z',
    },
    {
      id: 3,
      title: 'TypeScript Best Practices',
      content: 'TypeScript brings static type checking to JavaScript, helping catch errors early in the development process.',
      author: 'Mike Johnson',
      createdAt: '2024-01-13T09:15:00Z',
    },
  ];

  const handleEditPost = (id: number) => {
    console.log(`Edit post with id: ${id}`);
    // Implement edit functionality
  };

  const handleDeletePost = (id: number) => {
    console.log(`Delete post with id: ${id}`);
    // Implement delete functionality
  };

  return (
    <>
      <Head>
        <title>Posts - My App</title>
        <meta name="description" content="Browse all posts" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header title="My App" />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Posts</h1>
            <p className="text-gray-600">Discover and read our latest posts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                {...post}
                onEdit={handleEditPost}
                onDelete={handleDeletePost}
              />
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts available yet.</p>
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PostsPage;
