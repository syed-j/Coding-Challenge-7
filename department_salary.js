// Step 1: Initialize company structure with departments and employees
const company = {
    Sales: {
        departmentName: 'Sales',
        employees: [
            {
                name: 'Alice', 
                salary: 80000, 
                subordinates: [ 
                    {
                        name: 'Bob', // Bob reports to Alice
                        salary: 50000,
                        subordinates: [] // Bob has no subordinates
                    },
                    {
                        name: 'Charlie', // Charlie reports to Alice
                        salary: 45000,
                        subordinates: [] // Charlie has no subordinates
                    }
                ]
            },
            {
                name: 'David', // Another employee in Sales
                salary: 70000,
                subordinates: [] // David has no subordinates
            }
        ]
    },
    // Department 2: Engineering
    Engineering: {
        departmentName: 'Engineering',
        employees: [
            {
                name: 'Eve',
                salary: 90000,
                subordinates: [
                    {
                        name: 'Frank',
                        salary: 55000,
                        subordinates: [] // Frank has no subordinates
                    }
                ]
            },
            {
                name: 'Grace',
                salary: 75000,
                subordinates: [] // Grace has no subordinates
            }
        ]
    }
};
