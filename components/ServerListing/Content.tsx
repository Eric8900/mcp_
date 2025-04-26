'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, LoaderCircle, TagIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Server, getServerBySearchId } from '@/lib/actions';
import { categories } from '../Category';
import MarkdownPreview from '@uiw/react-markdown-preview';

interface ContentProps {
    serverid: string;
}

function Content({ serverid }: ContentProps) {
    const [server, setServer] = useState<Server | null>(null);
    const [loading, setLoading] = useState(true);
    const [readme, setReadme] = useState<string>('');

    useEffect(() => {
        async function fetchServer() {
            const data = await getServerBySearchId(serverid);
            setServer(data);
            if (data?.readme_url) {
                try {
                    const response = await fetch(data.readme_url);
                    const text = await response.text();
                    setReadme(text);
                } catch (error) {
                    console.error('Error fetching README:', error);
                }
            }
            setLoading(false);
        }
        fetchServer();
    }, [serverid]);

    if (loading) {
        return <div className="relative flex justify-center items-center p-6 gap-6 h-[60vh] mt-[10vh]">
            <LoaderCircle className="animate-spin text-gray-500" size={100} />
        </div>;
    }

    if (!server) {
        return <div className="relative flex justify-center items-center p-6 gap-6 h-[60vh] mt-[10vh]">Server not found</div>;
    }

    return (
        <div className="relative w-full mt-[10vh]">
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
                                {server.logo_url ? (
                                    <Image
                                        width={20}
                                        height={20}
                                        src={server.logo_url}
                                        alt={`${server.title} logo`}
                                        className="w-10 h-10 rounded-full"
                                    />
                                ) : null}
                                <h1 className="text-5xl font-bold tracking-tight">
                                    {server.title}
                                </h1>
                            </div>

                            <p className="text-lg text-gray-600">
                                {server.description}
                            </p>

                            <div className="flex gap-4 w-full">
                                {server.github_url && (
                                    <Link href={server.github_url} target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button className="w-full font-bold text-lg py-6">
                                            Github Repo
                                        </Button>
                                    </Link>
                                )}
                            </div>

                            <div className="space-y-4 pt-8">
                                <div className="flex justify-between py-4 border-t">
                                    <div className="flex flex-wrap gap-2">
                                        <TagIcon className="h-10 w-10 stroke-1 text-gray-500" />
                                        {server.tags?.map((tag) => {
                                            const categoryMatch = categories.find(
                                                (category) => category.value === tag.toLowerCase()
                                            );
                                            return (
                                                <span
                                                    key={tag}
                                                    className="inline-block text-xl text-gray-600 rounded-full px-3 py-1"
                                                >
                                                    {categoryMatch?.name || tag}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right content area */}
                    <div className="lg:w-2/3 lg:border-l lg:px-10">
                        <div className="max-w-none prose prose-emerald dark:prose-invert prose-a:text-primary! prose-a:no-underline prose-a:hover:text-secondary! [&_.code-line]:text-black!">
                            {readme ? (
                                <MarkdownPreview
                                    wrapperElement={{ "data-color-mode": "light" }}
                                    source={readme} />
                            ) : (
                                <div className="text-gray-500 italic">
                                    No documentation available
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content