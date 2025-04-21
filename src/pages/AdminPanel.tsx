
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Bell, Mail, Sun, Flag } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const AdminPanel = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="cosmic-glass border-b border-cosmic-light/20 fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-cosmic-light text-glow">Admin Portal</span>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative animate-fade-in hover:bg-cosmic-accent/20">
                <Bell className="text-cosmic-light" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </Button>
              
              <Button variant="ghost" size="icon" className="animate-fade-in hover:bg-cosmic-accent/20">
                <Mail className="text-cosmic-light" />
              </Button>
              
              <Button variant="ghost" size="icon" className="animate-fade-in hover:bg-cosmic-accent/20">
                <Sun className="text-cosmic-light" />
              </Button>
              
              <Button variant="ghost" size="icon" className="animate-fade-in hover:bg-cosmic-accent/20">
                <Flag className="text-cosmic-light" />
              </Button>
              
              <div className="relative group">
                <Avatar className="h-8 w-8 transition-transform hover:scale-110">
                  <AvatarFallback className="bg-cosmic-accent/20 text-cosmic-light">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                
                <div className="absolute right-0 mt-2 w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="cosmic-glass py-2 rounded-md shadow-xl">
                    <div className="px-4 py-2 text-sm text-cosmic-light">{user.username}</div>
                    <div className="border-t border-cosmic-light/20"></div>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-cosmic-light hover:bg-cosmic-accent/20 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24">
        <div className="cosmic-glass p-6 rounded-lg animate-fade-in">
          <h1 className="text-2xl font-bold text-cosmic-light mb-4">Welcome, {user.username}</h1>
          <p className="text-cosmic-light/80">This is your admin dashboard.</p>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
