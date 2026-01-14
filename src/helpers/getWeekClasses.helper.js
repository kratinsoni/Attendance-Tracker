// this function returns the number of classes scheduled in a week for the given slots

const getWeekClasses = (slots) => {
    let totalClasses = 0;

    slots.forEach(slot => {
        const classes = Number(slot[1])

        totalClasses += classes;
    })

    return totalClasses;
}

export default getWeekClasses;