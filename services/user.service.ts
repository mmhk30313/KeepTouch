export const createUser = (user: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 1000);
    });
}