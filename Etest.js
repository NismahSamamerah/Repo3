class employee{
    Id;
    firstName;
    secondName;
    salary;

    setId(value) {
        if( !(typeof(value)==Number) && !(value <=100 && value >=1000)){
               console.log('Number must be between 100 & 1000');
               return;
              }
         
              this.Id = value;
    }

    setFirstName(firstName){
        if(!(typeof(firstName)== String) && !(firstName.length >=2 && firstName.length<=30)){
            console.log('FirstName Shoud be between 2 to 30');
            return;
        }
        this.firstName=firstName;
    }

    setSecondName(secondName){
        if(!(typeof(secondName)== String) && !(secondName.length >=2 && secondName.length<=30)){
            console.log('SecondName Shoud be between 2 to 30');
            return;
        }
        this.secondName=secondName;
    }

    setSalary(salary){
        if(!(typeof(value)==Number) && !(salary.length >=3000 && salary.length<=12000)){
            console.log('Salary must be between 3000 & 12000');
            return;
        }
        this.salary=salary;
    }

    getId(){
        return this.Id;
    }

    getFirstName(){
        return this.firstName;
    }

    getSecondName(){
        return this.secondName;
    }
}

const employee1 = new employee();
employee1.setId('comcs');
employee1.setFirstName('cccccccccccccccccccc.km;mnmmmmmmmmmccccc');
employee1.setSecondName('Besan');
employee1.setSalary(19999999999);
employee1.setSalary(3000);