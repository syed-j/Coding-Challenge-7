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

// Step 2: Create recursive function to calculate department salary
function calculateDepartmentSalary(department) {
    let totalSalary = 0;
    
    // Loop through each employee in the department
    department.employees.forEach(employee => {
        // Add the current employee's salary to totalSalary
        totalSalary += employee.salary;

        // If the employee has subordinates, recursively add their salaries too
        if (employee.subordinates.length > 0) {
            employee.subordinates.forEach(subordinate => {
                // Recursively call the function for each subordinate
                totalSalary += calculateEmployeeSalary(subordinate);
            });
        }
    });

    return totalSalary;
}

