import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({view}) => {
  return view.render('index')
})

Route.post('contact', 'ContactsController.contactMessage')
