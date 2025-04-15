import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    // For demo purposes - navigate to dashboard on submit
    navigate('/dashboard');
  };

  return (
    <section className="w-100 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-1/2 sm:w-2/3">
            <div className="text-center pt-0">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
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
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="text-primary hover:text-primary-dark">
                        Forgot password?
                      </a>
                    </div>
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
                      Sign In <span className="bi bi-arrow-right ml-2"></span>
                    </button>
                  </div>

                  <p className="text-center mt-4 text-sm font-light text-green-900">
                    Don't have an account? <Link to="/register" className="text-primary-dark hover:underline">Sign Up</Link>
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
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </section>
  );
};

export default Login;
