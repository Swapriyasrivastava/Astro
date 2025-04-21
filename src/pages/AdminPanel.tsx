
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Bell, Mail, Sun, Globe, Package, Users, 
  CreditCard, BarChart3, Wallet, GraduationCap, 
  Gamepad, Heart, Activity, ShoppingCart, Brain,
  Settings, Star, LogOut, FileText
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

const AdminPanel = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentView, setCurrentView] = useState('dashboard');
  const [notifications] = useState(3); // Number of unread notifications

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
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-background">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center px-2">
              <div className="flex items-center justify-center rounded-full overflow-hidden bg-cosmic-accent/20 w-10 h-10">
                <span className="text-xl font-bold animate-float">✨</span>
              </div>
              <span className="ml-2 text-lg font-bold text-sidebar-foreground">Astral Admin</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'dashboard'} 
                      tooltip="Dashboard"
                      onClick={() => handleMenuClick('dashboard')}
                    >
                      <BarChart3 className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'users'} 
                      tooltip="Users"
                      onClick={() => handleMenuClick('users')}
                    >
                      <Users className="h-4 w-4" />
                      <span>Users</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'orders'} 
                      tooltip="Orders"
                      onClick={() => handleMenuClick('orders')}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Orders</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'content'} 
                      tooltip="Content"
                      onClick={() => handleMenuClick('content')}
                    >
                      <FileText className="h-4 w-4" />
                      <span>Content</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'horoscopes'} 
                      tooltip="Horoscopes"
                      onClick={() => handleMenuClick('horoscopes')}
                    >
                      <Star className="h-4 w-4" />
                      <span>Horoscopes</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="AI"
                      onClick={() => toast({
                        title: "AI Features",
                        description: "AI content generation is coming soon."
                      })}
                    >
                      <Brain className="h-4 w-4" />
                      <span>AI</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Services</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Cryptocurrency"
                      onClick={() => toast({
                        title: "Cryptocurrency",
                        description: "Crypto payment options coming soon."
                      })}
                    >
                      <CreditCard className="h-4 w-4" />
                      <span>Cryptocurrency</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Investment"
                      onClick={() => toast({
                        title: "Investment Tools",
                        description: "Financial analytics coming soon."
                      })}
                    >
                      <Wallet className="h-4 w-4" />
                      <span>Investment</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="LMS"
                      onClick={() => toast({
                        title: "Learning Management",
                        description: "Educational content tools coming soon."
                      })}
                    >
                      <GraduationCap className="h-4 w-4" />
                      <span>LMS</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="NFT & Gaming"
                      onClick={() => toast({
                        title: "NFT Management",
                        description: "Digital asset tools coming soon."
                      })}
                    >
                      <Gamepad className="h-4 w-4" />
                      <span>NFT & Gaming</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Medical"
                      onClick={() => toast({
                        title: "Medical Services",
                        description: "Health & wellness features coming soon."
                      })}
                    >
                      <Heart className="h-4 w-4" />
                      <span>Medical</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Analytics"
                      onClick={() => toast({
                        title: "Advanced Analytics",
                        description: "Detailed reporting tools coming soon."
                      })}
                    >
                      <Activity className="h-4 w-4" />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="POS & Inventory"
                      onClick={() => toast({
                        title: "Inventory System",
                        description: "Stock management tools coming soon."
                      })}
                    >
                      <Package className="h-4 w-4" />
                      <span>POS & Inventory</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>System</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={currentView === 'settings'}
                      tooltip="Settings"
                      onClick={() => handleMenuClick('settings')}
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
                className="w-full justify-start text-sidebar-foreground hover:bg-cosmic-accent/20"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          {/* Navbar */}
          <nav className="cosmic-glass border-b border-cosmic-light/20 sticky top-0 z-50">
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
                      className="w-60 bg-cosmic-dark/30 border-cosmic-light/20 text-cosmic-light"
                      onChange={() => toast({ title: "Search", description: "Search functionality coming soon" })}
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="relative animate-fade-in hover:bg-cosmic-accent/20"
                    onClick={() => toast({ 
                      title: "Language Settings", 
                      description: "Switch between available languages" 
                    })}
                  >
                    <Globe className="text-cosmic-light" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="relative animate-fade-in hover:bg-cosmic-accent/20"
                    onClick={() => toast({ 
                      title: "Notifications", 
                      description: "You have 3 unread notifications" 
                    })}
                  >
                    <Bell className="text-cosmic-light" />
                    {notifications > 0 && (
                      <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
                    )}
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="animate-fade-in hover:bg-cosmic-accent/20"
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
                    className="animate-fade-in hover:bg-cosmic-accent/20"
                    onClick={() => toast({ 
                      title: "Theme Settings", 
                      description: "Toggle between light and dark mode" 
                    })}
                  >
                    <Sun className="text-cosmic-light" />
                  </Button>
                  
                  <div className="relative group">
                    <Avatar className="h-8 w-8 transition-transform hover:scale-110">
                      <AvatarFallback className="bg-cosmic-accent/20 text-cosmic-light">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="absolute right-0 mt-2 w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                      <div className="cosmic-glass py-2 rounded-md shadow-xl">
                        <div className="px-4 py-2 text-sm text-cosmic-light">{user.username}</div>
                        <div className="border-t border-cosmic-light/20"></div>
                        <button
                          onClick={() => handleMenuClick('settings')}
                          className="w-full text-left px-4 py-2 text-sm text-cosmic-light hover:bg-cosmic-accent/20 transition-colors"
                        >
                          Settings
                        </button>
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

          {/* Main Content */}
          <div className="container mx-auto px-4 py-6">
            {renderView()}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminPanel;
