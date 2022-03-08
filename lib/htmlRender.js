// making a path with fs to templates 
const path = require(`path`);
const fs = require(`fs`);

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees =>{
    const html = [];

    // this will gather input from employee and will push to html so it can be rednered 

    html.push(employees
        .filter(employee => employee.getRole()=== "Manager")
        .map(manager => renderManger(manger))
        );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
        );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
        
        );
        return renderMain(html.join(``));        
            // This helps return  response to  the html 
}


// This will render name role email etc... into the html trmplates 

const renderEngineer = engineer =>{
    let template =fs.readFileSync(path.resolve(templatesDir,"engineer.html"), "uft8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders ()
    template = replacePlaceholders
    template = replacePlaceholders
    template = replacePlaceholders
}