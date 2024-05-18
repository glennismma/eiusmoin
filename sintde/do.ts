type User = {
  id: number;
  name: string;
  email: string;
};

function processUsers<T extends User>(users: T[]): void {
  users.forEach(user => {
    console.log(`Processing user: ${user.name}`);
    // ...additional logic to process users...
  });
}

// Example usage:
const usersArray: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

processUsers(usersArray);
