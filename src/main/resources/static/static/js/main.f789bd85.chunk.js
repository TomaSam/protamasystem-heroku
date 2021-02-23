(this["webpackJsonpprotama-app"]=this["webpackJsonpprotama-app"]||[]).push([[0],{20:function(e,t,a){},42:function(e,t,a){e.exports=a(71)},47:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(23),o=a.n(s),c=(a(47),a(4)),l=a(5),i=a(7),u=a(6),m=a(22),p=a(21),d=(a(20),a(9)),h=a.n(d),k="https://project-task-system.herokuapp.com",f=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"getProjects",value:function(){return h.a.get(k+"/api/projects")}},{key:"getProject",value:function(e){return h.a.get(k+"/api/projects/".concat(e))}},{key:"deleteProject",value:function(e){return h.a.delete(k+"/api/projects/".concat(e))}},{key:"updateProject",value:function(e,t){return h.a.put(k+"/api/projects/".concat(e),t)}},{key:"createProject",value:function(e){return h.a.post(k+"/api/projects",e)}},{key:"updateProjectCompleted",value:function(e){return h.a.patch(k+"/api/projects/".concat(e,"/completed"))}},{key:"getTasksByProjectId",value:function(e){return h.a.get(k+"/api/projects/".concat(e,"/tasks"))}},{key:"getTasks",value:function(){return h.a.get(k+"/api/projects/tasks")}},{key:"getTaskByTaskId",value:function(e){return h.a.get(k+"/api/projects/tasks/".concat(e))}},{key:"getTasksInProgress",value:function(){return h.a.get(k+"/api/projects/tasks/inprogress")}},{key:"getTasksTodo",value:function(){return h.a.get(k+"/api/projects/tasks/todo")}},{key:"getTasksDone",value:function(){return h.a.get(k+"/api/projects/tasks/done")}},{key:"addTask",value:function(e,t){return h.a.post(k+"/api/projects/".concat(e,"/tasks"),t)}},{key:"deleteTask",value:function(e){return h.a.delete(k+"/api/projects/tasks/".concat(e))}},{key:"updateTask",value:function(e,t){return h.a.put(k+"/api/projects/tasks/".concat(e),t)}},{key:"updateTaskInprogress",value:function(e){return h.a.patch(k+"/api/projects/tasks/".concat(e,"/inprogress"))}},{key:"updateTaskDone",value:function(e){return h.a.patch(k+"/api/projects/tasks/".concat(e,"/done"))}},{key:"updateTaskTodo",value:function(e){return h.a.patch(k+"/api/projects/tasks/".concat(e,"/todo"))}},{key:"searchProject",value:function(e){return h.a.get(k+"/api/projects/searchproject?search=".concat(e))}},{key:"searchTask",value:function(e){return h.a.get(k+"/api/projects/searchtask?search=".concat(e))}},{key:"exportProjects",value:function(){return h.a.get(k+"/api/projects/exportProjects")}},{key:"exportTasks",value:function(e){return h.a.get(k+"/api/projects/exportTasks/".concat(e))}}]),e}()),E=a(12),b=a(15),g=a(14),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).inputChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.submitForm=function(e){e.preventDefault(),f.searchProject(n.state.searchProject).then((function(e){var t=e.data;console.log(t),n.setState({results:t}),console.log(t),n.props.search(t)}))},n.refreshTasks=function(){window.location.reload(!1)},n.state={searchProject:"",results:[]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitForm,className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{name:"searchProject",className:"form-control mr-sm-2",type:"search",placeholder:"Search for...","aria-label":"Search",onChange:this.inputChange}),r.a.createElement("button",{className:"btn button-color-info my-2 my-sm-0 float-right",type:"reset",onClick:function(){return e.refreshTasks(e.state.projects)}},"Back to List")))}}]),a}(n.Component),j=a(0),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeBtnColor=function(e){return"INPROGRESS"===e?"badge badge-danger":"COMPLETED"===e?"badge badge-success":"badge badge-warning"},n.createProject=function(){n.props.history.push("/api/projects/new")},n.generalTasks=function(e){return n.state.tasks.filter((function(t){return t.project.projectId===e})).length},n.inprogressTasks=function(e){return n.state.tasks.filter((function(t){return t.project.projectId===e})).filter((function(e){return"INPROGRESS"===e.taskState})).length},n.doneTasks=function(e){return n.state.tasks.filter((function(t){return t.project.projectId===e})).filter((function(e){return"DONE"===e.taskState})).length},n.search=function(e){console.log(e);var t=e.sort((function(e,t){return t.projectId-e.projectId}));console.log(t),n.setState({sortedprojects:t})},n.state={sortedprojects:[],tasks:[],message:null},n.getProjects=n.getProjects.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getProjects(),f.getTasks().then((function(t){var a=t.data;console.log(a),e.setState({tasks:a})}))}},{key:"getProjects",value:function(){var e=this;f.getProjects().then((function(t){console.log(t);var a=t.data.sort((function(e,t){return t.projectId-e.projectId}));console.log(a),e.setState({sortedprojects:a})}))}},{key:"exportProjects",value:function(){f.exportProjects().then((function(e){console.log(e);var t=window.URL.createObjectURL(new Blob([e.data]));console.log(t);var a=document.createElement("a");console.log(a),a.href=t,a.target="_blank",a.download="Projects.csv",document.body.appendChild(a),a.click()}))}},{key:"deleteProject",value:function(e){var t=this;f.deleteProject(e).then((function(e){t.getProjects()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content-container"},r.a.createElement("h3",{className:"text-center header mt-3 mb-3"},"List of Projects"),r.a.createElement("div",{className:"icon-display"},r.a.createElement("div",null,r.a.createElement(E.d,{onClick:function(){return e.createProject()},title:"Create new project",className:"icon-class-1"})),r.a.createElement("div",null,r.a.createElement(E.c,{onClick:function(){return e.exportProjects()},title:"Export projects",className:"icon-class-1"}))),r.a.createElement("div",{className:"float-right"},r.a.createElement(v,{search:this.search})),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-primary"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Title"),r.a.createElement("th",{scope:"col"},"Status"),r.a.createElement("th",{scope:"col"},"Progress"),r.a.createElement("th",{scope:"col"},"View"),r.a.createElement("th",{scope:"col"},"Edit"),r.a.createElement("th",{scope:"col"},"Delete"))),r.a.createElement("tbody",null,this.state.sortedprojects.map((function(t,a){return r.a.createElement("tr",{key:t.projectId},r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,t.projectTitle),r.a.createElement("td",null,r.a.createElement("span",{className:e.changeBtnColor(t.projectStatus)},t.projectStatus)),r.a.createElement("td",null,e.generalTasks(t.projectId),"/",e.inprogressTasks(t.projectId),"/",e.doneTasks(t.projectId)),r.a.createElement("td",null,r.a.createElement(b.b,{to:"/api/projects/".concat(t.projectId)},r.a.createElement(j.b.Provider,{value:{className:"icon-class"}},r.a.createElement("div",null,r.a.createElement(E.b,null))))),r.a.createElement("td",null,r.a.createElement(b.b,{to:"/api/projects/update/".concat(t.projectId)},r.a.createElement(j.b.Provider,{value:{className:"icon-class"}},r.a.createElement("div",null,r.a.createElement(E.a,null))))),r.a.createElement("td",null,r.a.createElement(j.b.Provider,{value:{className:"icon-class"}},r.a.createElement("div",null,r.a.createElement(E.e,{onClick:function(){return e.deleteProject(t.projectId)}})))))})))))}}]),a}(n.Component);var y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).inputChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.submitForm=function(e){e.preventDefault();var t=n.state,a=function(e,t,a){var n=[];return 0===e.length&&n.push("Fill out the Project title"),e.length>0&&e.length<5&&n.push("Length of Project title should be from 5 to 100 characters."),e.length>100&&n.push("Length of Project title should be less than 100 characters."),0===t.length&&n.push("Fill out the Project description"),t.length>500&&n.push("Project description length should be less than 500 characters"),n}(t.projectTitle,t.projectDescription);if(a.length>0)n.setState({errors:a});else{var r={projectTitle:n.state.projectTitle,projectDescription:n.state.projectDescription,projectStatus:n.state.projectStatus};f.createProject(r).then((function(e){n.props.history.push("/api/projects")}))}},n.state={projectTitle:"",projectDescription:"",projectStatus:"NEW",errors:[]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"content-container"},r.a.createElement("h3",{className:"text-center header"},"Create new Project"),r.a.createElement("form",{onSubmit:this.submitForm},e.map((function(e){return r.a.createElement("p",{className:"error-css",key:e},"Error: ",e)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"projectTitle"},"Project Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:this.state.projectTitle,name:"projectTitle",onChange:this.inputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"projectDescription"},"Project Description"),r.a.createElement("textarea",{className:"form-control",id:"description",rows:"5",value:this.state.projectDescription,name:"projectDescription",onChange:this.inputChange})),r.a.createElement("button",{type:"submit",className:"btn button-color-info"},"Submit")))}}]),a}(n.Component),N=a(25),S=a.n(N),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={options:{labels:["New","InProgress","Completed"]},series:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getProjects()}},{key:"getProjects",value:function(){var e=this;f.getProjects().then((function(t){console.log(t);var a=t.data,n=a.filter((function(e){return"NEW"===e.projectStatus})).length,r=a.filter((function(e){return"INPROGRESS"===e.projectStatus})).length,s=a.filter((function(e){return"COMPLETED"===e.projectStatus})).length;e.setState({series:e.state.series.concat(n,r,s)})}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"chart"},r.a.createElement("h4",null,"Projects Statistics"),r.a.createElement(S.a,{options:this.state.options,series:this.state.series,type:"donut",width:"400"}))}}]),a}(n.Component),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={options:{labels:["Todo","InProgress","Done"]},series:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getTasks()}},{key:"getTasks",value:function(){var e=this;f.getTasks().then((function(t){console.log(t);var a=t.data,n=a.filter((function(e){return"TODO"===e.taskState})).length,r=a.filter((function(e){return"INPROGRESS"===e.taskState})).length,s=a.filter((function(e){return"DONE"===e.taskState})).length;e.setState({series:e.state.series.concat(n,r,s)})}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"chart"},r.a.createElement("h4",null,"Tasks Statistics"),r.a.createElement(S.a,{options:this.state.options,series:this.state.series,type:"donut",width:"400"}))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Project Task Management System"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("div",{className:"chart-display"},r.a.createElement(O,null),r.a.createElement(P,null))))}}]),a}(n.Component);var D=function(e){return r.a.createElement("nav",{className:"sidebar-container",style:{backgroundColor:"#D3E3FC",color:"#374785"}},r.a.createElement("p",{className:"logo",style:{color:"#374785"}},"ProTaMa"),r.a.createElement("ul",{className:"sidebar-navigation"},r.a.createElement("li",null,r.a.createElement(b.b,{className:"navigation-style",to:"/api/main"},"Homepage")),r.a.createElement("li",null,r.a.createElement(b.b,{className:"navigation-style",to:"/api/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(b.b,{className:"navigation-style",to:"/api/projects/new"},"New project")),r.a.createElement("li",null,r.a.createElement(b.b,{className:"navigation-style",to:"/api/projects/tasks"},"Tasks"))))};var I=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"topbar-logo"},"Dashboard"))},w=a(11),x=a(24),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).showModal=function(){n.setState({show:!0})},n.hideModal=function(){n.setState({show:!1})},n.inputChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.updateTask=function(e){e.preventDefault();var t={taskId:n.state.taskId,taskTitle:n.state.taskTitle,taskDescription:n.state.taskDescription,taskPriority:n.state.taskPriority,taskState:n.state.taskState,project:n.state.project};f.updateTask(n.props.task.taskId,t).then((function(e){n.props.refresh()}))},n.state={taskId:n.props.taskId,taskTitle:"",taskDescription:"",taskPriority:"",taskState:""},n.state={show:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getTaskByTaskId(this.props.task.taskId).then((function(t){return e.setState({taskTitle:t.data.taskTitle,taskDescription:t.data.taskDescription,taskPriority:t.data.taskPriority,taskState:t.data.taskState})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-info btn-size",onClick:this.showModal},r.a.createElement(E.a,{title:"Update Task"})),r.a.createElement(w.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.state.show,onHide:this.hideModal},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"Update Task")),r.a.createElement("form",{onSubmit:this.updateTask},r.a.createElement(w.a.Body,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskTitle"},"Task Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:this.state.taskTitle,name:"taskTitle",onChange:this.inputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskDescription"},"Task Description"),r.a.createElement("textarea",{className:"form-control",id:"description",rows:"3",value:this.state.taskDescription,name:"taskDescription",onChange:this.inputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskPriority"},"Task Priority"),r.a.createElement("select",{className:"form-control",id:"priority",value:this.state.taskPriority,name:"taskPriority",onChange:this.inputChange},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose Priority"),r.a.createElement("option",{value:"LOW"},"LOW"),r.a.createElement("option",{value:"MEDIUM"},"MEDIUM"),r.a.createElement("option",{value:"HIGHT"},"HIGHT"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskState"},"Task State"),r.a.createElement("select",{className:"form-control",id:"state",value:this.state.taskState,name:"taskState",onChange:this.inputChange},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose State"),r.a.createElement("option",{value:"TODO"},"TODO"),r.a.createElement("option",{value:"INPROGRESS"},"INPROGRESS"),r.a.createElement("option",{value:"DONE"},"DONE")))),r.a.createElement(w.a.Footer,null,r.a.createElement(x.a,{variant:"secondary",onClick:this.hideModal},"Cancel"),r.a.createElement(x.a,{variant:"primary",onClick:this.hideModal,type:"submit"},"Save changes")))))}}]),a}(n.Component),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).showModal=function(){n.setState({show:!0})},n.hideModal=function(){n.setState({show:!1})},n.changePriorityColor=function(e){return"HIGHT"===e?"badge badge-danger float-left mr-2":"LOW"===e?"badge badge-success float-left mr-2":"badge badge-warning float-left mr-2"},n.changeStateColor=function(e){return"TODO"===e?"badge badge-danger float-left mr-2":"DONE"===e?"badge badge-success float-left mr-2":"badge badge-warning float-left mr-2"},n.state={show:!1},n}return Object(l.a)(a,[{key:"updateInprogress",value:function(e){var t=this;f.updateTaskInprogress(e).then((function(e){t.props.refresh()}))}},{key:"updateDone",value:function(e){var t=this;f.updateTaskDone(e).then((function(e){t.props.refresh()}))}},{key:"updateTodo",value:function(e){var t=this;f.updateTaskTodo(e).then((function(e){t.props.refresh()}))}},{key:"deleteTask",value:function(e){var t=this;f.deleteTask(e).then((function(e){t.props.refresh()}))}},{key:"render",value:function(){var e=this,t=this.props.task,a=t.taskId,n=t.taskTitle,s=t.taskDescription,o=t.taskPriority,c=t.taskState,l=t.created,i=t.updated;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"task-button btn",onClick:this.showModal},n),r.a.createElement(w.a,{show:this.state.show,onHide:this.hideModal,centered:!0},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"#",a,",   ",n)),r.a.createElement(w.a.Body,null,r.a.createElement("span",{className:this.changePriorityColor(o)},o),r.a.createElement("span",{className:this.changeStateColor(c)},c),r.a.createElement("br",null),r.a.createElement("hr",null),s,r.a.createElement("hr",null),"Created at: ",l,r.a.createElement("hr",null),"Updated at: ",i),r.a.createElement(w.a.Footer,null,r.a.createElement("div",{className:"btn-display"},r.a.createElement(M,{task:this.props.task,refresh:this.props.refresh}),r.a.createElement("button",{className:"btn btn-info btn-size",onClick:function(){return e.deleteTask(a)}},r.a.createElement(E.e,{title:"Delete Task"})),r.a.createElement("button",{className:"btn btn-info mt-3 mb-3 ml-1 mr-1",onClick:function(){return e.updateTodo(a)}},"TODO"),r.a.createElement("button",{className:"btn btn-info mt-3 mb-3 ml-1 mr-1",onClick:function(){return e.updateInprogress(a)}},"INPROGRESS"),r.a.createElement("button",{className:"btn btn-info mt-3 mb-3 ml-1 mr-1",onClick:function(){return e.updateDone(a)}},"DONE"),r.a.createElement("button",{className:"btn btn-info mt-3 mb-3 ml-1 mr-1",onClick:this.hideModal},"Close")))))}}]),a}(n.Component),R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeBtnColor=function(e){return"INPROGRESS"===e?"badge badge-danger":"COMPLETED"===e?"badge badge-success":"badge badge-warning"},n.todoTaskList=function(e){return console.log(e),e.filter((function(e){return"TODO"===e.taskState}))},n.inprogressTaskList=function(e){return e.filter((function(e){return"INPROGRESS"===e.taskState}))},n.doneTaskList=function(e){return e.filter((function(e){return"DONE"===e.taskState}))},n.changePriorityColor=function(e){return"HIGHT"===e?"badge badge-danger float-right":"LOW"===e?"badge badge-success float-right":"badge badge-warning float-right"},n.changeProjectStatus=function(e){e.length===n.doneTaskList(e).length?n.setState({projectStatus:"COMPLETED"}):n.todoTaskList(e)<=0&&n.inprogressTaskList(e)<=0&&n.doneTaskList(e)<=0?n.setState({projectStatus:"NEW"}):n.setState({projectStatus:"INPROGRESS"})},n.state={project:{},tasks:[]},n.refresh=n.refresh.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getProject(this.props.match.params.projectId).then((function(t){var a=t.data;console.log(a),e.setState({project:a})})),f.getTasksByProjectId(this.props.match.params.projectId).then((function(t){var a=t.data;console.log(a),e.setState({tasks:a})}))}},{key:"refresh",value:function(){this.componentDidMount()}},{key:"deleteTask",value:function(e){var t=this;f.deleteTask(e).then((function(e){t.componentDidMount()}))}},{key:"exportTasks",value:function(e){f.exportTasks(e).then((function(e){console.log(e);var t=window.URL.createObjectURL(new Blob([e.data]));console.log(t);var a=document.createElement("a");console.log(a),a.href=t,console.log(),a.target="_blank",a.download="Tasks.csv",document.body.appendChild(a),a.click()}))}},{key:"updateInprogress",value:function(e){var t=this;f.updateTaskInprogress(e).then((function(e){t.refresh()}))}},{key:"updateDone",value:function(e){var t=this;f.updateTaskDone(e).then((function(e){t.refresh()}))}},{key:"updateTodo",value:function(e){var t=this;f.updateTaskTodo(e).then((function(e){t.refresh()}))}},{key:"updateCompleted",value:function(e){var t=this;f.updateProjectCompleted(e).then((function(e){t.refresh()}))}},{key:"render",value:function(){var e=this,t=this.state.project,a=t.projectId,n=t.projectTitle,s=t.projectDescription,o=t.projectStatus;return r.a.createElement("div",{className:"content-container"},r.a.createElement("h3",{className:"text-center header"},"Project details"),r.a.createElement("div",{className:"card card-margin"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:this.changeBtnColor(o)},o)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},n),r.a.createElement("p",{className:"card-text"},s))),r.a.createElement(b.b,{to:"/api/projects/".concat(a,"/tasks/new")},r.a.createElement("button",{className:"btn button-color btn-lg"},"Add Task")),r.a.createElement(b.b,{to:"/api/projects/update/".concat(a)},r.a.createElement("button",{className:"btn button-color btn-lg"},"Update Project")),r.a.createElement("button",{className:"btn button-color btn-lg",onClick:function(){return e.updateCompleted(a)}},"Mark as Completed"),r.a.createElement("button",{className:"btn button-color btn-lg",onClick:function(){return e.exportTasks(a)}},"Export Tasks"),r.a.createElement("h4",{className:"text-center mt-3 mb-3 header"},"Tasks"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",null,this.todoTaskList(this.state.tasks).length>0&&r.a.createElement("div",null,r.a.createElement("h5",{className:"text-center header"},"TODO"),this.todoTaskList(this.state.tasks).map((function(t){return r.a.createElement("div",{key:t.taskId},r.a.createElement(L,{refresh:e.refresh,task:t}))}))))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",null,this.inprogressTaskList(this.state.tasks).length>0&&r.a.createElement("div",null,r.a.createElement("h5",{className:"text-center header"},"INPROGRESS"),this.inprogressTaskList(this.state.tasks).map((function(t){return r.a.createElement("div",{key:t.taskId},r.a.createElement(L,{refresh:e.refresh,task:t}))}))))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",null,this.doneTaskList(this.state.tasks).length>0&&r.a.createElement("div",null,r.a.createElement("h5",{className:"text-center header"},"DONE"),this.doneTaskList(this.state.tasks).map((function(t){return r.a.createElement("div",{key:t.taskId},r.a.createElement(L,{refresh:e.refresh,task:t}))})))))))}}]),a}(n.Component),F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).inputChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.updateForm=function(e){e.preventDefault();var t={projectId:n.state.projectId,projectTitle:n.state.projectTitle,projectDescription:n.state.projectDescription,projectStatus:n.state.projectStatus};f.updateProject(t.projectId,t).then((function(e){n.props.history.push("/api/projects")}))},n.state={projectId:n.props.match.params.projectId,projectTitle:"",projectDescription:"",projectStatus:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getProject(this.state.projectId).then((function(t){return e.setState({projectTitle:t.data.projectTitle,projectDescription:t.data.projectDescription,projectStatus:t.data.projectStatus})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"content-container"},r.a.createElement("h3",{className:"text-center header"},"Update Project"),r.a.createElement("form",{onSubmit:this.updateForm},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"projectTitle"},"Project Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:this.state.projectTitle,name:"projectTitle",onChange:this.inputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"projectDescription"},"Project Description"),r.a.createElement("textarea",{className:"form-control",id:"description",rows:"3",value:this.state.projectDescription,name:"projectDescription",onChange:this.inputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"projectStatus"},"Project Status"),r.a.createElement("select",{className:"form-control",id:"status",value:this.state.projectStatus,name:"projectStatus",onChange:this.inputChange},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose Status"),r.a.createElement("option",{value:"NEW"},"NEW"),r.a.createElement("option",{value:"INPROGRESS"},"INPROGRESS"),r.a.createElement("option",{value:"COMPLETED"},"COMPLETED"))),r.a.createElement("button",{type:"submit",className:"btn button-color-info"},"Update")))}}]),a}(n.Component);var G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).inputChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.submitForm=function(e){e.preventDefault();var t=n.state,a=function(e,t,a){var n=[];return 0===e.length&&n.push("Fill out the Task title."),e.length>0&&e.length<5&&n.push("Length of Task title should be from 5 to 75 characters."),e.length>75&&n.push("Length of Task title should be less than 75 characters."),0===t.length&&n.push("Fill out the Task description."),t.length>500&&n.push("Task description length should be less than 500 characters"),0===a.length&&n.push("Choose Task priority"),n}(t.taskTitle,t.taskDescription,t.taskPriority);if(a.length>0)n.setState({errors:a});else{var r={taskTitle:n.state.taskTitle,taskDescription:n.state.taskDescription,taskPriority:n.state.taskPriority,taskState:n.state.taskState};console.log(r),f.addTask(n.state.projectId,r).then((function(){return n.props.history.push("/api/projects/".concat(n.state.projectId,"/tasks"))})).then((function(){return n.props.history.push("/api/projects/".concat(n.state.projectId))}))}},n.state={taskTitle:"",taskDescription:"",taskPriority:"",taskState:"TODO",projectId:n.props.match.params.projectId,errors:[]},console.log("Projekto id: "+n.state.projectId),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"content-container"},r.a.createElement("h3",{className:"text-center header"},"Add new Task"),r.a.createElement("form",{onSubmit:this.submitForm},e.map((function(e){return r.a.createElement("p",{className:"error-css",key:e},"Error: ",e)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskTitle"},"Task Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:this.state.taskTitle,name:"taskTitle",onChange:this.inputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskDescription"},"Task Description"),r.a.createElement("textarea",{className:"form-control",id:"description",rows:"4",value:this.state.taskDescription,name:"taskDescription",onChange:this.inputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskPriority"},"Task Priority"),r.a.createElement("select",{className:"form-control",id:"priority",name:"taskPriority",onChange:this.inputChange,required:!0,defaultValue:"DEFAULT"},r.a.createElement("option",{value:"DEFAULT",disabled:!0},"Choose Priority"),r.a.createElement("option",{value:"LOW"},"LOW"),r.a.createElement("option",{value:"MEDIUM"},"MEDIUM"),r.a.createElement("option",{value:"HIGHT"},"HIGHT"))),r.a.createElement("button",{type:"submit",className:"btn button-color-info"},"Submit")))}}]),a}(n.Component),H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).showModal=function(){n.setState({show:!0})},n.hideModal=function(){n.setState({show:!1})},n.inputChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.updateTask=function(e){e.preventDefault();var t={taskId:n.state.taskId,taskTitle:n.state.taskTitle,taskDescription:n.state.taskDescription,taskPriority:n.state.taskPriority,taskState:n.state.taskState,project:n.state.project};f.updateTask(n.props.task.taskId,t).then((function(e){n.props.refresh()}))},n.state={taskId:n.props.taskId,taskTitle:"",taskDescription:"",taskPriority:"",taskState:""},n.state={show:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getTaskByTaskId(this.props.task.taskId).then((function(t){return e.setState({taskTitle:t.data.taskTitle,taskDescription:t.data.taskDescription,taskPriority:t.data.taskPriority,taskState:t.data.taskState})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-info btn-size",onClick:this.showModal},r.a.createElement(E.a,{title:"Update Task"})),r.a.createElement(w.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.state.show,onHide:this.hideModal},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"Update Task")),r.a.createElement("form",{onSubmit:this.updateTask},r.a.createElement(w.a.Body,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskTitle"},"Task Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:this.state.taskTitle,name:"taskTitle",onChange:this.inputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskDescription"},"Task Description"),r.a.createElement("textarea",{className:"form-control",id:"description",rows:"3",value:this.state.taskDescription,name:"taskDescription",onChange:this.inputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskPriority"},"Task Priority"),r.a.createElement("select",{className:"form-control",id:"priority",value:this.state.taskPriority,name:"taskPriority",onChange:this.inputChange},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose Priority"),r.a.createElement("option",{value:"LOW"},"LOW"),r.a.createElement("option",{value:"MEDIUM"},"MEDIUM"),r.a.createElement("option",{value:"HIGHT"},"HIGHT"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"taskState"},"Task State"),r.a.createElement("select",{className:"form-control",id:"state",value:this.state.taskState,name:"taskState",onChange:this.inputChange},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose State"),r.a.createElement("option",{value:"TODO"},"TODO"),r.a.createElement("option",{value:"INPROGRESS"},"INPROGRESS"),r.a.createElement("option",{value:"DONE"},"DONE")))),r.a.createElement(w.a.Footer,null,r.a.createElement(x.a,{variant:"secondary",onClick:this.hideModal},"Cancel"),r.a.createElement(x.a,{variant:"primary",onClick:this.hideModal,type:"submit"},"Save changes")))))}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).inputChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.submitForm=function(e){e.preventDefault(),f.searchTask(n.state.input).then((function(e){var t=e.data;console.log(t),n.setState({results:t}),n.props.search(t)}))},n.refreshTasks=function(){window.location.reload(!1)},n.state={input:"",results:[]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitForm,className:"form-inline my-2 my-lg-0 float-right"},r.a.createElement("input",{name:"input",className:"form-control mr-sm-2",type:"search",placeholder:"Search for...","aria-label":"Search",onChange:this.inputChange}),r.a.createElement("button",{className:"btn button-color-info my-2 my-sm-0 float-right",type:"reset",onClick:function(){return e.refreshTasks(e.state.tasks)}},"Back to List")))}}]),a}(n.Component),U=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).todoTaskList=function(e){return e.filter((function(e){return"TODO"===e.taskState}))},n.inprogressTaskList=function(e){return e.filter((function(e){return"INPROGRESS"===e.taskState}))},n.doneTaskList=function(e){return e.filter((function(e){return"DONE"===e.taskState}))},n.changePriorityColor=function(e){return"HIGHT"===e?"badge badge-danger float-right":"LOW"===e?"badge badge-success float-right":"badge badge-warning float-right"},n.search=function(e){console.log(e),n.setState({tasks:e})},n.refreshTasks=function(){window.location.reload(!1)},n.state={tasks:[]},n.refresh=n.refresh.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getTasks().then((function(t){var a=t.data;console.log(a),e.setState({tasks:a})}))}},{key:"refresh",value:function(){this.componentDidMount()}},{key:"deleteTask",value:function(e){var t=this;f.deleteTask(e).then((function(e){t.refresh()}))}},{key:"updateInprogress",value:function(e){var t=this;f.updateTaskInprogress(e).then((function(e){t.refresh()}))}},{key:"updateDone",value:function(e){var t=this;f.updateTaskDone(e).then((function(e){t.refresh()}))}},{key:"updateTodo",value:function(e){var t=this;f.updateTaskTodo(e).then((function(e){t.refresh()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content-container"},r.a.createElement(B,{search:this.search}),r.a.createElement("h3",{className:"text-center header mt-3 mb-3"},"Tasks"),r.a.createElement("div",{className:"card-deck"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header bg-danger text-center"},"TODO"),r.a.createElement("div",{className:"card-body"},this.todoTaskList(this.state.tasks).map((function(t){return r.a.createElement("div",{className:"card border-danger mb-3 card-size",key:t.taskId},r.a.createElement("div",{className:"card-header bg-transparent border-danger text-danger"},r.a.createElement("b",null,"#",t.taskId),r.a.createElement("span",{className:e.changePriorityColor(t.taskPriority)},t.taskPriority)),r.a.createElement("div",{className:"card-body text-danger"},r.a.createElement("h5",{className:"card-title"},t.taskTitle),r.a.createElement("p",{className:"card-text"},"Project Title: ",r.a.createElement("b",null,t.project.projectTitle)),r.a.createElement("p",{className:"card-text"},t.taskDescription)),r.a.createElement("div",{className:"btn-display"},r.a.createElement("button",{className:"btn btn-info btn-size",onClick:function(){return e.deleteTask(t.taskId)}},r.a.createElement(E.e,null)),r.a.createElement(H,{task:t,refresh:e.refresh}),r.a.createElement("button",{className:"btn btn-info mt-3 mb-3 ml-2 mr-2",onClick:function(){return e.updateInprogress(t.taskId)}},"INPROGRESS")))})))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header bg-warning text-center"},"INPROGRESS"),r.a.createElement("div",{className:"card-body"},this.inprogressTaskList(this.state.tasks).map((function(t){return r.a.createElement("div",{className:"card border-warning mb-3 card-size",key:t.taskId},r.a.createElement("div",{className:"card-header bg-transparent border-warning text-warning"},r.a.createElement("b",null,"#",t.taskId),r.a.createElement("span",{className:e.changePriorityColor(t.taskPriority)},t.taskPriority)),r.a.createElement("div",{className:"card-body text-warning"},r.a.createElement("h5",{className:"card-title"},t.taskTitle),r.a.createElement("p",{className:"card-text"},"Project Title: ",r.a.createElement("b",null,t.project.projectTitle)),r.a.createElement("p",{className:"card-text"},t.taskDescription)),r.a.createElement("div",{className:"btn-display"},r.a.createElement("button",{className:"btn btn-info btn-size",onClick:function(){return e.deleteTask(t.taskId)}},r.a.createElement(E.e,null)),r.a.createElement(H,{task:t,refresh:e.refresh}),r.a.createElement("button",{className:"btn btn-info mt-3 mb-3 ml-2 mr-2",onClick:function(){return e.updateDone(t.taskId)}},"DONE")))})))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header bg-success text-center"},"DONE"),r.a.createElement("div",{className:"card-body"},this.doneTaskList(this.state.tasks).map((function(t){return r.a.createElement("div",{className:"card border-success mb-3 card-size",key:t.taskId},r.a.createElement("div",{className:"card-header bg-transparent border-success text-success"},r.a.createElement("b",null,"#",t.taskId),r.a.createElement("span",{className:e.changePriorityColor(t.taskPriority)},t.taskPriority)),r.a.createElement("div",{className:"card-body text-success"},r.a.createElement("h5",{className:"card-title"},t.taskTitle),r.a.createElement("p",{className:"card-text"},"Project Title: ",r.a.createElement("b",null,t.project.projectTitle)),r.a.createElement("p",{className:"card-text"},t.taskDescription)),r.a.createElement("div",{className:"btn-display"},r.a.createElement("button",{className:"btn btn-info btn-size",onClick:function(){return e.deleteTask(t.taskId)}},r.a.createElement(E.e,null)),r.a.createElement(H,{task:t,refresh:e.refresh}),r.a.createElement("button",{className:"btn btn-info mt-3 mb-3 ml-2 mr-2",onClick:function(){return e.updateTodo(t.taskId)}},"TODO")))}))))))}}]),a}(n.Component),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(I,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:C}),r.a.createElement(m.a,{path:"/api/main",exact:!0,component:C}),r.a.createElement(m.a,{path:"/api/projects",exact:!0,component:T}),r.a.createElement(m.a,{path:"/api/projects/new",exact:!0,component:y}),r.a.createElement(m.a,{path:"/api/projects/tasks",exact:!0,component:U}),r.a.createElement(m.a,{path:"/api/projects/:projectId",exact:!0,component:R}),r.a.createElement(m.a,{path:"/api/projects/update/:projectId",exact:!0,component:F}),r.a.createElement(m.a,{path:"/api/projects/:projectId/tasks/new",exact:!0,component:G})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b.a,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.f789bd85.chunk.js.map