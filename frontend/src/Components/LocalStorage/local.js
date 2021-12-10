// adding to local storage
const addToDb = name => {
    // checking if there is a storage
    const exists = localStorage.getItem('robot_box');
    // initalize storage
    let robot_box = {};
    //add to robot box when it doesnt exist
    if (!exists) {
        // first entry if there is no cart
        robot_box[name] = 1;
    }
    // robot box exist then check if the product is here
    else {
        robot_box = JSON.parse(exists);
        //    if exist increament quantity
        if (robot_box[name]) {
            const newCount = robot_box[name] + 1;
            robot_box[name] = newCount;
        }
        // if not entry first product
        else {
            robot_box[name] = 1;
        }
    }
    // updating the localstorage add function
    localStorage.setItem('robot_box', JSON.stringify(robot_box));
}

