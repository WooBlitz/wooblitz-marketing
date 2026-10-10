"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import { Clock, CloudUpload, DollarSign, FileText, Shield, X } from "lucide-react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const features = [
    { icon: Clock, title: "48h Onboarding", description: "From signup to first paid order" },
    { icon: DollarSign, title: "Founding-Store Pricing", description: "Locked in for the first 100 stores" },
    { icon: Shield, title: "Cancel Anytime", description: "No contracts, no setup fees" },
];

const serviceOptions = ["Storefront", "Catalog", "Payments", "Agents"];
const budgetOptions = ["Just me", "1-10 stores", "10-100 stores", "100+ stores"];

const UPLOAD_RING_RADIUS = 18;
const UPLOAD_RING_CIRCUMFERENCE = 2 * Math.PI * UPLOAD_RING_RADIUS;

const Contact = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    const [service, setService] = useState(serviceOptions[0]);
    const [budget, setBudget] = useState(budgetOptions[0]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        return () => {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, []);

    const clearUploadState = () => {
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
        }
    };

    const handleFile = (selected: File | undefined) => {
        if (!selected) return;
        clearUploadState();
        setFile(selected);
        setIsUploading(true);
        setUploadProgress(0);

        progressIntervalRef.current = setInterval(() => {
            setUploadProgress((prev) => {
                const next = Math.min(prev + Math.random() * 20 + 10, 100);
                if (next >= 100) {
                    clearUploadState();
                    setIsUploading(false);
                }
                return next;
            });
        }, 150);
    };

    const handleRemoveFile = () => {
        clearUploadState();
        setFile(null);
        setIsUploading(false);
        setUploadProgress(0);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            toast.error("Please fill in all the fields.", { position: "top-center" });
            return;
        }

        // There is no backend behind this form, so the request is handed to the
        // visitor's mail client rather than pretending it was posted to a server.
        const subject = `Closed beta access — ${formData.name}`;
        const body = [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            "",
            `What they need: ${service}`,
            `Store footprint: ${budget}`,
            "",
            "About their store:",
            formData.message,
            "",
            file ? `Brand kit attached separately: ${file.name}` : "",
        ]
            .filter(Boolean)
            .join("\n");

        window.location.href = `mailto:hello@wooblitz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        toast.success("Opening your email app — send it and we'll reply within 48 hours.", {
            position: "top-center",
        });
        setFormData({ name: "", email: "", message: "" });
        handleRemoveFile();
    };

    return (
        <section
            ref={containerRef}
            className="dark relative overflow-hidden min-h-screen"
        >
            <div aria-hidden="true" className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 size-full object-cover"
                >
                    <source
                        src="/screenshots/lifecycle.png"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-linear-to-b from-background/25 to-background " />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
                <div className="border-x border-white/20 sm:py-10 py-6" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
                <div className="flex flex-col overflow-hidden border border-white/20 lg:flex-row">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut" as const }}
                        className="flex flex-1 flex-col justify-between gap-10 border-b border-white/20 p-6 md:p-10 lg:p-12 lg:border-b-0 lg:border-r"
                    >
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h2 className="max-w-125 text-4xl font-medium leading-tight text-white md:text-5xl">
                                    Join the closed beta
                                </h2>
                                <p className="max-w-125 text-lg font-normal leading-relaxed text-white/50">
                                    Tell us about your store and a founder will onboard you within 48 hours.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                {features.map(({ icon: Icon, title, description }) => (
                                    <div key={title} className="flex items-center gap-4">
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/10">
                                            <Icon className="size-6 text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-base font-medium text-white">{title}</p>
                                            <p className="text-sm text-muted-foreground">{description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:hello@wooblitz.com"
                                className="w-fit text-base font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-70"
                            >
                                hello@wooblitz.com
                            </a>
                            <p className="max-w-58 text-base font-normal leading-relaxed text-white/50">
                                Want to talk it through before you sign up?
                            </p>
                            <Button className="h-8 w-fit rounded-lg bg-foreground px-3 text-background hover:bg-foreground/80">
                                Book an onboarding call
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
                        className="w-full shrink-0 bg-background p-6 md:p-10 lg:p-12 lg:w-141"
                    >
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-2xl font-semibold text-white">Request beta access</h3>
                                <p className="text-sm text-muted-foreground">
                                    A founder will personally onboard your first store.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-3">
                                        <Label className="text-sm font-normal text-muted-foreground">
                                            I need
                                        </Label>
                                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                                            {serviceOptions.map((option) => (
                                                <Button
                                                    key={option}
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => setService(option)}
                                                    className={cn(
                                                        "h-8 rounded-lg px-3 text-sm font-medium shadow-xs",
                                                        service === option
                                                            ? "border-transparent text-background bg-foreground!"
                                                            : "text-foreground"
                                                    )}
                                                >
                                                    {option}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <Label className="text-sm font-normal text-muted-foreground">
                                            Storefront footprint
                                        </Label>
                                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                                            {budgetOptions.map((option) => (
                                                <Button
                                                    key={option}
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => setBudget(option)}
                                                    className={cn(
                                                        "h-8 rounded-lg px-3 text-sm font-medium shadow-xs",
                                                        budget === option
                                                            ? "border-transparent text-background bg-foreground!"
                                                            : "text-foreground"
                                                    )}
                                                >
                                                    {option}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div className="flex flex-col gap-1.5">
                                            <Label
                                                htmlFor="full-name"
                                                className="text-sm font-normal text-muted-foreground"
                                            >
                                                Full Name
                                            </Label>
                                            <Input
                                                id="full-name"
                                                type="text"
                                                placeholder="John Doe"
                                                className="h-9 rounded-lg text-foreground bg-transparent!"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <Label htmlFor="email" className="text-sm font-normal text-muted-foreground">
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="example@company.com"
                                                className="h-9 rounded-lg text-foreground bg-transparent!"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <Label
                                            htmlFor="project-details"
                                            className="text-sm font-normal text-muted-foreground"
                                        >
                                            About your store
                                        </Label>
                                        <Textarea
                                            id="project-details"
                                            placeholder="What are you selling, who is it for, and what does your dream storefront look like?"
                                            className="h-20 resize-none rounded-lg text-foreground bg-transparent!"
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <Label className="text-sm font-normal text-muted-foreground">
                                            Attach brand kit (Optional)
                                        </Label>
                                        <div
                                            role="button"
                                            tabIndex={0}
                                            onClick={() => fileInputRef.current?.click()}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" || e.key === " ") {
                                                    e.preventDefault();
                                                    fileInputRef.current?.click();
                                                }
                                            }}
                                            onDragOver={(e) => {
                                                e.preventDefault();
                                                setIsDragging(true);
                                            }}
                                            onDragLeave={() => setIsDragging(false)}
                                            onDrop={(e) => {
                                                e.preventDefault();
                                                setIsDragging(false);
                                                handleFile(e.dataTransfer.files[0]);
                                            }}
                                            className={cn(
                                                "flex min-h-48 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border border-dashed bg-background p-6 transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                                                file
                                                    ? "border-border"
                                                    : cn(
                                                        "border-white/15",
                                                        isDragging && "border-ring bg-white/5"
                                                    )
                                            )}
                                        >
                                            {file && !isUploading ? (
                                                <>
                                                    <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                                                        <FileText className="size-4 text-muted-foreground" />
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1 text-center">
                                                        <p className="max-w-56 truncate text-sm font-medium text-foreground">
                                                            {file.name}
                                                        </p>
                                                        <p className="text-xs text-muted-foreground">
                                                            {(file.size / 1024 / 1024).toFixed(2)} MB
                                                        </p>
                                                    </div>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        className="h-8 rounded-lg px-3 text-foreground"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleRemoveFile();
                                                        }}
                                                    >
                                                        <X className="size-3.5" />
                                                        Remove file
                                                    </Button>
                                                </>
                                            ) : file && isUploading ? (
                                                <>
                                                    <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full">
                                                        <svg
                                                            viewBox="0 0 40 40"
                                                            className="absolute inset-0 size-10 -rotate-90"
                                                        >
                                                            <circle
                                                                cx="20"
                                                                cy="20"
                                                                r={UPLOAD_RING_RADIUS}
                                                                fill="none"
                                                                strokeWidth="2"
                                                                className="stroke-white/15"
                                                            />
                                                            <circle
                                                                cx="20"
                                                                cy="20"
                                                                r={UPLOAD_RING_RADIUS}
                                                                fill="none"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeDasharray={UPLOAD_RING_CIRCUMFERENCE}
                                                                strokeDashoffset={
                                                                    UPLOAD_RING_CIRCUMFERENCE *
                                                                    (1 - uploadProgress / 100)
                                                                }
                                                                className="stroke-white transition-[stroke-dashoffset] duration-150 ease-out"
                                                            />
                                                        </svg>
                                                        <CloudUpload className="size-4 text-white" />
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1 text-center">
                                                        <p className="max-w-56 truncate text-sm font-medium text-muted-foreground">
                                                            {file.name}
                                                        </p>
                                                        <p className="text-xs text-muted-foreground">
                                                            Uploading… {Math.round(uploadProgress)}%
                                                        </p>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="flex size-10 items-center justify-center rounded-full border border-dashed border-white/25">
                                                        <CloudUpload className="size-4 text-white" />
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1 text-center">
                                                        <p className="text-sm font-medium text-muted-foreground">
                                                            Choose a file or drag &amp; drop it here
                                                        </p>
                                                        <p className="text-xs text-muted-foreground">
                                                            JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
                                                        </p>
                                                    </div>
                                                    <Button type="button" variant="outline" className="h-8 rounded-lg text-foreground px-3">
                                                        Browse File
                                                    </Button>
                                                </>
                                            )}
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => handleFile(e.target.files?.[0])}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="h-11 w-full rounded-lg bg-foreground text-background hover:bg-foreground/80"
                                >
                                    Join the beta
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
                <div className="border-x border-white/20 sm:py-10 py-6" />
            </div>
        </section>
    );
};

export default Contact;