const json = require('./data.json')

const meeting_room_items = () => {
    let meeting_room_data = json.filter((data) => data.placement.name === 'Meeting Room')
    let n = 1
    console.log('Items in the meeting room:')
    meeting_room_data.forEach(data => {
        console.log(`${n}. ${data.name}`)
        n++
    });
}

const all_electronic_device = () => {
    let electronic_device_data = json.filter((data) => data.type === 'electronic')
    let n = 1
    console.log('All electronic device:')
    electronic_device_data.forEach(data => {
        console.log(`${n}. ${data.name}`)
        n++
    })
}

const all_furniture = () => {
    let furniture_data = json.filter((data) => data.type === 'furniture')
    let n = 1
    console.log('All furniture:')
    furniture_data.forEach(data => {
        console.log(`${n}. ${data.name}`)
        n++
    })
}

const purchased_on_16_januari_2020 = () => {
    let januari_16_2020_data = json.filter((data) => new Date(data.purchased_at * 1000).setHours(0, 0, 0, 0) == new Date(2020, 0, 16).setHours(0, 0, 0, 0))
    let n = 1
    console.log('Items were purchased on 16 januari 2020')
    januari_16_2020_data.forEach(data => {
        console.log(`${n}. ${data.name}`)
        n++
    })
}

const brown_items = () => {
    let brown_items_array = json.filter((data) => data.tags.includes('brown'))
    let n = 1
    console.log('Items with brown color')
    brown_items_array.forEach(data => {
        console.log(`${n}. ${data.name}`)
    })
}

meeting_room_items()
all_electronic_device()
all_furniture()
purchased_on_16_januari_2020()
brown_items()