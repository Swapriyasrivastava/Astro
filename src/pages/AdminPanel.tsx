
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Bell, Mail, Sun, FileText, Users, 
  Package, Settings, Star, LogOut, 
  LayoutDashboard, Book, Contact, CreditCard
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, 
  SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, 
  SidebarMenuButton, SidebarFooter, SidebarInset } from '@/components/ui/sidebar';
import { Input } from "@/components/ui/input";
import { useToast } from '@/hooks/use-toast';
import AdminDashboard from '@/components/admin/AdminDashboard';
import HoroscopeManager from '@/components/admin/HoroscopeManager';
import UserManager from '@/components/admin/UserManager';
import OrderManager from '@/components/admin/OrderManager';
import ContentManager from '@/components/admin/ContentManager';
import AdminSettings from '@/pages/settings/AdminSettings';
import KundliManager from '@/components/admin/KundliManager';
import PaymentManager from '@/components/admin/PaymentManager';
import AboutPage from '@/pages/About';
import BlogPage from '@/pages/Blog';
import ContactPage from '@/pages/Contact';

const AdminPanel = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentView, setCurrentView] = useState('dashboard');
  const [notifications] = useState(3);

  if (!user) {
    navigate('/');
    return null;
  }

  const handleMenuClick = (view) => {
    setCurrentView(view);
    toast({
      title: `${view.charAt(0).toUpperCase() + view.slice(1)} View`,
      description: `Switched to ${view} view.`,
      duration: 2000,
    });
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'settings':
        return <AdminSettings />;
      case 'horoscopes':
        return <HoroscopeManager />;
      case 'users':
        return <UserManager />;
      case 'orders':
        return <OrderManager />;
      case 'content':
        return <ContentManager />;
      case 'kundli':
        return <KundliManager />;
      case 'payments':
        return <PaymentManager />;
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-cosmic-dark">
        {/* Sidebar */}
        <Sidebar className="border-cosmic-light/30 animate-fade-in">
          <SidebarHeader>
            <div className="flex items-center px-2">
              <img 
                src="/lovable-uploads/a05f37b6-9dd7-431e-aa94-20ce9e891375.png" 
                alt="astroJanak Logo" 
                className="h-12 w-36 object-contain" 
              />
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-cosmic-light">Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'dashboard'} 
                      tooltip="Dashboard"
                      onClick={() => handleMenuClick('dashboard')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'dashboard' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'orders'} 
                      tooltip="Orders"
                      onClick={() => handleMenuClick('orders')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'orders' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <Package className="h-4 w-4" />
                      <span>Orders</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'horoscopes'} 
                      tooltip="Horoscopes"
                      onClick={() => handleMenuClick('horoscopes')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'horoscopes' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <Star className="h-4 w-4" />
                      <span>Horoscopes</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-cosmic-light">Pages</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'about'} 
                      tooltip="About"
                      onClick={() => handleMenuClick('about')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'about' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <Book className="h-4 w-4" />
                      <span>About</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'blog'} 
                      tooltip="Blog"
                      onClick={() => handleMenuClick('blog')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'blog' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <FileText className="h-4 w-4" />
                      <span>Blog</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'contact'} 
                      tooltip="Contact"
                      onClick={() => handleMenuClick('contact')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'contact' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <Contact className="h-4 w-4" />
                      <span>Contact</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-cosmic-light">Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'kundli'} 
                      tooltip="Kundli Manager"
                      onClick={() => handleMenuClick('kundli')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'kundli' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <Star className="h-4 w-4" />
                      <span>Kundli Manager</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'users'} 
                      tooltip="User Manager"
                      onClick={() => handleMenuClick('users')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'users' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <Users className="h-4 w-4" />
                      <span>User Manager</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'content'} 
                      tooltip="Content Manager"
                      onClick={() => handleMenuClick('content')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'content' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <FileText className="h-4 w-4" />
                      <span>Content Manager</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'payments'} 
                      tooltip="Payment Manager"
                      onClick={() => handleMenuClick('payments')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'payments' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <CreditCard className="h-4 w-4" />
                      <span>Payment Manager</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-cosmic-light">System</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'settings'}
                      tooltip="Settings"
                      onClick={() => handleMenuClick('settings')}
                      className={`hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 ${currentView === 'settings' ? 'text-cosmic-light bg-cosmic-light/20' : 'text-cosmic-light'}`}
                    >
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Email"
                      onClick={() => toast({
                        title: "Email System",
                        description: "Communication tools coming soon."
                      })}
                      className="hover:bg-cosmic-light/20 hover:text-cosmic-light transition-all duration-300 text-cosmic-light"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Email</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="p-2">
              <Button
                onClick={logout}
                variant="outline"
                className="w-full justify-start text-cosmic-light hover:bg-cosmic-light/20 hover:text-cosmic-light border-cosmic-light/30 btn-hover-effect animate-border-glow"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <nav className="cosmic-glass border-b border-cosmic-light/30 sticky top-0 z-50 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-cosmic-light text-glow">
                    {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
                  </span>
                  <div className="ml-4 relative">
                    <Input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-60 bg-cosmic-dark/50 border-cosmic-light/30 text-cosmic-light"
                      onChange={() => toast({ title: "Search", description: "Search functionality coming soon" })}
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="relative animate-fade-in hover:bg-cosmic-light/20 btn-hover-effect text-cosmic-light"
                    onClick={() => toast({ 
                      title: "Notifications", 
                      description: "You have 3 unread notifications" 
                    })}
                  >
                    <Bell className="text-cosmic-light" />
                    {notifications > 0 && (
                      <span className="absolute top-1 right-1 w-2 h-2 bg-cosmic-light rounded-full animate-pulse"></span>
                    )}
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="animate-fade-in hover:bg-cosmic-light/20 btn-hover-effect text-cosmic-light"
                    onClick={() => toast({ 
                      title: "Messages", 
                      description: "No new messages" 
                    })}
                  >
                    <Mail className="text-cosmic-light" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="animate-fade-in hover:bg-cosmic-light/20 btn-hover-effect text-cosmic-light"
                    onClick={() => toast({ 
                      title: "Theme Settings", 
                      description: "Toggle between light and dark mode" 
                    })}
                  >
                    <Sun className="text-cosmic-light" />
                  </Button>
                  
                  <div className="relative group">
                    <Avatar className="h-8 w-8 transition-transform hover:scale-110 bg-cosmic-light/20 border border-cosmic-light/30">
                      <AvatarFallback className="bg-cosmic-light/20 text-cosmic-light">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="absolute right-0 mt-2 w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                      <div className="cosmic-glass py-2 rounded-md shadow-xl">
                        <div className="px-4 py-2 text-sm text-cosmic-light">{user.username}</div>
                        <div className="border-t border-cosmic-light/20"></div>
                        <button
                          onClick={() => handleMenuClick('settings')}
                          className="w-full text-left px-4 py-2 text-sm text-cosmic-light hover:bg-cosmic-light/20 transition-colors"
                        >
                          Settings
                        </button>
                        <button
                          onClick={logout}
                          className="w-full text-left px-4 py-2 text-sm text-cosmic-light hover:bg-cosmic-light/20 transition-colors"
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

          <div className="container mx-auto px-4 py-6">
            {renderView()}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminPanel;
