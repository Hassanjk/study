import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.surname || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // For demo purposes - navigate to dashboard on submit
    // In a real app, you would register the user with the backend
    navigate('/dashboard');
  };

  return (
    <section className="w-100 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-1/2 sm:w-2/3">
            <div className="text-center pt-0">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Welcome</h2>
                <h3 className="text-2xl font-medium text-primary">Pulse Camp</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg border-0 shadow-lg">
              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm mb-4">
                      {error}
                    </div>
                  )}

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Surname</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      name="surname"
                      placeholder="Enter your surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      name="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Confirm Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="text-center mt-6 flex flex-wrap justify-center gap-3">
                    <button 
                      type="button" 
                      onClick={() => navigate('/')}
                      className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
                    >
                      <span className="bi bi-house mr-2"></span> Home Page
                    </button>
                    <button 
                      type="submit"
                      className="flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors"
                    >
                      Sign Up <span className="bi bi-arrow-right ml-2"></span>
                    </button>
                  </div>

                  <p className="text-center mt-4 text-sm font-light text-green-900">
                    Already registered? <Link to="/" className="text-primary-dark hover:underline">Sign In</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background image for decoration - using Unsplash */}
      <div 
        className="fixed -z-10 inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </section>
  );
};

export default Register;
