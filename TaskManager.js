document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('task-form');
    var input = document.getElementById('task-input');
    var tasks = document.getElementById('tasks');
    var allBtn = document.getElementById('all-btn');
    var pendingBtn = document.getElementById('pending-btn');
    var completedBtn = document.getElementById('completed-btn');
    let status = 'all';

    var initialTasks = [
        {
          "id": 1,
          "name": "Wake Up at 6AM"
        },
        {
          "id": 2,
          "name": "Go To The Gym"
        },
        {
          "id": 3,
          "name": "Eat Healthy Breakfast"
        },
      ];
    
      //add a task
      function addTask(taskText) {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
          li.classList.toggle('completed', checkbox.checked);
          if(status == 'all'){
            showAllTasks()

          }else if(status == 'pending'){
            showPendingTasks()

          }else if(status == 'completed') {
            showCompletedTasks()
          }
        
        });
        var taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
          li.remove();
        });
    
        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        li.appendChild(deleteButton);
        tasks.appendChild(li);
      }
    
      //displaying initial tasks
      function displayInitialTasks() {
        initialTasks.forEach(function(task) {
          addTask(task.name);
        });
      }
      // Display initial tasks by default
      displayInitialTasks();
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var taskText = input.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        input.value = '';
      }
    });
  

    allBtn.addEventListener('click', function() {
      allBtn.classList.add('active');
      pendingBtn.classList.remove('active');
      completedBtn.classList.remove('active');
      status = 'all';
      showAllTasks();
    });
  
    pendingBtn.addEventListener('click', function() {
      allBtn.classList.remove('active');
      pendingBtn.classList.add('active');
      completedBtn.classList.remove('active');
      status = 'pending';
      showPendingTasks();
    });
  
    completedBtn.addEventListener('click', function() {
      allBtn.classList.remove('active');
      pendingBtn.classList.remove('active');
      completedBtn.classList.add('active');
      status = 'completed';
      showCompletedTasks();
    });
  
    function showAllTasks() {
      Array.from(tasks.children).forEach(function(task) {
        task.style.display = 'flex';
      });
    }
  
    function showPendingTasks() {
      Array.from(tasks.children).forEach(function(task) {
        var checkbox = task.querySelector('input[type="checkbox"]');
        if (!checkbox.checked) {
          task.style.display = 'flex';
        } else {
          task.style.display = 'none';
        }
      });
    }
  
    function showCompletedTasks() {
      Array.from(tasks.children).forEach(function(task) {
        var checkbox = task.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
          task.style.display = 'flex';
        } else {
          task.style.display = 'none';
        }
      });
    }
  });
  
  