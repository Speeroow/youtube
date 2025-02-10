"use client"

import { 
    SidebarGroup, 
    SidebarMenu,
    SidebarGroupContent, 
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupLabel
} from "@/components/ui/sidebar"

import {
    HistoryIcon,
    ListVideoIcon,
    ThumbsUpIcon
} from "lucide-react"
import Link from "next/link"

const items = [
    {
        title: "History",
        url: "/playlist/history",
        icon: HistoryIcon,
        auth: true,
    },
    {
        title: "Liked videos",
        url: "/playlist/liked",
        icon: ThumbsUpIcon,
        auth: true,
    },
    {
        title: "All Playlist",
        url: "/playlist",
        icon: ListVideoIcon,
        auth: true
    },

]

export const PersonalSection = () => {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                You
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false} //TODO: Change to look at current pathname
                                onClick={()=>{}} // TODO: DO something on click
                            >
                                <Link href={item.url} className="flex items-center gap-4">
                                    <item.icon />
                                    <span className="text-sm">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}