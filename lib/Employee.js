// creating a class to define and export 
class employee{
        constructor(name,id, email){
            this.name = name;
            this.id = id;
            this.email = email;
            this.title = "Emloyee"
        }


        getName(){
            return this.name;
        }
        getId(){
            return this.id;
        }
        getEmail(){
            return this.email;
        }
    getRole(){
        return this.title;
    }
}
module.exports = employee