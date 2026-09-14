
export const formatPrice = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};

export const calculateOldPrice = (price: number, multiplier = 1.05): string => {
    return formatPrice(price * multiplier);
};

export const calculateInstallments = (price: number, installmentsCount = 2): string => {
    const installmentValue = price / installmentsCount;
    return `ou ${installmentsCount}x de ${formatPrice(installmentValue)} sem juros`;
};

export const formatTwoDigits = (value: number): string => {
    return String(value).padStart(2, '0');
};