/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */

type User = {
  type: 'EMPLOYEE' | 'CONTRACTOR';
};

type Result = {
  employees: User[];
  contractors: User[];
};

module.exports.groupUsers = function (users: Array<User>): Record<'employees' | 'contractors', Array<User>> {
  let finalArr: Result = {
    employees: [],
    contractors: [],
  };

  for (let i = 0; i < users.length; i++) {
    if (users[i]?.type === 'CONTRACTOR') {
      finalArr.contractors.push(users[i]!);
    } else if (users[i]?.type === 'EMPLOYEE') {
      finalArr.employees.push(users[i]!);
    }
  }

  return finalArr;
};
