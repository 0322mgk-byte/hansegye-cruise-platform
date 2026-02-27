"use client";

import { Timeline } from "./Timeline";
import type { ScheduleData } from "@/data/types";

interface ScheduleProps {
    data: ScheduleData;
}

export default function Schedule({ data }: ScheduleProps) {
    return (
        <>
            {/* Section 6 */}
            <section id="schedule">
                <Timeline data={data} />
            </section>
        </>
    );
}
