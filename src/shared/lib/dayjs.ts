import dayjs from "dayjs";

export function parseDate(date: string): string {
    return dayjs(date).format("YYYY-MM-DD");
}
