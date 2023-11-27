export const isValidString = (value: string): boolean => {
    return typeof value === 'string' && value.trim().length > 0;
};

export const isValidNumber = (value: number): boolean => {
    return typeof value === 'number' && !isNaN(value);
};

export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
    const regex = /^(\+\d{1,3})?\d{10}$/;
    return regex.test(phone);
};

export const isPositiveNumber = (value: number): boolean => {
    return isValidNumber(value) && value > 0;
};

export const isValidId = (id: string): boolean => {
    // Vous pouvez adapter cette regex pour correspondre au format d'ID que vous utilisez.
    const regex = /^[a-zA-Z0-9-_]+$/;
    return regex.test(id);
};

// Ajoutez ici d'autres fonctions de validation spécifiques à votre domaine
