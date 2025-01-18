const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Complete Sales Report",
        taskDescription: "Prepare the monthly sales report for October.",
        taskDate: "2025-01-15",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client Meeting",
        taskDescription: "Attend the quarterly meeting with client XYZ.",
        taskDate: "2025-01-16",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Team Training",
        taskDescription: "Conduct training for the new team members.",
        taskDate: "2025-01-18",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Isha",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update CRM",
        taskDescription: "Ensure all client details are updated in the CRM system.",
        taskDate: "2025-01-15",
        category: "CRM",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare slides for the upcoming marketing strategy meeting.",
        taskDate: "2025-01-17",
        category: "Presentations",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Inventory Check",
        taskDescription: "Verify stock levels for the main warehouse.",
        taskDate: "2025-01-19",
        category: "Inventory",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  
  },
  {
    id: 3,
    firstName: "Karan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Code Review",
        taskDescription: "Review the latest code submissions from the development team.",
        taskDate: "2025-01-15",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "System Audit",
        taskDescription: "Perform a security audit of the internal systems.",
        taskDate: "2025-01-18",
        category: "Audit",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Vendor Follow-Up",
        taskDescription: "Follow up with vendors regarding pending invoices.",
        taskDate: "2025-01-15",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Social Media Updates",
        taskDescription: "Update the company’s social media pages with new posts.",
        taskDate: "2025-01-17",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client Survey Analysis",
        taskDescription: "Analyze the results of the recent client satisfaction survey.",
        taskDate: "2025-01-19",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Raj",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Policy Update",
        taskDescription: "Review and update the company’s HR policies.",
        taskDate: "2025-01-14",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Budget Planning",
        taskDescription: "Plan the budget for Q1 2025.",
        taskDate: "2025-01-20",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Website Updates",
        taskDescription: "Implement updates to the company website.",
        taskDate: "2025-01-21",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];



export  const setLocalStorage=()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage=()=>{
const employees=JSON.parse(localStorage.getItem('employees'))
const admin=JSON.parse(localStorage.getItem('admin'))

return {employees,admin}


}