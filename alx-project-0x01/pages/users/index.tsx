import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import UserCard from '../../components/common/UserCard';
import UserModal from '../../components/common/UserModal';
import { UserProps } from '../../interfaces';

interface ApiUser {
  id: number;
  name: string;
  email: string;
}

const Users: React.FC<{ posts: ApiUser[] }> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState(() => 
    posts.map((user: ApiUser) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: (user.id <= 3 ? 'Admin' : user.id <= 6 ? 'Moderator' : 'User') as 'Admin' | 'Moderator' | 'User',
      joinDate: '2023-01-15',
    }))
  );

  const handleAddUser = (newUser: Omit<UserProps, 'id'>) => {
    const user: UserProps = {
      ...newUser,
      id: Math.max(...users.map(u => u.id)) + 1,
    };
    setUsers(prev => [...prev, user]);
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
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Users</h1>
                <p className="text-gray-600">Manage your application users</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Add User</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                {...user}
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

      {/* User Modal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
        mode="create"
      />
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
