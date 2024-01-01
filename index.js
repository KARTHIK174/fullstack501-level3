const todoList = () => {
    const all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      if (index >= 0 && index < all.length) {
        all[index].completed = true;
      }
    };
   
    const overdue = () => {
      const currentDate = new Date();
      return all.filter((item) => !item.completed && new Date(item.dueDate) < currentDate);
    };
  
    const dueToday = () => {
      const currentDate = new Date();
      return all.filter(
        (item) => !item.completed && new Date(item.dueDate).toDateString() === currentDate.toDateString()
      );
    };
  
    const dueLater = () => {
      const currentDate = new Date();
      return all.filter((item) => !item.completed && new Date(item.dueDate) > currentDate);
    };
  
    const toDisplayableList = (list) => {
      if (!list || list.length === 0) {
        return []; // or any default value you prefer
      }
  
      return list.map((item) => {
        const displayDate = item.dueDate === formattedDate(new Date()) ? '' : `,${item.dueDate}`;
        return `${item.completed ? '[x]' : '[ ]'}${item.title} ${displayDate}`;
      });

    //   return list.map((item) => {
    //     const displayDate = item.dueDate === formattedDate(new Date()) ? '' : `, ${item.dueDate}`;
    //     const completionMark = item.completed ? '' : 'X';
    //     return `[${completionMark}] ${item.title}${displayDate}`;
    //   });
    };
  
    return {
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  
  
  const todos = todoList();
  const formattedDate = (d) => {
    return d.toISOString().split('T')[0];
  }


  
  todos.add({ title: 'Submit assignment', dueDate: '2023-12-27', completed: false });
  todos.add({ title: 'Pay rent', dueDate: '2023-12-28', completed: true });
  todos.add({ title: 'Service Vehicle', dueDate: '2023-12-28', completed: false });
  todos.add({ title: 'File taxes', dueDate: '2023-12-29', completed: false });
  todos.add({ title: 'Pay electric bill', dueDate: '2023-12-29', completed: false });
  
  const overdueTasks = todos.overdue();
  const formattedOverdues = todos.toDisplayableList(overdueTasks);
  console.log('Overdue Tasks:', formattedOverdues);
  
  const dueTodayTasks = todos.dueToday();
  const formattedDueToday = todos.toDisplayableList(dueTodayTasks);
  console.log('Due Today Tasks:', formattedDueToday);
  
  const dueLaterTasks = todos.dueLater();
  const formattedDueLater = todos.toDisplayableList(dueLaterTasks);
  console.log('Due Later Tasks:', formattedDueLater);
  
  module.exports = todoList;
  