export const hoursAgo = (date: string) => {
    const updatedAt = new Date(date);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - updatedAt.getTime();
    return Math.floor(timeDifference / (1000 * 60 * 60));
}