const Contenedor = require('./index.js')

//New Contenedor-------------------------------------------------------------------------------------
const newContainer = new Contenedor('products.txt')

const globalFunction = async () => {
    //Save()-----------------------------------------------------------------------------------------------------------------------
    await newContainer.save({title: 'El señor de lo anillos', price: 5000, thumbnail: 'https://i.ibb.co/ZKgRL18/20061512.jpg'})
    await newContainer.save({title: 'Demon Slayer', price: 4500, thumbnail: 'https://i.ibb.co/sFGWN2k/thumb-1920-1007550.jpg'})
    await newContainer.save({title: 'Naruto', price: 3200, thumbnail: 'https://i.ibb.co/tM7066P/378271.jpg'})
    
    //Get by id()---------------------------------------------------------------------------------------------------
    const getId = await newContainer.getById(1)
    console.log('Archivo encontrado!')
    console.log(getId)

    //Delete by id()---------------------------------------------------------------------------------------
    await newContainer.deleteById(2)
    console.log('Archivo Borrado!')

    //Get all()----------------------------------------------------------------------------------------
    const getAll = await newContainer.getAll()
    console.log('Todos los archivos')
    console.log(getAll)

    //Delete all()--------------------------------------------------------------------------------------
    await newContainer.deleteAll()
    console.log('Archivos eliminados')

}

globalFunction()