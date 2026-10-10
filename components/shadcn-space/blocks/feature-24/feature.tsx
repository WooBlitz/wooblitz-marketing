"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import {
    Wrench,
    TrendingUp,
    Megaphone,
    User,
    Building2,
    ClipboardList,
    Code2,
    Palette,
    Layers,
    Rocket,
    Package,
    CircleCheck,
    ImageIcon,
    ImagePlay,
    Lightbulb,
    Plus,
    Mic,
    Paperclip,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tag = { icon: LucideIcon; label: string };

const row1Tags: Tag[] = [
    { icon: Wrench, label: "Founders" },
    { icon: TrendingUp, label: "DTC brands" },
    { icon: Megaphone, label: "Creators" },
    { icon: User, label: "Pop-up shops" },
    { icon: Building2, label: "Agencies" },
];

const row2Tags: Tag[] = [
    { icon: ClipboardList, label: "Merchandisers" },
    { icon: Code2, label: "Vibe coders" },
    { icon: Palette, label: "Brand designers" },
    { icon: Layers, label: "Growth teams" },
];

const row3Tags: Tag[] = [
    { icon: Rocket, label: "Side projects" },
    { icon: Package, label: "Wholesale" },
    { icon: Building2, label: "White-label" },
    { icon: Wrench, label: "Engineers" },
];

const TagChip = ({ icon: Icon, label }: Tag) => (
    <div className="flex items-center gap-1.5 h-10 px-4 rounded-full bg-black/25 border border-white/25 backdrop-blur-sm shrink-0">
        <Icon className="size-4 text-white" />
        <span className="text-sm font-medium text-white whitespace-nowrap">{label}</span>
    </div>
);

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const Feature = () => {
    return (
        <section>
            <div className="max-w-7xl xl:px-16 lg:px-8 px-4 lg:py-20 sm:py-16 py-10 mx-auto w-full">
                <div className="flex flex-col gap-5">
                    {/* Header */}
                    <motion.div
                        className="flex flex-col items-center gap-4 text-center mb-7"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp}>
                            <Badge
                                variant="outline"
                                className="text-sm font-normal text-foreground px-3 py-1 rounded-full h-auto"
                            >
                                Under the hood
                            </Badge>
                        </motion.div>
                        <motion.h2
                            variants={fadeUp}
                            className="xl:text-4xl text-3xl font-medium text-foreground max-w-2xl leading-tight"
                        >
                            Why one platform is harder than four
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-base lg:text-xl text-muted-foreground max-w-2xl"
                        >
                            Running several merchants on one platform is the part most
                            commerce software avoids. These are the decisions that make
                            it hold up.
                        </motion.p>
                    </motion.div>

                    {/* Row 1: Image left (tag overlay) + Content right */}
                    <div className="bg-muted rounded-3xl p-2 flex flex-col md:flex-row gap-0 overflow-hidden">
                        {/* Image with tag pill overlay */}
                        <motion.div
                            className="relative rounded-2xl overflow-hidden md:w-1/2 h-72 md:h-auto min-h-[300px] shrink-0 bg-linear-to-br from-[#FF7A45] via-[#FF4801] to-[#B32D00]"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeLeft}
                        >
                            {/* Soft highlight so the gradient reads as lit, not flat */}
                            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_10%,rgba(255,255,255,0.30),transparent_55%)]" />
                            {/* Marquee tag rows */}
                            <div className="absolute inset-0 flex flex-col justify-center gap-4 py-10">
                                <Marquee className="[--duration:20s] [--gap:0.75rem] p-0">
                                    {row1Tags.map((tag, i) => <TagChip key={i} {...tag} />)}
                                </Marquee>
                                <Marquee reverse className="[--duration:16s] [--gap:0.75rem] p-0">
                                    {row2Tags.map((tag, i) => <TagChip key={i} {...tag} />)}
                                </Marquee>
                                <Marquee className="[--duration:22s] [--gap:0.75rem] p-0">
                                    {row3Tags.map((tag, i) => <TagChip key={i} {...tag} />)}
                                </Marquee>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="flex-1 flex flex-col justify-center gap-8 p-8 md:p-10"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={stagger}
                        >
                            <motion.div variants={fadeRight} className="flex flex-col gap-3">
                                <h3 className="text-2xl font-medium text-foreground leading-snug">
                                    Support that can see the order
                                </h3>
                                <p className="text-base text-muted-foreground">
                                    The same customer record the storefront writes is the one the
                                    inbox reads. Conversations arrive from web chat and email into a
                                    single queue, backed by a knowledge base and automations.
                                </p>
                            </motion.div>
                            <motion.div variants={stagger} className="flex flex-col gap-3">
                                {[
                                    {
                                        title: "AI assistant",
                                        body: "Drafts answers from your knowledge base and flags what still needs a human, instead of guessing at the customer's history.",
                                    },
                                    {
                                        title: "Measured, not guessed",
                                        body: "First response, resolution time and SLA breaches are tracked per conversation, so support is judged on the numbers it is actually judged on.",
                                    },
                                ].map(({ title, body }, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeRight}
                                        className="flex gap-3 items-start"
                                    >
                                        <CircleCheck className="size-5 text-foreground shrink-0 mt-0.5" />
                                        <p className="text-base text-muted-foreground">
                                            <span className="font-medium text-foreground">
                                                {title}:{" "}
                                            </span>
                                            {body}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Row 2: Content left + Image right (AI chat UI) */}
                    <div className="bg-muted rounded-3xl p-2 flex flex-col md:flex-row gap-0 overflow-hidden">
                        {/* Content */}
                        <motion.div
                            className="flex-1 flex flex-col justify-center gap-8 p-8 md:p-10"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={stagger}
                        >
                            <motion.div variants={fadeLeft} className="flex flex-col gap-4">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-2xl font-medium text-foreground leading-snug">
                                        Own the customer, not just the order
                                    </h3>
                                    <p className="text-base text-muted-foreground">
                                        Profiles, consent, segments, templates, campaigns and journeys
                                        all write to the same record support reads — with captured
                                        revenue attributed back to the work.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div variants={stagger} className="flex flex-col gap-3">
                                {[
                                    {
                                        title: "Consent-aware profiles",
                                        body: "Store customers and support contacts are projected into lifecycle profiles on the same IDs, with a guided setup that tells you what still blocks a first signup.",
                                    },
                                    {
                                        title: "Captured revenue",
                                        body: "Marketing is measured in money rather than impressions — captured payments minus refunds, with excluded orders counted and shown.",
                                    },
                                ].map(({ title, body }, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeLeft}
                                        className="flex gap-3 items-start"
                                    >
                                        <CircleCheck className="size-5 text-foreground shrink-0 mt-0.5" />
                                        <p className="text-base text-muted-foreground">
                                            <span className="font-medium text-foreground">
                                                {title}:{" "}
                                            </span>
                                            {body}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Image with AI chat UI overlay */}
                        <motion.div
                            className="relative rounded-2xl overflow-hidden md:w-1/2 h-72 md:h-auto min-h-[300px] shrink-0 bg-linear-to-br from-[#FF4801] via-[#C93500] to-[#16090B]"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeRight}
                        >
                            {/* Soft highlight so the gradient reads as lit, not flat */}
                            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_75%_20%,rgba(255,138,76,0.34),transparent_58%)]" />
                            {/* AI Chat UI mockup card */}
                            <div className="absolute inset-0 flex items-center justify-center px-6">
                                <div className="w-full max-w-md bg-black/35 px-2 py-2.5 sm:p-4 rounded-3xl flex flex-col gap-3">
                                    {/* Action buttons */}
                                    <div className="flex flex-wrap justify-center items-center gap-1">
                                        <Button className="text-xs bg-white/20 border border-gray-200/40 h-auto px-2 xl:px-4 py-1.5 xl:py-2 rounded-full text-white cursor-pointer">
                                            <ImageIcon />
                                            <span>Sync catalog</span>
                                        </Button>
                                        <Button className="text-xs bg-white/20 border border-gray-200/40 h-auto px-2 xl:px-4 py-1.5 xl:py-2 rounded-full text-white cursor-pointer">
                                            <ImagePlay />
                                            <span>Draft campaign</span>
                                        </Button>
                                        <Button className="text-xs bg-white/20 border border-gray-200/40 h-auto px-2 xl:px-4 py-1.5 xl:py-2 rounded-full text-white cursor-pointer">
                                            <Lightbulb />
                                            <span>Segment buyers</span>
                                        </Button>
                                    </div>
                                    {/* Input field */}
                                    <div className="flex items-center gap-0 sm:gap-2 rounded-full border border-white/20 bg-white/10 px-1.5 sm:px-3 py-1.5 sm:py-2 shadow-sm">
                                        <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 hover:bg-muted/10 cursor-pointer">
                                            <Plus className="h-4 w-4 text-white" />
                                        </Button>
                                        <Input
                                            placeholder="Add these 30 SKUs and rewrite the descriptions"
                                            className="border-none bg-transparent! dark:bg-transparent! focus-visible:ring-0 focus-visible:ring-offset-0 text-white p-0 placeholder:text-white"
                                        />
                                        <div className="flex items-center gap-1">
                                            <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 hover:bg-muted/10 cursor-pointer">
                                                <Mic className="h-4 w-4 text-white" />
                                            </Button>
                                            <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 hover:bg-muted/10 cursor-pointer">
                                                <Paperclip className="h-4 w-4 text-white" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
