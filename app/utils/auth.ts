// Mock user login data
const users = [
    { id: 1, email: 'client@example.com', password: 'client123' },
    { id: 2, email: 'spa@example.com', password: 'spa123' },
  ];
  
  export const authenticate = (email: string, password: string): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        resolve(user.id);
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  };
  