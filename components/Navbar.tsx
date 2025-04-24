"use client";
import {
    Navbar,
    NavBody,
    //   NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Github, Plus } from "lucide-react";
import { useState } from "react";

interface NavbarMainProps { 
    fixed?: boolean;
}
export function NavbarMain({ fixed = false }: NavbarMainProps) {
    //   const navItems = [
    //     {
    //       name: "Features",
    //       link: "#features",
    //     },
    //     {
    //       name: "Pricing",
    //       link: "#pricing",
    //     },
    //     {
    //       name: "Contact",
    //       link: "#contact",
    //     },
    //   ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar fixed={fixed} >
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    {/* <NavItems items={navItems} /> */}
                    <div className="flex items-center gap-4">
                        <NavbarButton href="/add-server" variant="secondary" className="flex items-center justify-center"><Plus className="w-4 h-4" />&nbsp;Add Server</NavbarButton>
                        <NavbarButton href="https://github.com/Eric8900/mcp_" target="_blank" rel="noopener noreferrer" variant="primary" className="flex items-center justify-center">Github&nbsp;&nbsp;<Github className="w-4 h-4" /></NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {/* {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))} */}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                href="/add-server"
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full flex items-center justify-center"
                            >
                                <Plus className="w-4 h-4" />&nbsp;Add Server
                            </NavbarButton>
                            <NavbarButton
                                href="https://github.com/Eric8900/mcp_" target="_blank" rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full flex items-center justify-center"
                            >
                                Github&nbsp;&nbsp;<Github className="w-4 h-4" />
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}