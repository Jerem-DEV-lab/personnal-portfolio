import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'HomeController.index')
Route.get('/cv-guillemet-jeremy', 'HomeController.viewCv')
Route.post('contact', 'ContactsController.contactMessage')
