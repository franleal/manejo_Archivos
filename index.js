
const fs = require('fs')

class Contenedor {

  constructor(archivo) {
    this.archivo = archivo;
  }

  //Save---------------------------------------------------------------------------
  async save(products) {
    try {
      //Generar archivo
      if(fs.existsSync(this.archivo)) {
          let info = await fs.promises.readFile(this.archivo, 'utf8')
          let result = JSON.parse(info)

          
          if (result.length > 0) {
              let lastId = result.length + 1
              let newProduct = {
                  id: lastId,
                  ...products
              }
              result.push(newProduct)
              await fs.promises.writeFile(this.archivo, JSON.stringify(result, null, 2))
              return lastId
          } else { 
              let newProduct = {
                  id: 1,
                  ...products
              }
              result.push(newProduct)
              await fs.promises.writeFile(this.archivo, JSON.stringify(result, null, 2))
              return 1
          }
      } else {
          //No existe el archivo
          let newProduct = {
              id: 1,
              ...products
          }
          await fs.promises.writeFile(this.archivo, JSON.stringify([newProduct], null, 2))
          return 1
      }
    } catch (error) {
        console.log(error)
    }
  }

  //getById---------------------------------------------------------------------------
  async getById(id) {
    try {
        let info = await fs.promises.readFile(this.archivo, 'utf8')
        let result = JSON.parse(info)

        return result.find(product => product.id === id)
    } catch (error) {
        console.log(`El archivo de ${id} no existe`)
    }
  }

  //getAll---------------------------------------------------------------------------
  async getAll() {
    try {
        let info = await fs.promises.readFile(this.archivo, 'utf8')
        let result = JSON.parse(info)
        return result
    } catch (error) {
        console.log(error)
    }
  }

  //deleteById----------------------------------------------------------------------------
  async deleteById(id) {
    try {
        let info = await fs.promises.readFile(this.archivo, 'utf8')
        let result = JSON.parse(info)

        const deleteObject = result.find(product => product.id === id)
        if(deleteObject) {
            const index = result.indexOf(deleteObject)
            result.splice(1, index)
            await fs.promises.writeFile(this.archivo, JSON.stringify(result, null, 2))
        } else {
            console.log(`Id ${id} no existe`)
        }
    } catch (error) {
        console.log(error)
    }
  }

  //deleteAll------------------------------------------------------------------------
  async deleteAll() {
    await fs.promises.writeFile(this.archivo, JSON.stringify([]))
  }
}

module.exports = Contenedor