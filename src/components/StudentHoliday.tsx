import { PortalLayout } from "./PortalLayout";
import { HolidayCalendar } from "./HolidayCalendar";
import { motion } from "motion/react";

export function StudentHoliday() {
  return (
    <PortalLayout role="student" pageTitle="Holiday Calendar">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <HolidayCalendar variant="student" />
      </motion.div>
    </PortalLayout>
  );
}