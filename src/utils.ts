
export const rand0 = (upper: number) => Math.floor(Math.random() * upper);


export const wrap = (max: number, x: number) => {
    const chars = x.toString().split('');
    const last = chars.pop() || '0';
    return parseInt(last, 10);
}

export const parseAmountInput = (max: number, e: any) => {
    const val = parseInt(e.currentTarget.value, 10) || 0;
    return val > max ? wrap(max, val) : val;
}