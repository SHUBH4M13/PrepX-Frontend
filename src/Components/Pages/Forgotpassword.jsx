import React from 'react';
import { useNavigate } from 'react-router';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="bg-[#171717] min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[#262626] rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#d4a017]/20 rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#d4a017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">Reset Link Sent</h2>
          
          <p className="text-[#ffffff90] text-lg">
            We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
          </p>
        </div>
        
        <div className="space-y-4">
          <button 
            onClick={handleLoginRedirect}
            className="w-full bg-[#d4a017] hover:bg-[#d4a027e5] transition-colors duration-300 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#d4a017]/50"
          >
            Return to Login
          </button>
          
          <p className="text-center text-[#ffffff90] text-sm">
            Didn't receive an email? 
            <button className="text-[#d4a017] hover:underline ml-1 font-medium">
              Resend Link
            </button>
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-[#ffffff90] text-sm">
            Need assistance? 
            <button className="text-[#d4a017] hover:underline ml-1 font-medium">
              Contact Support
            </button>
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-[#ffffff90] text-sm">
          Train like a warrior, succeed like a champion.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;