"use client";

import { useRef } from 'react';

// Components
import { DynamicInvoiceTemplate, Subheading } from "@/app/components";
import FullscreenButton from './FullscreenButton';

// Types
import { InvoiceType } from "@/types";

type LivePreviewProps = {
    data: InvoiceType;
};

export default function LivePreview({ data }: LivePreviewProps) {
    const previewRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Subheading>Live Preview:</Subheading>
            <div className="relative border dark:border-gray-600 rounded-xl my-1" ref={previewRef}>
                <FullscreenButton targetRef={previewRef} />
                <div className="fullscreen-container">
                    <DynamicInvoiceTemplate {...data} />
                </div>
            </div>
        </>
    );
}
