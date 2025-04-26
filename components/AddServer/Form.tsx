"use client";
import React, { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

function Form() {
    const [repoLink, setRepoLink] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        {
            e.preventDefault();
            if (!isValid || repoLink.trim() === '') return;

            setIsSubmitting(true);

            try {
                const formData = new FormData();
                formData.append('entry.1180523812', repoLink);

                await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScxJthAldDFrfNR9InVVwadK_F6lUnKiyJan97jqJsBFysX9w/formResponse', {
                    method: 'POST',
                    mode: 'no-cors',
                    body: formData,
                });

                try {
                    toast.success("Thanks for submitting a server 🎉");
                    setRepoLink("");
                } catch (error) {
                    console.error("Error submitting form:", error);
                    toast.error("Submission failed. Please try again.");
                } finally {
                    setIsSubmitting(false);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Failed to submit. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        };
        setRepoLink('');
    };

    const isValid = useMemo(() => {
        if (repoLink.trim() === "") return true;
        const regex = /^https:\/\/(www\.)?github\.com\/[\w.-]+\/[\w.-]+\/?$/;
        return regex.test(repoLink);
    }, [repoLink]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepoLink(e.target.value);
    };

    return (
        <div className="h-screen w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className="max-w-2xl p-5 mx-3 sm:mx-0 sm:p-24 z-10 relative backdrop-blur-sm bg-background/10 rounded-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_0_40px_-12px_rgba(255,255,255,0.15)]">
                <h1 className="relative z-10 text-5xl sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
                    Add a Server
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Want a MCP server to be listed? Add the GitHub Repository here for review!
                </p>
                <form onSubmit={handleSubmit} className="space-y-1">
                    <div className="relative w-full mt-4 z-10">
                        <GithubIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="https://github.com/user/repository"
                            className={`pl-10 w-full ${!isValid ? 'border-red-500' : ''}`}
                            value={repoLink}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {!isValid && (
                        <p className="text-red-500 text-xs">Please enter a valid GitHub repository URL (https://github.com/user/repository).</p>
                    )}
                    <Button
                        type="submit"
                        className="w-full z-10 mt-3"
                        disabled={isSubmitting || !isValid || repoLink.trim() === ''}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </form>
            </div>
        </div>
    );
}
export default Form;