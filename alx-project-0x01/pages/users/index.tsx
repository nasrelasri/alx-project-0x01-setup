import React from 'react';
import Head from 'next/head';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import UserCard from '../../components/common/UserCard';

interface ApiUser {
  id: number;
  name: string;
  email: string;
}

const Users: React.FC<{ posts: ApiUser[] }> = ({ posts }) => {
  // Use the fetched data from getStaticProps
  const users = posts.map((user: ApiUser) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: (user.id <= 3 ? 'Admin' : user.id <= 6 ? 'Moderator' : 'User') as 'Admin' | 'Moderator' | 'User',
    joinDate: '2023-01-15',
  }));

  const handleEditUser = (id: number) => {
    console.log(`Edit user with id: ${id}`);
    // Implement edit functionality
  };

  const handleDeleteUser = (id: number) => {
    console.log(`Delete user with id: ${id}`);
    // Implement delete functionality
  };

  return (
    <>
      <Head>
        <title>Users - My App</title>
        <meta name="description" content="Manage users" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Users</h1>
            <p className="text-gray-600">Manage your application users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                {...user}
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
              />
            ))}
          </div>
          
          {users.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No users found.</p>
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;
