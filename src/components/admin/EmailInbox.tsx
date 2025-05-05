
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; 
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Bell, Mail, Star, Trash2, Archive, Reply, Forward, MailPlus, Search, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample email data
const emailData = [
  { 
    id: 'e1', 
    from: 'Raj Kumar', 
    email: 'raj@example.com', 
    subject: 'Kundli Reading Request', 
    preview: 'Hello, I would like to request a detailed Kundli reading for my upcoming...',
    content: 'Hello,\n\nI would like to request a detailed Kundli reading for my upcoming marriage. My birth details are as follows:\n\nDate: April 15, 1990\nTime: 08:30 AM\nPlace: Delhi, India\n\nPlease let me know the process and fees.\n\nRegards,\nRaj Kumar',
    date: '15 mins ago', 
    read: false,
    starred: false,
    avatar: null
  },
  { 
    id: 'e2', 
    from: 'Priya Singh', 
    email: 'priya@example.com', 
    subject: 'Feedback on Horoscope Reading', 
    preview: 'Thank you for the amazing reading last week. Your predictions about my job...',
    content: 'Dear astroJanak team,\n\nThank you for the amazing reading last week. Your predictions about my job interview were spot on! I got the position just as you mentioned would happen.\n\nI would like to schedule another session for next month.\n\nBest regards,\nPriya Singh',
    date: '2 hours ago', 
    read: true,
    starred: true,
    avatar: null
  },
  { 
    id: 'e3', 
    from: 'Aakash Patel', 
    email: 'aakash@example.com', 
    subject: 'Question About Venus Transit', 
    preview: 'I have been reading about the upcoming Venus transit and how it might...',
    content: 'Hello,\n\nI have been reading about the upcoming Venus transit and how it might affect my relationship life. As a Taurus, I understand Venus is my ruling planet.\n\nCould you provide some insights on how I can make the most of this transit?\n\nThanks,\nAakash Patel',
    date: 'Yesterday', 
    read: false,
    starred: false,
    avatar: null
  },
  { 
    id: 'e4', 
    from: 'Sanjay Sharma', 
    email: 'sanjay@example.com', 
    subject: 'Business Partnership Compatibility', 
    preview: 'I am considering entering into a business partnership and would like to...',
    content: 'Dear astroJanak,\n\nI am considering entering into a business partnership and would like to know if our birth charts are compatible for this venture.\n\nMy details: March 10, 1985, 10:15 PM, Mumbai\nPartner\'s details: August 22, 1983, 2:30 PM, Bangalore\n\nPlease advise on the astrological compatibility for business purposes.\n\nRegards,\nSanjay Sharma',
    date: '2 days ago', 
    read: true,
    starred: false,
    avatar: null
  },
  { 
    id: 'e5', 
    from: 'Meena Devi', 
    email: 'meena@example.com', 
    subject: 'Vastu Consultation for New Home', 
    preview: 'We have recently purchased a new apartment and would like to have a Vastu...',
    content: 'Respected Sir,\n\nWe have recently purchased a new apartment and would like to have a Vastu consultation before we move in next month. The property is a 3BHK facing east in Gurgaon.\n\nIs it possible to schedule a visit for assessment? What would be the charges?\n\nThank you,\nMeena Devi',
    date: '1 week ago', 
    read: true,
    starred: true,
    avatar: null
  },
];

const EmailInbox = () => {
  const { toast } = useToast();
  const [emails, setEmails] = useState(emailData);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState('inbox');

  // Count unread emails
  const unreadCount = emails.filter(email => !email.read).length;
  
  // Count starred emails
  const starredCount = emails.filter(email => email.starred).length;

  // Filter emails based on search query
  const filteredEmails = emails.filter(email => 
    email.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
    email.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    email.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get emails for current tab
  const tabEmails = filteredEmails.filter(email => {
    if (currentTab === 'inbox') return true;
    if (currentTab === 'starred') return email.starred;
    if (currentTab === 'unread') return !email.read;
    return true;
  });

  // Handle email click
  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    
    // Mark as read if unread
    if (!email.read) {
      const updatedEmails = emails.map(e => 
        e.id === email.id ? {...e, read: true} : e
      );
      setEmails(updatedEmails);
    }
  };

  // Handle star toggle
  const handleStarToggle = (emailId, event) => {
    event.stopPropagation();
    const updatedEmails = emails.map(email => 
      email.id === emailId ? {...email, starred: !email.starred} : email
    );
    setEmails(updatedEmails);
  };

  // Handle delete email
  const handleDeleteEmail = (emailId) => {
    setEmails(emails.filter(email => email.id !== emailId));
    setSelectedEmail(null);
    toast({
      title: "Email Deleted",
      description: "The email has been moved to trash.",
      duration: 3000,
    });
  };

  // Handle reply
  const handleReply = (email) => {
    toast({
      title: "Reply Started",
      description: `Replying to ${email.from}...`,
      duration: 3000,
    });
  };

  // Handle forward
  const handleForward = (email) => {
    toast({
      title: "Forward Started",
      description: `Forwarding email from ${email.from}...`,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="cosmic-glass dashboard-content border-cosmic-light/30">
        <CardHeader className="border-b border-cosmic-light/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="h-6 w-6 text-cosmic-light" />
              <CardTitle className="text-2xl text-cosmic-light">Email Inbox</CardTitle>
            </div>
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => toast({
                  title: "Refresh",
                  description: "Inbox refreshed",
                  duration: 2000,
                })}
                className="text-cosmic-light border-cosmic-light/20"
              >
                Refresh
              </Button>
              <Button 
                size="sm" 
                onClick={() => toast({
                  title: "New Message",
                  description: "Compose new email",
                  duration: 2000,
                })}
              >
                <MailPlus className="mr-1 h-4 w-4" />
                New Message
              </Button>
            </div>
          </div>
          <CardDescription className="text-cosmic-light/70">
            Manage emails and communications with users
          </CardDescription>
        </CardHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 h-[600px]">
          {/* Sidebar */}
          <div className="md:col-span-1 border-r border-cosmic-light/20 p-4 space-y-4">
            <div className="mb-6">
              <Input 
                placeholder="Search emails..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-cosmic-dark/50 border-cosmic-light/30"
                prefix={<Search className="h-4 w-4 text-cosmic-light/50" />}
              />
            </div>
            
            <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
              <TabsList className="bg-cosmic-dark/50 w-full grid grid-cols-3">
                <TabsTrigger value="inbox" className="data-[state=active]:bg-cosmic-light/20">
                  Inbox
                  {unreadCount > 0 && (
                    <Badge className="ml-2 bg-cosmic-light text-cosmic-dark badge-pulse">{unreadCount}</Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="starred" className="data-[state=active]:bg-cosmic-light/20">
                  Starred
                  {starredCount > 0 && (
                    <Badge className="ml-2 bg-cosmic-accent/80 text-cosmic-dark">{starredCount}</Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="unread" className="data-[state=active]:bg-cosmic-light/20">
                  Unread
                </TabsTrigger>
              </TabsList>
            
              <TabsContent value="inbox" className="mt-0">
                <div className="space-y-1 mt-4">
                  {tabEmails.map((email, index) => (
                    <div 
                      key={email.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all mail-item ${
                        email.read ? 'bg-cosmic-dark/30' : 'bg-cosmic-dark/50'
                      } hover:bg-cosmic-light/20`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => handleEmailClick(email)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium text-white flex items-center">
                          <button 
                            className="mr-2 text-cosmic-light/70 hover:text-cosmic-light transition-colors"
                            onClick={(e) => handleStarToggle(email.id, e)}
                          >
                            <Star className={`h-4 w-4 ${email.starred ? 'text-cosmic-light fill-cosmic-light' : ''}`} />
                          </button>
                          {!email.read && (
                            <div className="w-2 h-2 rounded-full bg-cosmic-light mr-2 badge-pulse"></div>
                          )}
                          {email.from}
                        </div>
                        <span className="text-xs text-cosmic-light/70">{email.date}</span>
                      </div>
                      <div className={`text-sm ${email.read ? 'text-cosmic-light/80' : 'text-cosmic-light'}`}>
                        {email.subject}
                      </div>
                      <div className="text-xs text-cosmic-light/60 truncate">
                        {email.preview}
                      </div>
                    </div>
                  ))}
                  
                  {tabEmails.length === 0 && (
                    <div className="text-center py-8 text-cosmic-light/50">
                      <Mail className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>No emails found</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="starred" className="mt-0">
                {/* Similar content for starred tab */}
                <div className="space-y-1 mt-4">
                  {tabEmails.length === 0 ? (
                    <div className="text-center py-8 text-cosmic-light/50">
                      <Star className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>No starred emails</p>
                    </div>
                  ) : (
                    tabEmails.map((email, index) => (
                      <div 
                        key={email.id}
                        className={`p-3 rounded-lg cursor-pointer transition-all mail-item ${
                          email.read ? 'bg-cosmic-dark/30' : 'bg-cosmic-dark/50'
                        } hover:bg-cosmic-light/20`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => handleEmailClick(email)}
                      >
                        {/* Same email item structure as inbox */}
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-medium text-white flex items-center">
                            <button 
                              className="mr-2 text-cosmic-light hover:text-cosmic-light transition-colors"
                              onClick={(e) => handleStarToggle(email.id, e)}
                            >
                              <Star className="h-4 w-4 fill-cosmic-light" />
                            </button>
                            {!email.read && (
                              <div className="w-2 h-2 rounded-full bg-cosmic-light mr-2 badge-pulse"></div>
                            )}
                            {email.from}
                          </div>
                          <span className="text-xs text-cosmic-light/70">{email.date}</span>
                        </div>
                        <div className={`text-sm ${email.read ? 'text-cosmic-light/80' : 'text-cosmic-light'}`}>
                          {email.subject}
                        </div>
                        <div className="text-xs text-cosmic-light/60 truncate">
                          {email.preview}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="unread" className="mt-0">
                {/* Content for unread tab */}
                <div className="space-y-1 mt-4">
                  {tabEmails.length === 0 ? (
                    <div className="text-center py-8 text-cosmic-light/50">
                      <Bell className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>No unread emails</p>
                    </div>
                  ) : (
                    tabEmails.map((email, index) => (
                      <div 
                        key={email.id}
                        className="p-3 rounded-lg cursor-pointer transition-all mail-item bg-cosmic-dark/50 hover:bg-cosmic-light/20"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => handleEmailClick(email)}
                      >
                        {/* Same email item structure */}
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-medium text-white flex items-center">
                            <button 
                              className="mr-2 text-cosmic-light/70 hover:text-cosmic-light transition-colors"
                              onClick={(e) => handleStarToggle(email.id, e)}
                            >
                              <Star className={`h-4 w-4 ${email.starred ? 'text-cosmic-light fill-cosmic-light' : ''}`} />
                            </button>
                            <div className="w-2 h-2 rounded-full bg-cosmic-light mr-2 badge-pulse"></div>
                            {email.from}
                          </div>
                          <span className="text-xs text-cosmic-light/70">{email.date}</span>
                        </div>
                        <div className="text-sm text-cosmic-light">
                          {email.subject}
                        </div>
                        <div className="text-xs text-cosmic-light/60 truncate">
                          {email.preview}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Email content */}
          <div className="md:col-span-3 lg:col-span-2 p-6 overflow-auto">
            {selectedEmail ? (
              <div className="animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-xl font-bold text-cosmic-light">{selectedEmail.subject}</h2>
                  <div className="flex space-x-2">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 text-cosmic-light hover:text-cosmic-accent"
                      onClick={() => handleStarToggle(selectedEmail.id, { stopPropagation: () => {} })}
                    >
                      <Star className={`h-4 w-4 ${selectedEmail.starred ? 'text-cosmic-light fill-cosmic-light' : ''}`} />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 text-cosmic-light hover:text-destructive"
                      onClick={() => handleDeleteEmail(selectedEmail.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="mb-6 flex items-center space-x-3">
                  <Avatar className="h-10 w-10 border border-cosmic-light/30 shadow-md avatar-glow">
                    <AvatarFallback className="bg-cosmic-accent/20 text-cosmic-light">
                      {selectedEmail.from.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-cosmic-light">{selectedEmail.from}</div>
                    <div className="text-xs text-cosmic-light/70">{selectedEmail.email}</div>
                  </div>
                  <div className="ml-auto text-sm text-cosmic-light/70">
                    {selectedEmail.date}
                  </div>
                </div>
                
                <div className="border-t border-cosmic-light/20 pt-6 mb-6">
                  <div className="text-white whitespace-pre-line">
                    {selectedEmail.content}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    onClick={() => handleReply(selectedEmail)}
                    className="enhanced-btn-transition"
                  >
                    <Reply className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleForward(selectedEmail)}
                    className="text-cosmic-light border-cosmic-light/30 enhanced-btn-transition"
                  >
                    <Forward className="mr-2 h-4 w-4" />
                    Forward
                  </Button>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center flex-col text-cosmic-light/50">
                <Mail className="h-16 w-16 mb-4 opacity-50" />
                <p className="text-lg">Select an email to view</p>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EmailInbox;
