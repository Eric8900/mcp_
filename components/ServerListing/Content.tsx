'use client';
import React from 'react'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface ContentProps {
    serverid: string;
}

function Content({ serverid }: ContentProps) {
    return (
        <div className="relative w-full bg-white mt-[10vh]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 py-8">
                    {/* Left sticky sidebar - becomes top section on mobile */}
                    <div className="lg:w-1/3 lg:sticky lg:top-[20vh] lg:self-start">
                        <div className="space-y-6">
                            <Link href="/" className='text-neutral-500 hover:text-black flex items-center gap-2 transition-all'>
                                <ChevronLeft className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                                Back to Servers
                            </Link>
                            <div className="flex items-center gap-2 text-sm text-black">
                                <Image width={10} height={10} src="/placeholder.svg" alt="Logo" className="w-5 h-5 rounded-full" />
                                <h1 className="text-5xl font-bold tracking-tight">
                                    {serverid}
                                </h1>
                            </div>

                            <p className="text-lg text-gray-600">
                                Get started with this amazing template in seconds.
                            </p>

                            <div className="flex gap-4">
                                <button className="w-full font-bold bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                    Github Repo
                                </button>
                            </div>

                            <div className="space-y-4 pt-8">
                                <div className="flex justify-between py-4 border-t">
                                    Tags
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right content area */}
                    <div className="lg:w-2/3">
                        <div className="prose max-w-none">
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            {/* Adding more paragraphs to demonstrate scrolling */}
                            {Array.from({ length: 15 }).map((_, index) => (
                                <p key={index} className="text-gray-600 mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content