import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'; // Adjust the import paths as needed
import { Bell, User, Settings, Mail, MessageSquare, LogOut } from 'lucide-react'; // Import icons
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Import Shadcn Avatar components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BiGridAlt, BiUser, BiEnvelope, BiQuestionMark } from "react-icons/bi";

const Header = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between p-4">
        <div className="flex items-center">
        <Sheet>
    <SheetTrigger>
    <MdMenu className="text-2xl cursor-pointer"/>
    </SheetTrigger>
    <SheetContent side='left'>
    <ul className="space-y-2">
        <SheetTitle>   
          <li>
            <a href="/" className="flex items-center p-2 rounded-md hover:bg-gray-200 active:bg-gray-300" aria-label="Dashboard">
              <BiGridAlt className="text-xl" />
              <span className="ml-2">Dashboard</span>
            </a>
          </li></SheetTitle>
      <SheetHeader>


      </SheetHeader>
     
       
        <li>
          <a href="http://"  rel="noopener noreferrer" className=' flex items-center'>
     
          </a>
        </li>
        </ul>
    </SheetContent>
  </Sheet>

        
          <a href="/" className="flex items-center">
            <img src="/src/assets/logo/paws 1.png" alt="Logo" className="h-9" />
            <span 
              className="hidden lg:block ml-4" 
              style={{ 
                fontSize: '40px', 
                fontWeight: 700, 
                color: '#173467', 
                fontFamily: '"Sriracha", cursive' 
              }}
            >
              P-Care
            </span>
          </a>
        </div>
        <nav className="flex items-center space-x-4">
         
          <div className="relative mr-4"> {/* Added margin-right */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-blue-900 relative">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 inline-block px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">5</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                <DropdownMenuItem>
                  <span>Notification 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Notification 2</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Notification 3</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Notification 4</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Notification 5</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>See all notifications</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <Avatar>
                    <AvatarImage src="/static/img/wapg_uwc1_230509.jpg" alt="Profile" />
                    <AvatarFallback>ME</AvatarFallback>
                  </Avatar>
                  
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Messages</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
      <Sheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} />
    </>
  );
};

export default Header;
