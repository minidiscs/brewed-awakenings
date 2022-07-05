import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

const productsSold = (employee) => {
    let productsSoldNum = 0
    for (const order of orders) {
        if (employee.id === order.employeeId) {
            productsSoldNum++
        }
    }
    return productsSoldNum
}

document.addEventListener("click", (clickEvent) => employeeSalesAlert(clickEvent))

const employeeSalesAlert = (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("employee")) {
        const [,employeeId] = itemClicked.id.split("--")

        for (const employee of employees) {
            if (employee.id === parseInt(employeeId)) {
                const productsSoldNum = productsSold (employee)
                window.alert(`${employee.name} has sold ${productsSoldNum} products`)
            }
        }
    }
}
