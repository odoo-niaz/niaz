export const withBasePath = (path) => {
    const base = process.env.NODE_ENV === 'production' ? '/umer' : '';
    return `${base}${path}`;
};
