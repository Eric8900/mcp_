'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Hero() {

  return (
    <div className="relative flex h-[40vh] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 py-8 text-5xl font-bold sm:text-7xl">
        <a href="https://www.producthunt.com/posts/mcp_?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mcp&#0095;" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=958685&theme=light&t=1745864638309"
            alt="MCP&#0095; - MCP&#0032;Servers&#0044;&#0032;in&#0032;one&#0032;place | Product Hunt"
            width={250}
            height={54}
          />
        </a>
        MCP Servers, <br /><b>in <span className="from-secondary to-primary bg-clip-text bg-gradient-to-r text-transparent ">one</span> place</b>
        <span className="font-overusedGrotesk"></span>
      </p>
    </div>
  )
}