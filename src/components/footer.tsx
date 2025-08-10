import { Logo } from '@/components/logo'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "../lib/utils";
import Link from 'next/link'

const links = [
    {
        group: 'Resources',
        items: [
            {
                title: 'Blog',
                href: '/blog',
            },
            {
                title: 'Downloads',
                href: '/guide',
            },
            {
                title: 'Newsletter',
                href: '/newsletter',
            },
        ],
    },
    {
        group: 'Company',
        items: [
            {
                title: 'Founder Letter',
                href: '/letter',
            },
            {
                title: 'Get Started',
                href: '/get-started',
            },
        ],
    },
    {
        group: 'Legal',
        items: [
            {
                title: 'Privacy Policy',
                href: '/privacy',
            },
            {
                title: 'Terms of Service',
                href: '/terms',
            },
            {
                title: 'Cookie Policy',
                href: '/cookies',
            },
        ],
    },
]

export default function FooterSection() {
    return (
        <footer className="border-b bg-white pt-20 dark:bg-transparent">
            <div className="mb-8 border-b md:mb-12">
                <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 px-6 pb-6">
                    <Link
                        href="/"
                        aria-label="go home"
                        className="block size-fit">
                        <Logo />
                    </Link>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link
                            href="https://linkedin.com/company/sendlead"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-4 md:gap-0">
                    <div className="grid grid-cols-3 gap-6 md:col-span-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                    <form className="text-sm">
                        <div className="space-y-4">
                            <Label
                                htmlFor="mail"
                                className="block font-medium">
                                Subscribe to our newsletter
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    id="mail"
                                    name="mail"
                                    placeholder="Your email"
                                    className="h-8 text-sm"
                                />
                                <Button size="sm">Submit</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
                    <small className="text-muted-foreground order-last block text-center text-sm md:order-first">© 2025 Palm. All rights reserved.</small>
                </div>
            </div>
        </footer>
    )
}
