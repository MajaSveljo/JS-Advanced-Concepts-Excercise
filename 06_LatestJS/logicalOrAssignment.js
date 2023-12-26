const todo = { priority: "LOW", task: "Finish Editing Course" };

// Is priority falsy?  If so, set it to  "MEDIUM"
todo.priority ||= "MEDIUM";

// Logically equivalent to:
// todo.priority || (todo.priority = "MEDIUM");
