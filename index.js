let employee = {
    name: 'erik',
    streetAddress: '2345 almont st'
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    return { ...object, [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value 
    return object
}

function deleteFromEmployeeByKey(object, key) {
    let newEmployee = {...object}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key]
    return object
}

