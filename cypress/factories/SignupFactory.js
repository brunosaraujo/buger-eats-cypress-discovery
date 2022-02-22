var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

  deliver: function() {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '219945786213',
      address: {
        postalcode: '26250160',
        street: 'Rua Rita Gonçalves',
        number: '560',
        details: 'Ap 101',
        district: 'Centro',
        city_state: 'Nova Iguaçu/RJ'
      },
      delevery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data

  }
}