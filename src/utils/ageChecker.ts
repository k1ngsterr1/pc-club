import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const checkAgeAndTime = async (iin: string): Promise<boolean> => {
    try {
        const birthDateString = iin.slice(0, 6);
        const centuryCode = parseInt(iin[6], 10);
        const century = centuryCode < 3 ? 18 : centuryCode < 5 ? 19 : 20;
        const birthDate = dayjs(`${century}${birthDateString}`, "YYYYMMDD");

        const now = dayjs().tz(dayjs.tz.guess());

        const currentTime = parseInt(now.format("HH"), 10);
        if (currentTime >= 22) {
            return false;
        }

        const age = now.diff(birthDate, "year");
        return age >= 18;
    } catch (error) {
        console.error("Ошибка проверки возраста или времени:", error);
        return false;
    }
};

export const isValidIIN = (iin: string): boolean => {
    return /^\d{12}$/.test(iin);
};
