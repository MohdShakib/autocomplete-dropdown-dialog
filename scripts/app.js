var app = new Vue({
    el: '#app',
    data: {
        options: [{
            team: 'Engineering',
            team1: 'Engineering',
            employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']
        },{
            team: 'Executive',
            team1: 'Executive',
            employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']
        },{
            team: 'Finance',
            team1: 'Finance',
            employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']
        },{
            team: 'Sales',
            team1: 'Sales',
            employees: ['Ankit Jain', 'Anjali Maulingkar']
        }],
        employees: [],
        selectedTeam: '',
        selectedEmployee: '',
        errorMsg: ''
	},
    methods: {
        teamSelected(option){
            this.selectedTeam = option && option.team;
            this.selectedEmployee = '';
            this.employees = (option && option.employees) || [];
        },
        employeeSelected(option){
            this.selectedEmployee = option || '';
        },
        click(type){
            var msg = '';
            switch (type) {
                case 'cancel':
                    if(this.selectedTeam || this.selectedEmployee){
                        confirm('Are you sure to close, changes will be lost !');
                    }
                    break;
                case 'ok':
                    if(!this.selectedTeam){
                        msg = 'Please select a team';
                    }else if(!this.selectedEmployee){
                        msg = 'Please select team\'s employee';
                    }else {
                        msg = 'Okay to submit';
                    }
                    alert(msg);
                    break;
            }
        }
     }
});
