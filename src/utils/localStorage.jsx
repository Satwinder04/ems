const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Complete Project A",
          taskDescription: "Finish the frontend development for Project A.",
          taskDate: "2024-11-01",
          category: "Development"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Attend Meeting",
          taskDescription: "Participate in the client meeting for Project B.",
          taskDate: "2024-11-02",
          category: "Meeting"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Submit Report",
          taskDescription: "Submit the quarterly progress report.",
          taskDate: "2024-10-30",
          category: "Reporting"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Fix Bugs",
          taskDescription: "Resolve the bugs reported in the QA testing phase.",
          taskDate: "2024-11-03",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Database Update",
          taskDescription: "Update the database with the latest client information.",
          taskDate: "2024-10-28",
          category: "Database"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Team Training",
          taskDescription: "Conduct training for new team members.",
          taskDate: "2024-10-25",
          category: "Training"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Write Documentation",
          taskDescription: "Complete the technical documentation for Project C.",
          taskDate: "2024-11-04",
          category: "Documentation"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Client Follow-up",
          taskDescription: "Follow up with the client regarding feedback on the initial prototype.",
          taskDate: "2024-11-05",
          category: "Client Interaction"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Team Briefing",
          taskDescription: "Prepare a briefing for the weekly team meeting.",
          taskDate: "2024-10-29",
          category: "Meeting"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Design Review",
          taskDescription: "Review the UI design for the new mobile app.",
          taskDate: "2024-11-06",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Bug Fixes",
          taskDescription: "Complete the list of urgent bug fixes.",
          taskDate: "2024-10-31",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Prepare Presentation",
          taskDescription: "Create a presentation for the client on the recent progress.",
          taskDate: "2024-11-07",
          category: "Client Interaction"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Security Audit",
          taskDescription: "Perform a security audit on the company's internal systems.",
          taskDate: "2024-11-08",
          category: "Security"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Implement Feature X",
          taskDescription: "Integrate Feature X into the current project.",
          taskDate: "2024-10-27",
          category: "Development"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Deploy Update",
          taskDescription: "Deploy the latest system update to production.",
          taskDate: "2024-11-09",
          category: "Deployment"
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
     const employees = JSON.parse(localStorage.getItem('employees'))
     const admin = JSON.parse(localStorage.getItem('admin'))

     console.log(employees,admin)
     
  }