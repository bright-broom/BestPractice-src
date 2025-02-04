"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DashboardIcon, ExitIcon, EnterIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Header() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-95" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" aria-hidden="true" />
      
      <motion.nav 
        className={cn(
          "relative flex items-center justify-between",
          "max-w-6xl mx-auto px-6 py-4",
          "text-gray-900"
        )}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-2xl font-bold tracking-tight"
          variants={itemVariants}
          custom={0}
        >
          <Link href="/" className="hover:text-primary transition-colors duration-200">
            My Brand
          </Link>
        </motion.h1>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0"
              >
                <HamburgerMenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="#about"
                  className="text-lg font-medium hover:text-primary transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="#services"
                  className="text-lg font-medium hover:text-primary transition-colors duration-200"
                >
                  Services
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        <motion.ul 
          className="hidden md:flex items-center space-x-8"
          variants={itemVariants}
          custom={0.1}
        >
          <li>
            <Link 
              href="#about" 
              className="relative group py-2"
            >
              <span className="relative z-10 hover:text-primary transition-colors duration-200">About</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
            <Link 
              href="#services" 
              className="relative group py-2"
            >
              <span className="relative z-10 hover:text-primary transition-colors duration-200">Services</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
            <Link 
              href="#contact" 
              className="relative group py-2"
            >
              <span className="relative z-10 hover:text-primary transition-colors duration-200">Contact</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
          </li>
        </motion.ul>

        <motion.div 
          className="flex items-center gap-6"
          variants={itemVariants}
          custom={0.2}
        >
          {isAdmin && (
            <Link 
              href="/admin" 
              className={cn(
                "hidden md:flex items-center gap-2",
                "text-sm font-medium",
                "hover:text-primary transition-colors duration-200"
              )}
            >
              <DashboardIcon className="h-4 w-4" />
              Dashboard
            </Link>
          )}

          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className={cn(
                    "relative h-10 w-10 rounded-full p-0",
                    "border-gray-200 bg-white/50",
                    "hover:bg-gray-50 hover:border-gray-300",
                    "transition-colors duration-200"
                  )}
                >
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {session.user?.name?.[0] || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 bg-white border-gray-200 text-gray-900" 
                align="end"
              >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-200" />
                {isAdmin && (
                  <DropdownMenuItem 
                    asChild
                    className="hover:bg-gray-100 focus:bg-gray-100"
                  >
                    <Link href="/admin" className="flex items-center">
                      <DashboardIcon className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem 
                  onClick={() => signOut()} 
                  className="text-red-600 hover:bg-gray-100 focus:bg-gray-100"
                >
                  <ExitIcon className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              onClick={() => signIn()} 
              size="sm" 
              variant="outline"
              className={cn(
                "border-gray-200 bg-white/50",
                "hover:bg-gray-50 hover:border-gray-300",
                "transition-colors duration-200"
              )}
            >
              <EnterIcon className="mr-2 h-4 w-4" />
              Log In
            </Button>
          )}
        </motion.div>
      </motion.nav>
    </header>
  );
}
