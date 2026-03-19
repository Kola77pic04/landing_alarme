"use client";

import { useEffect, useState } from "react";
import { getPolicy } from "../components/assets/policy.html";
import AppFooter from "../components/AppFooter";

export default function Confidentialite() {
    const [origin, setOrigin] = useState<string | null>(null);

    useEffect(() => {
        setOrigin(window.location.origin);
    }, []);

    if (!origin) return null; // ⛔ évite le mismatch

    return (
        <div className="mb-16 lg:mb-6">
            <div
                className="selectable prose prose-lg m-auto w-full max-w-[1080px] p-[40px] opacity-80 md:p-[80px]"
                dangerouslySetInnerHTML={{ __html: getPolicy(origin) }}
            />
            <AppFooter />
        </div>
    );
}