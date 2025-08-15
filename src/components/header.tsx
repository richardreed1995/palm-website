'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ChevronDown, ChevronUp, FileText, Send, DollarSign, Settings, Users, BookOpen, Download, ClipboardList, TrendingUp, Mail } from 'lucide-react'
import { Button } from './ui/button'
import React from 'react'
import { cn } from "../lib/utils";

const navigationItems = [
    {
        name: 'Why Palm?',
        href: '/#overview',
        hasDropdown: false
    },
    {
        name: 'Process',
        href: '/#methodology',
        hasDropdown: false
    },
    {
        name: 'About',
        href: '#',
        hasDropdown: true,
        items: [
            {
                title: 'Founder Letter',
                description: 'Our mission & vision',
                href: '/letter',
                icon: FileText
            }
        ]
    },
    {
        name: 'Resources',
        href: '#',
        hasDropdown: true,
        items: [
            {
                title: 'Blog',
                description: 'Growth insights & tips',
                href: '/blog',
                icon: BookOpen
            },
            {
                title: 'Downloads',
                description: 'Free resources & guides',
                href: '/guide',
                icon: Download
            },
            {
                title: 'Newsletter',
                description: 'Weekly growth insights',
                href: '/newsletter',
                icon: Mail
            }
        ]
    }
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu when clicking outside or on escape
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMenuState(false)
                setActiveDropdown(null)
            }
        }

        if (menuState) {
            document.addEventListener('keydown', handleEscape)
            // Prevent body scroll when mobile menu is open
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [menuState])

    const handleDropdownToggle = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name)
    }

    const closeMobileMenu = () => {
        setMenuState(false)
        setActiveDropdown(null)
    }

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex items-center justify-between py-3 lg:py-4">
                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2">
                            <Logo />
                        </Link>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                            <ul className="flex items-center gap-8 text-sm">
                                {navigationItems.map((item, index) => (
                                    <li key={index} className="relative">
                                        {item.hasDropdown ? (
                                            <div 
                                                className="relative group"
                                                onMouseEnter={() => setActiveDropdown(item.name)}
                                                onMouseLeave={() => setActiveDropdown(null)}
                                            >
                                                <button
                                                    className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150"
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className="size-4" />
                                                </button>
                                                
                                                {activeDropdown === item.name && (
                                                    <div className={`absolute top-full mt-2 rounded-xl border bg-background/95 backdrop-blur-sm shadow-lg ${
                                                        item.name === 'Resources' ? 'w-80 left-0' : 'w-80 left-0'
                                                    }`}>
                                                        {/* Invisible buffer zone to prevent gap */}
                                                        <div className="absolute -top-2 left-0 right-0 h-2"></div>
                                                        <div className="p-6">
                                                            <div className="grid gap-3">
                                                                {item.items?.map((subItem, subIndex) => {
                                                                    const IconComponent = subItem.icon
                                                                    return (
                                                                        <Link
                                                                            key={subIndex}
                                                                            href={subItem.href}
                                                                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                                                                        >
                                                                            <IconComponent className="size-5 text-muted-foreground" />
                                                                            <div>
                                                                                <div className="font-medium text-foreground">{subItem.title}</div>
                                                                                <div className="text-sm text-muted-foreground">{subItem.description}</div>
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden lg:block">
                            <Button
                                asChild
                                size="sm"
                                className="lg:inline-flex">
                                <Link href="/get-started-intro">
                                    <span>Get Started</span>
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                            className="relative z-50 -m-2.5 block cursor-pointer p-2.5 lg:hidden">
                            <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                            <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {menuState && (
                    <div className="lg:hidden">
                        {/* Backdrop */}
                        <div 
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                            onClick={closeMobileMenu}
                        />
                        
                        {/* Mobile Menu Panel */}
                        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background shadow-2xl">
                            <div className="flex h-full flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b">
                                    <Link
                                        href="/"
                                        onClick={closeMobileMenu}
                                        className="flex items-center space-x-2">
                                        <Logo />
                                    </Link>
                                    <button
                                        onClick={closeMobileMenu}
                                        className="rounded-lg p-2 hover:bg-muted/50 transition-colors"
                                        aria-label="Close menu">
                                        <X className="size-6" />
                                    </button>
                                </div>

                                {/* Navigation */}
                                <nav className="flex-1 overflow-y-auto p-6">
                                    <ul className="space-y-2">
                                        {navigationItems.map((item, index) => (
                                            <li key={index}>
                                                {item.hasDropdown ? (
                                                    <div className="space-y-2">
                                                        <button
                                                            onClick={() => handleDropdownToggle(item.name)}
                                                            className="flex w-full items-center justify-between rounded-lg p-4 text-left hover:bg-muted/50 transition-colors"
                                                        >
                                                            <span className="font-medium text-foreground">{item.name}</span>
                                                            {activeDropdown === item.name ? (
                                                                <ChevronUp className="size-5 text-muted-foreground" />
                                                            ) : (
                                                                <ChevronDown className="size-5 text-muted-foreground" />
                                                            )}
                                                        </button>
                                                        
                                                        {activeDropdown === item.name && (
                                                            <div className="ml-4 space-y-2 border-l-2 border-muted pl-4">
                                                                {item.items?.map((subItem, subIndex) => {
                                                                    const IconComponent = subItem.icon
                                                                    return (
                                                                        <Link
                                                                            key={subIndex}
                                                                            href={subItem.href}
                                                                            onClick={closeMobileMenu}
                                                                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                                                                        >
                                                                            <IconComponent className="size-5 text-muted-foreground flex-shrink-0" />
                                                                            <div className="min-w-0 flex-1">
                                                                                <div className="font-medium text-foreground">{subItem.title}</div>
                                                                                <div className="text-sm text-muted-foreground">{subItem.description}</div>
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        onClick={closeMobileMenu}
                                                        className="flex w-full items-center rounded-lg p-4 hover:bg-muted/50 transition-colors">
                                                        <span className="font-medium text-foreground">{item.name}</span>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* Mobile CTA */}
                                <div className="border-t p-6">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="w-full bg-[#A8FF9E] text-black hover:bg-[#8BFF7A]">
                                        <Link href="/get-started-intro" onClick={closeMobileMenu}>
                                            <span>Get Started</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
