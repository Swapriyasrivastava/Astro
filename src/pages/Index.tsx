
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from '@/components/AuthModal';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  
  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);
  
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-center items-center">
      <StarField />
      
      <div className="container mx-auto px-4 text-center max-w-3xl z-10 flex flex-col items-center">
        <div className="animate-float mb-6">
          <img 
            src="/lovable-uploads/a05f37b6-9dd7-431e-aa94-20ce9e891375.png" 
            alt="astroJanak Logo" 
            className="h-52 mx-auto object-contain logo-pulse"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cosmic-light text-glow mb-6 animate-fade-in">
          astroJanak Portal
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-cosmic-light mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Enter the cosmic realm to manage your celestial dashboard.
        </p>
        
        <Button
          onClick={() => setIsAuthModalOpen(true)}
          className="bg-cosmic-light hover:bg-cosmic text-cosmic-dark font-semibold px-10 py-6 text-xl animate-fade-in mt-4 btn-hover-effect shadow-lg"
          style={{ animationDelay: "0.3s" }}
        >
          Access Portal
        </Button>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        defaultTab="login" 
      />
    </div>
  );
};

export default Index;
