"use client"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CalendarCheck, Check, RotateCw, ShieldCheck } from "lucide-react"
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const featureData = [
    {
        icon: CalendarCheck,
        title: "14-day free trial"
    },
    {
        icon: ShieldCheck,
        title: "No per-store markup"
    },
    {
        icon: RotateCw,
        title: "Cancel anytime"
    },
]

const brandList = [
    { name: "Chat Builder" },
    { name: "Commerce" },
    { name: "Support" },
    { name: "Lifecycle" },
    { name: "Catalog Agent" },
    { name: "Analytics" },
    { name: "White-label" },
    { name: "API Access" },
];

const planDetail = [
    {
        name: "Indie",
        price: 0,
        billing: "mo",
        popular: false,
        features: [
            "1 storefront, full chat builder",
            "Up to 500 orders / month",
            "Catalog agent (100 prompts)",
            "Payments included",
            "Community support"
        ],
        cta: "Start free"
    },
    {
        name: "Studio",
        price: 99,
        billing: "mo",
        discount: "Most popular",
        popular: true,
        features: [
            "Unlimited stores, fully isolated",
            "White-label dashboard",
            "Unlimited catalog agent prompts",
            "Priority email & chat support",
            "Marketplace payouts + subscriptions"
        ],
        cta: "Start free trial"
    }
]

const Pricing = () => {
    const cardVariants = {
        hidden: { opacity: 0, x: -60 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeInOut" as const,
            },
        }),
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 xl:px-16 py-10 md:py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-28">
                    <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-12 max-w-xl lg:max-w-xs xl:max-w-sm justify-between self-stretch"
                    >
                        <div className="flex flex-col gap-4 md:gap-6">
                            <div className="flex flex-col gap-3 md:gap-4">
                                <Badge variant={"outline"} className="py-1 px-3 h-auto text-sm font-normal">Pricing</Badge>
                                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-medium text-foreground">Simple plans, multi-store included</h2>
                            </div>
                            <p className="text-base font-normal text-muted-foreground">Start free with one store. Scale to as many stores as you need — no per-seat fees, no setup costs.</p>
                            <div className="flex flex-col gap-4">
                                {featureData?.map((value, idx) => {
                                    return (
                                        <div key={idx} className="flex items-center gap-3 text-muted-foreground">
                                            <value.icon size={20} />
                                            <p className="text-base font-normal">{value.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <p className="text-base text-muted-foreground font-normal">Everything a growing store needs, in one place</p>
                            <Marquee pauseOnHover className="[--duration:24s] p-0 py-4">
                                {brandList.map((brand, index) => (
                                    <div key={index} className="flex items-center px-8">
                                        <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-muted-foreground">
                                            {brand.name}
                                        </span>
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </motion.div>
                    <div className="flex flex-col sm:flex-row items-end gap-6 w-full">
                        {planDetail?.map((value, idx) => {
                            return (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={idx + 1}
                                    className={`w-full ${value?.popular ? "p-1 bg-[linear-gradient(180deg,#FF4801_0%,#FF6B2C_50.48%,#FFB08A_100%)] rounded-3xl" : ""} `}
                                >
                                    {value?.popular && <p className="text-sm font-medium text-white p-1.5 text-center">Most Popular</p>}
                                    <Card className="py-8 gap-0 rounded-[20px]">
                                        <CardHeader className="px-6 gap-6">
                                            <div className="flex items-center justify-between">
                                                <p className="text-2xl font-medium text-foreground">{value?.name}</p>
                                                {value?.popular && <Badge className="h-auto text-sm font-medium bg-primary/10 text-primary">{value?.discount}</Badge>}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-5xl font-medium">${value?.price}
                                                    <span className="text-xl font-normal text-muted-foreground ml-2">/{value?.billing}</span>
                                                </p>
                                                <p className="text-base font-normal text-muted-foreground">
                                                    <span className="text-foreground">Try free</span> for 14 days</p>
                                            </div>
                                        </CardHeader>
                                        <div className="h-px w-full bg-border my-6" />
                                        <CardContent className="px-6 flex flex-col gap-6">
                                            <div className="flex flex-col gap-4">
                                                <p className="text-base font-normal text-muted-foreground">What&rsquo;s included</p>
                                                <ul className="flex flex-col gap-4">
                                                    {value?.features?.map((feature, idx) => {
                                                        return (
                                                            <li key={idx} className="flex items-center gap-3 text-foreground">
                                                                <Check size={16} />
                                                                <p className="text-base font-normal">{feature}</p>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                            <Button variant={value.popular ? "default" : "outline"}
                                                className={cn('w-full h-auto py-3.5 flex items-center gap-2 rounded-full cursor-pointer group', value.popular ? "hover:bg-primary/80" : "")}>
                                                {value.cta}
                                                <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing