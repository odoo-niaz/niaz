export const withBasePath = (path) => {
    const base = process.env.NODE_ENV === 'production' ? '/niaz' : '';
    return `${base}${path}`;
};
