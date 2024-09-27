import React from 'react'
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { User,LogOut } from "lucide-react";
import { useAuthStore } from "../../store/authStore";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
    const { user, logout, } = useAuthStore();

    const handleLogout = () => {
        logout();
        toast.success("Logout Successfully");
    };
    return (
        <header className="sticky top-0 left-0 right-0 shadow-md flex items-center justify-between p-4">
            <div className="flex items-center">
                <a href="/" className="flex items-center">
                    <img src="../assets/lic.svg" alt="Logo" className="h-10" />
                </a>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>{user.name}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>

                        <User className="mr-2 h-4 w-4" /><Link to="/showPlans">
                            <span>View Plans</span></Link>

                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}
