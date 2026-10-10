"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Boxes, Headset, LifeBuoy, Sparkles } from "lucide-react"

const tabData = [
    {
        icon: Sparkles,
        title: "Builder",
        image: "/screenshots/builder.png",
    },
    {
        icon: Boxes,
        title: "Ecommerce",
        image: "/screenshots/dashboard.png",
    },
    {
        icon: Headset,
        title: "CX",
        image: "/screenshots/cx.png",
    },
    {
        icon: LifeBuoy,
        title: "Lifecycle",
        image: "/screenshots/lifecycle.png",
    }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        },
    },
};

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const handleTabChange = (value: string) => {
        const index = tabData.findIndex((tab) => tab.title === value);
        if (index !== -1) {
            setActiveTab(index);
        }
    };

    const AUTO_PLAY_DURATION = 5000; // 5 seconds per tab
    return (
        <section ref={sectionRef} className="px-4">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto w-full border-x border-border"
            >
                <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 sm:gap-6 py-8 sm:py-11 md:py-20 max-w-2xl mx-auto text-center">
                    <Badge variant={"outline"} className="h-auto rounded-full text-sm px-3 py-1">
                        Closed beta — <strong>founding stores only</strong>
                        <ArrowRight size={16} className="" />
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
                        One workspace for{" "}
                        <span className="bg-[linear-gradient(90deg,var(--foreground)_-20%,#FF4801_94.54%,#FFFFFF_104.51%)] bg-clip-text text-transparent">
                            the whole store
                        </span>
                    </h1>
                    <p className="text-lg font-normal text-muted-foreground">Builder, back office, support and lifecycle usually mean four tools that never share data. Wooblitz runs them as one connected platform, on your own store.</p>
                    <div className="flex items-center gap-3">
                        <Button className="h-auto px-5 sm:px-6 py-2.5 sm:py-3.5 cursor-pointer hover:bg-primary/80 hover:translate-y-1 transition-transform duration-300">Request beta access</Button>
                        <Button variant={"outline"} className={"h-auto cursor-pointer px-5 sm:px-6 py-2.5 sm:py-3.5 hover:translate-y-1 transition-transform duration-300"}>See what works</Button>
                    </div>
                </motion.div>
                <div>
                    <Tabs 
                        value={tabData[activeTab].title} 
                        onValueChange={handleTabChange}
                        className="w-full h-auto gap-0"
                    >
                        <TabsList className="p-0 w-full bg-transparent h-auto! border-y border-border rounded-none overflow-x-auto overflow-y-hidden no-scrollbar justify-normal!">
                            {tabData?.map((value, key) => {
                                const isActive = activeTab === key;
                                
                                return (
                                    <TabsTrigger 
                                        key={key} 
                                        value={value?.title} 
                                        className="relative flex-1 shrink-0 min-w-max whitespace-nowrap px-4 py-5 sm:py-7 sm:px-10 h-auto text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-5 border-0 border-r border-border last:border-r-0 rounded-none dark:bg-transparent text-foreground/70 data-[state=active]:text-foreground hover:text-foreground/90 cursor-pointer transition-colors overflow-hidden"
                                    >
                                        {isActive && (
                                            <>
                                                <motion.div
                                                    layoutId="activeTabBackground"
                                                    className="absolute inset-0 bg-muted/50 dark:bg-muted/20 -z-10"
                                                    transition={{ 
                                                        type: "tween", 
                                                        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], 
                                                        duration: 0.4 
                                                    }}
                                                />
                                                <motion.div
                                                    key={`progress-${key}`}
                                                    className="absolute top-0 left-0 right-0 h-0.5 bg-primary z-10"
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ 
                                                        duration: AUTO_PLAY_DURATION / 1000, 
                                                        ease: "linear" as const 
                                                    }}
                                                    onAnimationComplete={() => {
                                                        setActiveTab((prev) => (prev + 1) % tabData.length);
                                                    }}
                                                />
                                            </>
                                        )}
                                        <value.icon size={20} className={isActive ? "text-primary" : "text-muted-foreground"} />
                                        <span className="max-sm:hidden font-medium">{value?.title}</span>
                                    </TabsTrigger>
                                )
                            })}
                        </TabsList>
                        <div className="relative w-auto overflow-hidden">
                            <AnimatePresence mode="sync">
                                {tabData.map((tab, index) => (
                                    <TabsContent 
                                        key={index}
                                        value={tab.title} 
                                        className="p-0 m-0 outline-none w-full h-auto"
                                    >
                                        <motion.div 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ 
                                                duration: 0.3, 
                                                ease: "easeInOut" as const 
                                            }}
                                            className="relative pt-5 px-5 sm:pt-14 sm:px-14 bg-[radial-gradient(60%_100%_at_50%_0%,var(--color-primary)_0%,transparent_70%)] opacity-[0.07] w-full h-auto"
                                        >
                                            <img
                                                src={tab.image}
                                                alt={tab.title}
                                                className="w-full h-auto rounded-xl border border-border shadow-2xl"
                                                width={1780}
                                                height={800}
                                            />
                                        </motion.div>
                                    </TabsContent>
                                ))}
                            </AnimatePresence>
                        </div>
                    </Tabs>
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection