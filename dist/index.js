import inquirer from 'inquirer';
const todoList = [];
async function main() {
    while (true) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose an action:',
                choices: [
                    'Add a task',
                    'List tasks',
                    'Quit',
                ],
            },
        ]);
        if (action === 'Quit') {
            console.log('Goodbye!');
            break;
        }
        if (action === 'Add a task') {
            const { task } = await inquirer.prompt({
                type: 'input',
                name: 'task',
                message: 'Enter the task:',
            });
            todoList.push(task);
        }
        if (action === 'List tasks') {
            console.log(('Your to-do list:'));
            for (const task of todoList) {
                console.log((`- ${task}`));
            }
        }
    }
}
main();
